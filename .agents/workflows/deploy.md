---
description: Deploy website changes to Synology NAS
---

# Deploy to NAS

Bu workflow, localhost'taki değişiklikleri Synology NAS'a deploy eder.

## Adımlar

// turbo-all

1. Proje dosyalarını NAS'a aktar ve Docker container'ı yeniden oluştur:
```bash
cd /Users/dfg/SynologyDrive/Projeler/Farukguvencom/farukguven && ./deploy.sh
```

2. Deploy tamamlandıktan sonra siteyi doğrula:
- Lokal: http://192.168.50.100:3000
- Public: http://176.88.237.81:3000

## Notlar

- Script otomatik olarak lokal ağ mı yoksa uzak bağlantı mı olduğunu tespit eder
- Lokal ağda: `192.168.50.100:22` üzerinden bağlanır
- Uzak ağda: `176.88.237.81:2222` üzerinden bağlanır
- NAS deploy dizini: `/volume1/homes/farukguven/farukguven-deploy/`
- Docker container adı: `farukguven-site`
- Docker container portu: `3000`
