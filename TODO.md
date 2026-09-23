# Açık işler

Karara bağlanmış ama henüz yapılmamış işler. Yapıldıkça buradan silinir;
gerekçesi olan kararlar ilgili belgeye (DESIGN.md, PRODUCT.md,
SEO-GEO-PLAN.md) taşınır.

---

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

- [ ] Küme sayfaları (`/getiri`, `/surec`, `/guven`, `/karsilastir`) hâlâ
      ikinci iterasyonun dar okuma kolonunda düz liste basıyor. `/blog`
      kart ızgarasına geçtiler, küme sayfaları geçmedi.
- [ ] Yazı sayfaları da ikinci iterasyonun kabuğunda (`NavYazi`/`DipYazi`).
- [ ] Vergi kümesi tamamen taslak; uzman onayı gelince `/blog` listesine
      kendiliğinden giriyor (`doluKumeler()`).
- [ ] Başlıklar: bir kısmı jargonla başlıyor (`FIRPTA:`, `W-8BEN`,
      `1040-NR`). Arama niyeti tam olarak o kelimeler olduğu için
      değiştirmek SEO'yu bozar; karar bekliyor.

## 4. Logo

- [ ] Marka kiti sahibinden **şeffaf zeminli SVG** istenecek
      (`public/logo/KAYNAK.txt` "EKSİK" listesi). Bugün başlıktaki amblem
      `components/v3/Amblem3.tsx` ile yeniden çizildi — kitin dosyası
      değil, siluetin düz vektör yorumu.
