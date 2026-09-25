# Lead kapısı — kurulum

Form → `/api/lead` (`netlify/functions/lead.mjs`) → **HubSpot** (CRM) + **Google Sheets** (yedek).

Kapı hazır ve sitede. Hedefler bağlanana kadar form ziyaretçiye
"henüz bir hedefe bağlanmadı, bilgileriniz hiçbir yere gönderilmedi" der.
İki hedeften biri bağlandığı an kayıt almaya başlar; ikisi birden önerilir.

## 1. Google Sheets (yedek, ~5 dk)

1. Drive'da yeni bir E-Tablo: **Dolarhane Leadler**.
2. Uzantılar → Apps Script → `araclar/lead/sheets-Kod.gs` içeriğini yapıştır.
3. `GIZLI` değerini uzun, rastgele bir metinle değiştir.
4. Dağıt → Yeni dağıtım → Web uygulaması · "Ben" olarak çalıştır · Erişim: Herkes.
5. Çıkan URL ve GIZLI metin Netlify'a girilir (aşağıda).

## 2. HubSpot (CRM, ~10 dk)

1. hubspot.com'da ücretsiz hesap aç.
2. Ayarlar → Entegrasyonlar → **Private Apps** → yeni uygulama: "Dolarhane site".
   Kapsamlar: `crm.objects.contacts.read`, `crm.objects.contacts.write`,
   `crm.objects.deals.read`, `crm.objects.deals.write`, `crm.schemas.contacts.write`.
3. Erişim anahtarını (pat-…) al.
4. Kurulum betiği alanları ve satış hattını kurar, iki kimlik numarası yazar:
   ```
   HUBSPOT_TOKEN=pat-... node araclar/lead/hubspot-kurulum.mjs
   ```

Satış hattı: **Yeni lead → İlk temas yapıldı → Randevu alındı → Görüşme yapıldı →
Teklif gönderildi → Sözleşme aşamasında → Kazanıldı / Kaybedildi**

## 3. Netlify ortam değişkenleri

Site configuration → Environment variables:

| Değişken | Nereden |
|---|---|
| `HUBSPOT_TOKEN` | HubSpot Private App |
| `HUBSPOT_PIPELINE_ID` | kurulum betiği çıktısı |
| `HUBSPOT_STAGE_ID` | kurulum betiği çıktısı ("Yeni lead") |
| `SHEETS_WEBHOOK_URL` | Apps Script dağıtım URL'si |
| `SHEETS_SECRET` | Apps Script'teki `GIZLI` |

Değişkenler girilince bir kez yeniden deploy et.

## Kayda ne düşer

Ad, soyad, e-posta, telefon, yatırım tutarı, tercih edilen kanal, ilgilendiği ev
(detay sayfasından), kaynak (utm_*, gclid, fbclid, referrer), giriş ve form
sayfası, zaman, onay kaydı (KVKK metin sürümü + varsa pazarlama izni sürümü).

## Onaylar (hukuk onayı bekliyor)

- **Zorunlu:** görüşme talebi için işleme + yurt dışındaki hizmet sağlayıcıda saklama.
  Aydınlatma metni linki `[AYDINLATMA METNİ]` yer tutucusunda.
- **İsteğe bağlı:** ticari ileti (e-posta, SMS, WhatsApp). Remarketing ve toplu
  gönderim **yalnız bu kutuyu işaretleyenlere** yapılır. Gönderim başlamadan önce
  işletmenin İYS kaydı gerekir.
- Metin değişirse `netlify/functions/lead.mjs` içindeki `KVKK_SURUM` /
  `PAZARLAMA_SURUM` de değişir; her kayıt gördüğü metnin sürümünü taşır.
