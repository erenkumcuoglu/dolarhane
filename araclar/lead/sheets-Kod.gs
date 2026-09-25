/**
 * Dolarhane — lead yedek tablosu (Google Apps Script).
 *
 * Kurulum (bir kez, ~5 dakika):
 *   1. Google Drive'da yeni bir Google E-Tablo aç: "Dolarhane Leadler".
 *   2. Uzantılar → Apps Script. Açılan editördeki her şeyi sil, bu dosyayı yapıştır.
 *   3. Aşağıdaki GIZLI değerini uzun, rastgele bir metinle değiştir.
 *      Aynı metni Netlify'da SHEETS_SECRET olarak gireceksin.
 *   4. Dağıt → Yeni dağıtım → Tür: Web uygulaması.
 *        Şu kullanıcı olarak çalıştır: Ben
 *        Erişimi olanlar: Herkes
 *      "Dağıt"a bas, izinleri onayla, çıkan web uygulaması URL'sini kopyala.
 *      Bu URL Netlify'da SHEETS_WEBHOOK_URL olur.
 *
 * "Herkes" erişimi yalnız bu adrese POST atabilmek içindir; tabloyu kimse
 * göremez. GIZLI uyuşmayan istek hiçbir şey yazmaz.
 *
 * Tablo: "Leadler" sekmesi kendiliğinden oluşur. "Aşama" sütunu açılır
 * listedir; lead ilerledikçe buradan güncellenebilir. Filtre görünümleriyle
 * bütçe, kanal, kaynak ve pazarlama iznine göre kategorik liste çıkar.
 */
const GIZLI = "BURAYA-UZUN-RASTGELE-BIR-METIN";

const SUTUNLAR = [
  ["zaman", "Zaman"],
  ["ad", "Ad"],
  ["soyad", "Soyad"],
  ["eposta", "E-posta"],
  ["tel", "Telefon"],
  ["band", "Yatırım tutarı"],
  ["kanal", "Tercih edilen kanal"],
  ["ev", "İlgilendiği ev"],
  ["kaynak", "Kaynak"],
  ["asama", "Aşama"],
  ["pazarlama_izni", "Pazarlama izni"],
  ["kvkk_onayi", "KVKK onay metni"],
  ["utm_source", "utm_source"],
  ["utm_medium", "utm_medium"],
  ["utm_campaign", "utm_campaign"],
  ["utm_term", "utm_term"],
  ["utm_content", "utm_content"],
  ["gclid", "gclid"],
  ["fbclid", "fbclid"],
  ["giris_sayfasi", "Giriş sayfası"],
  ["form_sayfasi", "Form sayfası"],
  ["referrer", "Referrer"],
];

const ASAMALAR = [
  "Yeni lead",
  "İlk temas yapıldı",
  "Randevu alındı",
  "Görüşme yapıldı",
  "Teklif gönderildi",
  "Sözleşme aşamasında",
  "Kazanıldı",
  "Kaybedildi",
];

function sayfa_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName("Leadler");
  if (!s) {
    s = ss.insertSheet("Leadler", 0);
    s.getRange(1, 1, 1, SUTUNLAR.length)
      .setValues([SUTUNLAR.map((x) => x[1])])
      .setFontWeight("bold")
      .setBackground("#071a2b")
      .setFontColor("#f4efe6");
    s.setFrozenRows(1);
    const asamaSutun = SUTUNLAR.findIndex((x) => x[0] === "asama") + 1;
    s.getRange(2, asamaSutun, 5000, 1).setDataValidation(
      SpreadsheetApp.newDataValidation().requireValueInList(ASAMALAR, true).build()
    );
  }
  return s;
}

function doPost(e) {
  const kilit = LockService.getScriptLock();
  kilit.waitLock(10000);
  try {
    const govde = JSON.parse(e.postData.contents || "{}");
    if (govde.gizli !== GIZLI) return cevap_({ ok: false, hata: "yetki" });
    const k = govde.kayit || {};
    const satir = SUTUNLAR.map(([anahtar]) => {
      const v = k[anahtar] == null ? "" : String(k[anahtar]);
      /* Formül enjeksiyonuna karşı: =, +, -, @ ile başlayan değer metin olarak yazılır. */
      return /^[=+\-@]/.test(v) ? "'" + v : v;
    });
    sayfa_().appendRow(satir);
    return cevap_({ ok: true });
  } catch (hata) {
    return cevap_({ ok: false, hata: String(hata) });
  } finally {
    kilit.releaseLock();
  }
}

function cevap_(veri) {
  return ContentService.createTextOutput(JSON.stringify(veri)).setMimeType(
    ContentService.MimeType.JSON
  );
}
