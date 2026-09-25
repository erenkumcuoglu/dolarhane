# Açık işler

Karara bağlanmış ama henüz yapılmamış işler. Yapıldıkça buradan silinir;
gerekçesi olan kararlar ilgili belgeye (DESIGN.md, PRODUCT.md,
SEO-GEO-PLAN.md) taşınır.

---

## 0. Yayından önce — form ve kimlik bilgileri (V4)

**Durum (2026-09-25).** Ana sayfa ve ev detay sayfalarındaki form
(`components/v4/LeadForm4.tsx`) henüz bir hedefe bağlı değil. Doldurulan
bilgiler hiçbir yere gitmiyor ve form ziyaretçiye bunu açıkça söylüyor
("Form henüz bir hedefe bağlanmadı… Bilgileriniz hiçbir yere
gönderilmedi."). Aşağıdakiler gelince bağlanacak — hepsi `lib/kontak.ts`
ve tek yerden:

- [ ] **Form hedefi** → `KONTAK.formEndpoint` (Formspree / Sheets / CRM).
      Gönderilen alanlar: ad, soyad, eposta, tel, band, kanal, kvkk, ev
      (detay sayfasından), utm_*, gclid, fbclid, giris_sayfasi, referrer.
      `_gotcha` bal küpü — hedef tarafta boş değilse kayıt atılmalı.
- [ ] **Calendly linki** → `KONTAK.calendly`. Boşken başarı ekranında
      `[CALENDLY LİNKİ]` yer tutucusu görünüyor.
      Not: LeadForm4 bugün başarıdan sonra doğrudan "Takvimden saat seçin"
      düğmesi gösteriyor; §1'deki kararda araya e-posta adımı giriyordu.
      Otomasyon kurulurken hangisinin kalacağı netleşmeli.
- [ ] **KVKK aydınlatma metni** → formun onay satırındaki
      `[AYDINLATMA METNİ]` yer tutucusu gerçek sayfaya bağlanacak
      (metni hukuk yazacak).
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
- [ ] Form hedefi seçilip `lib/kontak.ts`'teki `formEndpoint` doldurulacak.
- [ ] Lead deposu (Airtable/Attio) kurulacak, alan şeması yazılacak.
- [ ] E-posta gönderim servisi seçilecek.
- [ ] Calendly hesabı ve etkinlik tipi kurulup `KONTAK.calendly`
      doldurulacak. Alan boş kaldığı sürece sayfa `[CALENDLY LİNKİ]`
      yer tutucusu basıyor.
- [ ] KVKK: form metni "yalnızca bu görüşme için" diyor; otomasyon
      pazarlama e-postası göndermeye başlarsa bu cümle DEĞİŞMELİ.

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
