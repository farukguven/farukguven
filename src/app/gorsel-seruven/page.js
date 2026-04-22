import { FloatingHeader } from '@/components/floating-header'
import { GradientBg3 } from '@/components/gradient-bg'
import { ImageSlider } from '@/components/image-slider'
import { PageTitle } from '@/components/page-title'
import { ScrollArea } from '@/components/scroll-area'
import { ScrollToTop } from '@/components/scroll-to-top'

export default function Filmografi() {
  const images2015 = [
    '/assets/2015/IMG_4670.JPG',
    '/assets/2015/IMG_4676.JPG',
    '/assets/2015/IMG_4732.JPG',
    '/assets/2015/IMG_4751.JPG',
    '/assets/2015/IMG_4820 (1).JPG',
    '/assets/2015/IMG_4826.JPG',
    '/assets/2015/IMG_4851.JPG',
    '/assets/2015/IMG_4892.JPG',
    '/assets/2015/IMG_5038.JPG',
    '/assets/2015/IMG_5071.JPG',
    '/assets/2015/IMG_5096.JPG',
    '/assets/2015/IMG_5169.JPG',
    '/assets/2015/IMG_5227.JPG',
    '/assets/2015/IMG_5458.JPG'
  ]

  const images2016 = [
    '/assets/2016/20161105_182737.JPG',
    '/assets/2016/20161105_183236.JPG',
    '/assets/2016/20161105_183609.JPG',
    '/assets/2016/20161105_183731.JPG'
  ]

  return (
    <ScrollArea useScrollAreaId>
      <GradientBg3 />
      <FloatingHeader scrollTitle="Görsel Serüven" />
      <div className="content-wrapper">
        <div className="content">
          <PageTitle title="Görsel Serüven" />
          <div className="flex flex-col gap-12">
            <p className="text-gray-600">
              Her şey 2011'de lisede Adobe Flash ile yaptığım ufak animasyonlar ve bir hevesle aldığım Canon 600D ile çektiğim kısa filmlerle başladı. Merakla çıktığım bu görsel serüvenden geriye kalan bazı anılar.
            </p>

            <div className="flex flex-col items-stretch gap-12">
              
              {/* 2013 Section */}
              <div className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                <h2 className="text-2xl font-bold mt-1 text-gray-900 w-20">2013</h2>
                <section className="flex-1 w-full min-w-0">
                  
                  {/* Timeline Item 1: UK-2911 Main */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">UK-2911: Türkiye'nin İlk 3D Uzun Metraj Animasyon Filmi</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Farklı bir gezegene hasarlı iniş yapan bir avuç Türk uzay mürettebatının maceralarını anlatan UK-2911 projesi... Türkiye'nin ilk 3D animasyon sinema filmi olan bu projede yer almak benim için güzel bir tecrübeydi. <br/><br/>
                            <strong>Projedeki Sorumluluklarım:</strong><br/>
                            • <strong>Karakter yüz animasyonları</strong> (Mimiklere ruh katmaya çalışırken ayna karşısında kendi yüzümüzü şekilden şekle soktuğumuz anlar)<br/>
                            • <strong>Post-prodüksiyon işlemleri</strong> (Saatlerce renk ve sahne uyumlarıyla boğuşmaca)<br/>
                            • <strong>Full 3D Sağ / Sol kanal ayırma ve 3D gözlükle sanal derinlik testleri</strong> (Gözlükleri takıp şaşı olduğumuz uzun ve kör edici geceler)<br/>
                            • <strong>Yapım aşamalarının kayıt altına alınması</strong> (Elimde kamerayla setin belalısı olduğum doğrudur)
                        </p>
                        <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                          <img src="/assets/Animaj_2013.jpeg" alt="Animaj 2013 UK-2911" className="h-auto w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item: Başlangıç (IMAG0533) */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">Projeye Başlangıç</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Çalışmalara lise arkadaşım Yunus ile birlikte katılmıştık. Fotoğrafta arkamda kendisini görebilirsiniz. Beraber bir şeyler öğrenip projeye katkı sunmaya çabaladığımız keyifli zamanlardı.
                        </p>
                        <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                          <img src="/assets/IMAG0533.JPG" alt="Projeye Başlangıç Yunus ile" className="h-auto w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item: Rigging & Michael Şahin Derun (IMAG1135) */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">Karakter İskelet Giydirme (Rigging)</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Karakterlere nasıl kemik ekleneceğini, iskelet giydirme (rigging) süreçlerini öğrenirken çekilmiş bir anı. Yönetmenimiz Michael Şahin Derun'dan bu detayları öğrenmek bizim için değerli bir deneyimdi.
                        </p>
                        <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                          <img src="/assets/IMAG1135.JPG" alt="Michael Şahin Derun ile Rigging" className="h-auto w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item: Render Farm (IMAG0703) */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">Yapım Aşaması: Ofis ve Render Farm</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Çalıştığımız ofis ve arkamda filmin hesaplama yükünü çeken Render Farm sistemi. O dönem uzun mesailer harcadığımız, sürekli yeni şeyler öğrenip ürettiğimiz yoğun ama tatlı bir ortamdı. O fanların çıkardığı uğultu ise hala kulağımda.
                        </p>
                        <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                          <img src="/assets/IMAG0703.JPG" alt="Animaj Ofis Render Farm" className="h-auto w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item: Post Production (IMAG0606) */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">Post-Prodüksiyon ve Asus G75VW 3D</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Gelelim post-prodüksiyon tarafına... Görseldeki Asus G75VW 3D bilgisayar benim için çok kıymetliydi. O dönem lisedeydim ve ailemin bana bu bilgisayarı alması büyük bir fedakârlıktı. Devasa 3D ekranı sayesinde sahnelerin derinlik testlerini kusursuzca çıkarabilmiş, post-prodüksiyon sürecini sorunsuz tamamlamıştık.
                        </p>
                        <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                          <img src="/assets/IMAG0606.JPG" alt="Asus G75VW 3D Post Prodüksiyon" className="h-auto w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item: Gazete Haberleri */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">Basında Biz</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Türkiye'nin ilk 3D uzun metraj animasyonu unvanını taşıdığımız için projemiz vizyon öncesi basında da yer bulmuştu. O dönem ulusal gazetelerde çıkan küçük bir röportajımız; bizim için güzel bir anı.
                        </p>
                        <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                          <img src="/assets/UK2911-Gazete.JPG" alt="UK-2911 Gazete Haberi" className="h-auto w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item: LightWave 3D */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">LightWave 3D Makalesi</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Kullandığımız 3D modelleme programı LightWave 3D'nin resmi magazininde de ufak bir makaleyle projeden bahsedilmişti. Yurtdışındaki bir dergide çalışmamızı görmek bizi mutlu etmişti.
                        </p>
                        <div className="mt-2 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                          <img src="/assets/uk-2911_siggraph_2.jpg" alt="UK-2911 LightWave 3D Magazin" className="h-auto w-full object-cover" />
                        </div>
                      </div>
                    </div>
                  </div>

                </section>
              </div>

              {/* 2014 Section */}
              <div className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                <h2 className="text-2xl font-bold mt-1 text-gray-900 w-20">2014</h2>
                <section className="flex-1 w-full min-w-0">
                  
                  {/* Timeline Item: Sektöre Ara */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>

                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">Sektöre Ara</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Sinema projemiz tamamlandıktan sonra kendime yeni bir yol çizmek ve kurumsal hayatta tecrübe edinmek amacıyla Korkmaz Mutfak Eşyaları'nda IT pozisyonunda çalışmaya başladım. Aradan geçen bir yıllık yoğun iş temposunun ardından içimdeki sanat hevesine engel olamayıp mevcut işimi bırakmadan sektöre ufaktan geri döndüm. Gündüzleri IT alanındaki işlerimi tamamlıyor, akşamları ise kısa film çekimleri, görsel efekt ve post-prodüksiyon işleriyle ilgileniyordum.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Item: Eğitmenlik */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">Genç Yaşta Eğitmenlik Deneyimi</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Yoğun temponun getirdiği tecrübelerle, henüz 19 yaşımdayken üniversite öğrencilerine kamera kullanımı ve post-prodüksiyon yazılımları üzerine eğitimler verme şansı yakaladım. Zor şartlarda öğrendiklerimi başkalarına aktarabilmek benim için oldukça değerliydi.
                        </p>
                      </div>
                    </div>
                  </div>

                </section>
              </div>

              {/* 2015 Section (Slider) */}
              <div className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                <h2 className="text-2xl font-bold mt-1 text-gray-900 w-20">2015</h2>
                <section className="flex-1 w-full min-w-0">
                  
                  {/* Timeline Item: 2015 Görselleri */}
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8 overflow-hidden">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">2015'ten Geriye Kalanlar</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Bu dönemde koşturmacanın ve yeni işlerin arasında objektiflere yansıyan birkaç anı. Görselleri kaydırabilir veya üzerlerine tıklayabilirsiniz.
                        </p>
                        
                        <ImageSlider images={images2015} />

                        <p className="text-gray-600 leading-relaxed mt-4">
                            2015 yılındaki kısa film, eğitim ve prodüksiyon işlerim çok uzun sürmedi. İstediğim sonuçları tam olarak alamamış olsam da, bu süreçte çok güzel arkadaşlıklar edindim ve onlara veda edip tekrar kendi yoluma odaklandım.
                        </p>

                      </div>
                    </div>
                  </div>

                </section>
              </div>

              {/* 2016 Section */}
              <div className="flex flex-col items-baseline gap-6 md:flex-row md:gap-12">
                <h2 className="text-2xl font-bold mt-1 text-gray-900 w-20">2016</h2>
                <section className="flex-1 w-full min-w-0">
                  
                  <div className="relative flex pb-12 last:pb-0">
                    <div className="absolute inset-0 flex w-5 justify-center">
                      <div className="pointer-events-none h-full w-px border-l border-dashed border-gray-200"></div>
                    </div>
                    <div className="z-0 mt-1 grid size-5 shrink-0 place-items-center rounded-full border bg-white shadow-xs">
                      <div className="size-2 rounded-full bg-blue-600" />
                    </div>
                    
                    <div className="grow pl-4 lg:pl-8 overflow-hidden">
                      <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold text-gray-900">AnatoliaVR 360 Derece Video Serüveni</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Korkmaz'da IT alanındaki görevime devam ederken her zamanki görsel uğraşlarıma yeni bir boyut kattım. Kendi tasarladığım donanımlarla 360 derece çekimler yapmaya başladım ve <strong>AnatoliaVR</strong> isimli tescilli bir marka kurarak ürettiğim içerikleri YouTube'da yayınladım. Hatta bu sürede SoloTürk'ten özel çekim daveti bile aldım. Fakat ilerleyen süreçte pazara giren LG 360 Cam ve Samsung Gear 360 gibi tüketici kameraları sayesinde bu format herkesin rahatça kullanabileceği bir teknolojiye evrildi. Emek yoğun olan o ilk dönemin ruhunun kaybolduğunu görünce de, harcadığım büyük efora daha fazla değmeyeceğini düşünüp bu güzel projeyi tadında bırakma kararı aldım.
                        </p>
                        
                        <ImageSlider images={images2016} />

                        {/* 2016 YouTube Videos */}
                        <div className="flex flex-col md:flex-row gap-4 mt-4">
                            <iframe 
                                className="w-full md:w-1/2 rounded-2xl border border-gray-200 shadow-sm aspect-video" 
                                src="https://www.youtube.com/embed/5B-F8jeOxEo" 
                                title="360 Derece Video 1"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                            <iframe
                                className="w-full md:w-1/2 rounded-2xl border border-gray-200 shadow-sm aspect-video"
                                src="https://www.youtube.com/embed/hTp62UKqfxo"
                                title="360 Derece Video 2"
                                loading="lazy"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                      </div>
                    </div>
                  </div>

                </section>
              </div>

              {/* Conclusion Section */}
              <div className="mt-8 flex flex-col items-center justify-center text-center pb-12">
                <div className="max-w-2xl px-4">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Görsel Sanatlara Virgül, IT Kariyerine Merhaba</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Aslında 2014 yılında Korkmaz'da adım attığım Bilgi Teknolojileri (IT) kariyerime, bu son serüvenin ardından artık tam zamanlı ve tek odak noktam olarak devam etme kararı aldım. Ancak görsel sanatlara olan düşkünlüğümü asla rafa kaldırmadım; edindiğim bu estetik tecrübeleri hayatımın her alanında, özellikle IT dünyasında kullanmaya devam ediyorum. Artık bu tarz devasa ölçekli görsel işlerle uğraşmasam da, bu alanı hep keyifli bir hobi olarak sürdüreceğim.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Fakat zamanı geldiğinde, hayalimdeki o çizgi filmi yapmak için tekrar o masaya oturacağım. :)
                  </p>
                  <div className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 bg-gray-50 rounded-full">
                    <span className="text-gray-900 font-medium tracking-wide">IT Hayatında görüşmek üzere! 👋</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <ScrollToTop />
    </ScrollArea>
  )
}

export const metadata = {
  title: 'Görsel Serüven',
  description: 'Sinema, animasyon, 3D ve görsel sanatlar alanındaki üretim serüvenim'
}
