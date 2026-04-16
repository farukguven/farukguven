#!/bin/bash
#
# Farukguven.com — NAS Deploy Script
# Localhost'taki projeyi Synology NAS'a deploy eder.
# Kullanım: ./deploy.sh
#

set -e

# ─── Ayarlar ───────────────────────────────────────────────
NAS_USER="farukguven"
NAS_LOCAL_IP="192.168.50.100"
NAS_PUBLIC_IP="176.88.237.81"
NAS_SSH_PORT_LOCAL=22
NAS_SSH_PORT_PUBLIC=2222
NAS_DEPLOY_DIR="/volume1/homes/farukguven/farukguven-deploy"
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"

# ─── Renkler ───────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m'

# ─── Yardımcı Fonksiyonlar ─────────────────────────────────
log_info()  { echo -e "${BLUE}[INFO]${NC} $1"; }
log_ok()    { echo -e "${GREEN}[OK]${NC} $1"; }
log_warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error() { echo -e "${RED}[ERROR]${NC} $1"; }
log_step()  { echo -e "\n${CYAN}━━━ $1 ━━━${NC}"; }

# ─── Ağ Tespiti ────────────────────────────────────────────
detect_network() {
    log_step "Ağ bağlantısı tespit ediliyor"

    if ssh -o StrictHostKeyChecking=no -o ConnectTimeout=3 -o BatchMode=yes \
       -p $NAS_SSH_PORT_LOCAL ${NAS_USER}@${NAS_LOCAL_IP} "echo ok" &>/dev/null; then
        NAS_HOST=$NAS_LOCAL_IP
        NAS_PORT=$NAS_SSH_PORT_LOCAL
        log_ok "Lokal ağ üzerinden bağlanıldı (${NAS_LOCAL_IP})"
        return 0
    fi

    log_warn "Lokal ağ bulunamadı, public IP deneniyor..."
    if ssh -o StrictHostKeyChecking=no -o ConnectTimeout=5 -o BatchMode=yes \
       -p $NAS_SSH_PORT_PUBLIC ${NAS_USER}@${NAS_PUBLIC_IP} "echo ok" &>/dev/null; then
        NAS_HOST=$NAS_PUBLIC_IP
        NAS_PORT=$NAS_SSH_PORT_PUBLIC
        log_ok "Public IP üzerinden bağlanıldı (${NAS_PUBLIC_IP}:${NAS_SSH_PORT_PUBLIC})"
        return 0
    fi

    log_error "NAS'a bağlanılamadı!"
    exit 1
}

# ─── SSH Kısayol ───────────────────────────────────────────
nas_ssh() {
    ssh -o StrictHostKeyChecking=no -o ConnectTimeout=10 \
        -p $NAS_PORT ${NAS_USER}@${NAS_HOST} "$@"
}

# ─── Dosya Transferi ──────────────────────────────────────
transfer_files() {
    log_step "Dosyalar NAS'a aktarılıyor"
    nas_ssh "mkdir -p ${NAS_DEPLOY_DIR}"
    cd "$PROJECT_DIR"
    tar czf - \
        --exclude='node_modules' \
        --exclude='.next' \
        --exclude='.git' \
        --exclude='.million' \
        --exclude='.DS_Store' \
        --exclude='deploy.log' \
        . | nas_ssh "cd ${NAS_DEPLOY_DIR} && tar xzf -" 2>/dev/null
    log_ok "Dosyalar başarıyla aktarıldı"
}

# ─── Docker Build & Deploy ────────────────────────────────
docker_deploy() {
    log_step "Docker build & deploy başlatılıyor"

    # deploy-site.sh'ı NAS'a gönder
    cat > /tmp/nas-deploy-site.sh << 'DEPLOY_EOF'
#!/bin/bash
cd /volume1/homes/farukguven/farukguven-deploy || { echo "Failed to cd"; exit 1; }
/usr/local/bin/docker build -t farukguven-site .
/usr/local/bin/docker rm -f farukguven-site || true
/usr/local/bin/docker run -d -p 3000:3000 --name farukguven-site --restart always farukguven-site
DEPLOY_EOF
    cat /tmp/nas-deploy-site.sh | nas_ssh "cat > /tmp/deploy-site.sh"

    # Expect scriptini oluştur (ayrı dosya — escape sorunları yok)
    cat > /tmp/nas-sudo-deploy.exp << 'EXPECT_SCRIPT'
set timeout -1
set host [lindex $argv 0]
set port [lindex $argv 1]
set user [lindex $argv 2]

spawn ssh -tt -o StrictHostKeyChecking=no -p $port $user@$host

expect {
    -nocase "password:" {
        send -- "\\\\-_-As25Um95Fa94-_-//\r"
        expect -re {.*(\$|#|>) ?}
    }
    -re {.*(\$|#|>) ?} {
    }
}

send "sudo bash /tmp/deploy-site.sh > /tmp/deploy.log 2>&1\r"
expect -nocase "password:"
send -- "\\\\-_-As25Um95Fa94-_-//\r"
expect -re {.*(\$|#|>) ?}

send "exit\r"
expect eof
EXPECT_SCRIPT

    expect /tmp/nas-sudo-deploy.exp "$NAS_HOST" "$NAS_PORT" "$NAS_USER"

    log_info "Docker build arka planda çalışıyor, takip ediliyor..."

    # Build durumunu takip et
    local prev_line=""
    local done=false
    while ! $done; do
        sleep 5
        local last_line
        last_line=$(nas_ssh "tail -n 1 /tmp/deploy.log" 2>/dev/null || echo "")

        if [ "$last_line" != "$prev_line" ] && [ -n "$last_line" ]; then
            echo -e "  ${YELLOW}→${NC} $last_line"
            prev_line="$last_line"
        fi

        # Build tamamlandı mı?
        if nas_ssh "cat /tmp/deploy.log" 2>/dev/null | grep -q "Successfully tagged"; then
            done=true
        fi
        # Hata mı var?
        if nas_ssh "grep -c 'returned a non-zero code\|FAIL\|Error response' /tmp/deploy.log" 2>/dev/null | grep -qv "^0$"; then
            log_error "Build hatası tespit edildi!"
            done=true
        fi
    done

    if nas_ssh "cat /tmp/deploy.log" 2>/dev/null | grep -q "Successfully tagged"; then
        log_ok "Docker build başarılı!"
    else
        log_error "Docker build başarısız! Deploy log:"
        nas_ssh "tail -n 20 /tmp/deploy.log" 2>/dev/null
        exit 1
    fi
}

# ─── Doğrulama ─────────────────────────────────────────────
verify_deploy() {
    log_step "Deploy doğrulanıyor"
    sleep 3

    local site_url=""
    if [ "$NAS_HOST" = "$NAS_LOCAL_IP" ]; then
        site_url="http://${NAS_LOCAL_IP}:3000"
    else
        site_url="http://${NAS_PUBLIC_IP}:3000"
    fi

    if curl -s -o /dev/null -w "%{http_code}" "$site_url" | grep -q "200"; then
        log_ok "Site erişilebilir: ${site_url}"
    else
        log_warn "Site henüz hazır olmayabilir: ${site_url}"
    fi

    local public_url="http://176.88.237.81:3000"
    if curl -s -o /dev/null -w "%{http_code}" --connect-timeout 5 "$public_url" | grep -q "200"; then
        log_ok "Public erişim OK: ${public_url}"
    fi
}

# ─── Ana Akış ──────────────────────────────────────────────
main() {
    echo -e "${CYAN}"
    echo "╔════════════════════════════════════════════╗"
    echo "║   Farukguven.com — NAS Deploy Script      ║"
    echo "╚════════════════════════════════════════════╝"
    echo -e "${NC}"

    local start_time=$(date +%s)

    detect_network
    transfer_files
    docker_deploy
    verify_deploy

    local end_time=$(date +%s)
    local duration=$((end_time - start_time))

    echo ""
    log_step "Deploy Tamamlandı!"
    log_ok "Toplam süre: ${duration} saniye"
    log_ok "Lokal:  http://${NAS_LOCAL_IP}:3000"
    log_ok "Public: http://176.88.237.81:3000"
}

main "$@"
