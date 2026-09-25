# Açık işler

Karara bağlanmış ama henüz yapılmamış işler. Yapıldıkça buradan silinir;
gerekçesi olan kararlar ilgili belgeye (DESIGN.md, PRODUCT.md,
SEO-GEO-PLAN.md) taşınır.

---

## 0. Yayından önce — form ve kimlik bilgileri (V4)

**Durum (2026-09-25).** Formlar (`components/v4/LeadForm4.tsx`) lead
kapısına bağlı: `/api/lead` → HubSpot + Google Sheets. Kapının hedefleri
Netlify ortam değişkenleriyle bağlanır; bağlanana kadar kapı 503 döner ve
form ziyaretçiye verinin hiçbir yere gitmediğini açıkça söyler.

- [x] **Form hedefi** → lead kapısı yazıldı (2026-09-25): `/api/lead`
      (`netlify/functions/lead.mjs`) → HubSpot + Google Sheets yedeği.
- [ ] **Hedefleri bağla** → HubSpot hesabı + Private App, Sheets + Apps
      Script, Netlify ortam değişkenleri. Adım adım:
      `araclar/lead/KURULUM.md`. Bağlanana kadar kapı 503 döner, form
      "hiçbir yere gönderilmedi" der.
- [ ] **Calendly — askıda.** dolarhane uzantılı e-posta açılınca kurulacak.
      `KONTAK.calendly` boşken başarı ekranında düğme görünmüyor.
      Not: §1'deki karar araya e-posta adımı koyuyordu; link gelince hangi
      akışın kalacağı netleşmeli. HubSpot'un kendi randevu aracı da seçenek.
- [ ] **İYS kaydı** → ticari ileti (pazarlama izni) göndermeden önce.
- [ ] **KVKK aydınlatma metni + onay metinleri** → formun onay satırındaki
      `[AYDINLATMA METNİ]` yer tutucusu gerçek sayfaya bağlanacak. İki onay
      metni (zorunlu işleme + isteğe bağlı ticari ileti) hukuk onayından
      geçecek; yurt dışına aktarım (HubSpot, Google) metinde yer almalı.
- [ ] **Footer kimlik bilgileri** → `KIMLIK` dizisi: tüzel kişilik, ABD
      ofis, Türkiye iletişim, telefon, ABD emlak lisansı, e-posta. Boş
      alanlar bugün kesikli çerçeveli yer tutucu olarak görünüyor.

## 1. Form otomasyonu — lead'den randevuya

**Karar (2026-09-23).** Formu dolduran kişi doğrudan Calendly'ye
düşmeyecek; araya bir e-posta adımı giriyor.

Akış:

1. **Form gönderilir.** Ad, telefon, değerlendirilen nakit bandı, KVKK
   onayı. (`components/v3/Kapanis3.tsx` — bugün `KONTAK.formEndpoint`
   boş olduğu için hiçbir yere gitmiyor ve sayfa bunu yazılı söylüyor.)
2. **Lead kaydedilir.** Hazır araç kullanılacak, CRM yazılmayacak
   (Airtable / Attio).
3. **Otomatik e-posta gider.** İçinde randevu bağlantısı var.
4. **Kullanıcı linke tıklar → Calendly açılır.**
5. **Kendi slotunu seçer → birebir Zoom.**

Neden araya e-posta giriyor: e-posta adresi doğrulanmış oluyor, lead
kaydı telefon dışında bir kanala da bağlanıyor, ve randevuyu açan kişi
zaten bir kez daha niyet göstermiş oluyor.

**Sayfadaki karşılığı:** huni bugün dört adım gösteriyor (mesaj → aynı
gün konuşma → takvimden randevu → görüşme) ve akış bununla uyumlu.
Otomasyon kurulunca "aynı gün konuşma" adımının metni gözden geçirilmeli:
ilk temas insan değil e-posta olacak.

**Yapılacaklar**
- [x] Form hedefi ve lead deposu: HubSpot + Sheets (2026-09-25, bkz. §0).
- [ ] E-posta gönderim servisi seçilecek.
- [ ] Calendly — askıda (dolarhane uzantılı e-posta bekleniyor, bkz. §0).
- [x] KVKK: onay ikiye ayrıldı (2026-09-25) — zorunlu işleme onayı +
      isteğe bağlı ticari ileti izni. Pazarlama yalnız izin verenlere.

## 2. E-posta şablonları

Otomasyonun taşıyacağı metinler. Sayfanın dilini sürdürmeli: iddia
disiplini, abartısız, rakam varsa `lib/finance.ts` ile aynı.

- [ ] **Talep alındı + randevu daveti.** Otomasyonun 3. adımı. Tek
      birincil eylem: Calendly bağlantısı. Görüşmede ne konuşulacağını
      bir cümleyle söyler.
- [ ] **Randevu onayı.** Slot seçildikten sonra; tarih, Zoom bağlantısı,
      görüşmeye hazırlık için tek satır.
- [ ] **Hatırlatma.** Görüşmeden önce.
- [ ] **Görüşme sonrası özet.** Konuşulan senaryonun rakamları +
      hesabın tamamına bağlantı.
- [ ] **Gelmeyen için yeniden randevu.**

Şablonlarda uyulacaklar: garanti/kesin kazanç dili yok (marka kiti §06),
uydurma rakam yok, her rakam senaryosuyla yazılır, şehir adı geçmez
(DESIGN.md kural 11).

## 3. Blog — devam

- [x] Blog, küme, yazı ve "Hesabın tamamı" sayfaları V4 diline geçti
      (2026-09-25): ortak nav/alt şerit, koyu üst bant, Gambetta
      başlıklar, editoryal yazı listesi (`components/v4/OkumaKabuk4.tsx`,
      `app/v4-okuma.css`). Gövde bileşenleri yeniden yazılmadı; token'lar
      V4 paletine çevrildi.
- [ ] Vergi kümesi tamamen taslak; uzman onayı gelince `/blog` listesine
      kendiliğinden giriyor (`doluKumeler()`).
- [ ] Başlıklar: bir kısmı jargonla başlıyor (`FIRPTA:`, `W-8BEN`,
      `1040-NR`). Arama niyeti tam olarak o kelimeler olduğu için
      değiştirmek SEO'yu bozar; karar bekliyor.

## 4. Logo

- [x] Şeffaf zeminli SVG geldi (2026-09-23) ve başlıkta kullanılıyor.
- [ ] Tek renk (monokrom) sürüm — gri tonlama ve kaşe için.
- [ ] Kilit dosyalarının yazısı outline'a çevrilirse tek parça kilit
      web'de de kullanılabilir; bugün Montserrat istediği için
      kullanılmıyor.

**Kural (2026-09-23): logo yeniden çizilmez.** Bir kez denendi ve geri
alındı. Amblemin kırpımı/bulanıklığı gerçek bir sorun ama çözümü kaynak
dosyayı istemek; siluetin "düz vektör yorumu" markanın yerine geçmez.
Sitede yalnız `public/logo/amblem.png` kullanılır.
