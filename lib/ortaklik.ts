/**
 * İş ortaklığı — model ve rakamlar.
 *
 * HEPSİ BOŞ. Komisyon oranı, ödeme zamanı ve alt sınır iş planı slayt
 * 24'te "karara bağlanacaklar" listesinde (madde 4: hizmet bedeli sabit
 * tutar mı yüzde mi). Boş kaldıkları sürece sayfa kırmızı [alan] basıyor
 * — uydurma rakam yazılmıyor (DESIGN.md kural 6).
 *
 * HUKUKİ ÇERÇEVE — sayfanın dayandığı yapı:
 * ABD'de emlak işlemlerinde lisanssız kişiye BROKERLIK KOMİSYONU ödemek
 * eyaletlerin çoğunda yasak; federal kredili işlemlerde RESPA yönlendirme
 * ücretlerini ayrıca sınırlıyor. Bu sayfa o yüzden komisyon paylaşımı
 * VAAT ETMİYOR: ortağa ödenen tutar Dolarhane'nin kendi HİZMET BEDELİNDEN
 * (iş planı Model C — "emlak komisyonu değil, karşılığı sayılabilir bir
 * hizmet") karşılanan bir tanıştırma/pazarlama bedelidir.
 *
 * Bu ayrım sayfanın hukuki savunmasının tamamı. Avukat onayı alınmadan
 * sayfa yayına açılmamalı; bugün `noindex` ve nav'da bağlantısı yok.
 */
export const ORTAKLIK = {
  /** Portföy hattı — lisanslı emlakçı. Örn: "işlem başına 1.500 $" */
  portfoyBedeli: "",
  /** Tanıştırma hattı. Örn: "kapanan işlem başına 500 $" */
  tanistirmaBedeli: "",
  /** Örn: "kapanıştan 15 gün sonra" */
  odemeZamani: "",
  /** Örn: "havale · USD · BAE şirketinden" */
  odemeSekli: "",
  /** Varsa alt sınır ya da koşul. Boşsa satır basılmaz. */
  altSinir: "",
} as const;

/** Avukat onayı alınana kadar sayfa indekslenmez ve nav'a konmaz. */
export const HUKUKI_ONAY = false;

export const ORTAKLIK_YOLU = "/ortaklik/";

/**
 * Sayfaya çıkan TEK bağlantı kaynağı — nav'lar ve alt şeritler bunu yayar.
 *
 * `HUKUKI_ONAY` false iken boş dizi döner: dört kabuğun dördü de hiçbir
 * bağlantı basmaz, sitemap sayfayı almaz, sayfa `noindex, nofollow` kalır.
 * Onay geldiğinde yukarıdaki bayrağı `true` yapmak yeterli — dördü birden
 * açılır, başka hiçbir dosyaya dokunulmaz.
 *
 * Dizi olmasının sebebi bu: bileşenler `...ORTAKLIK_BAGLANTISI` diye
 * yayıyor, yani "bağlantı var mı" koşulu bileşenlerde tekrar etmiyor.
 */
export const ORTAKLIK_BAGLANTISI: { yol: string; ad: string }[] = HUKUKI_ONAY
  ? [{ yol: ORTAKLIK_YOLU, ad: "İş ortaklığı" }]
  : [];

export type Hat = "portfoy" | "tanistirma";

export const HATLAR: {
  anahtar: Hat;
  ad: string;
  kim: string;
  getirdigi: string;
  adimlar: { b: string; a: string; siz: string }[];
}[] = [
  {
    anahtar: "portfoy",
    ad: "Portföyüm var",
    kim: "Lisanslı emlakçı, danışman ya da portföy sahibi",
    getirdigi: "Mülk ya da satıcı ilişkisi",
    adimlar: [
      {
        b: "Mülkü paylaşın",
        a: "Adres, fiyat ve mevcut kira bilgisi yeterli. Fotoğraf varsa iyi olur.",
        siz: "Alıcı aramıyorsunuz.",
      },
      {
        b: "Biz değerlendiriyoruz",
        a: "Hedef bandımıza ve kira/fiyat ölçütümüze uyuyor mu, iki iş günü içinde dönüyoruz.",
        siz: "Analiz sizde değil.",
      },
      {
        b: "Alıcıya sunuyoruz",
        a: "Görüşmeyi, hesabı ve süreci biz yürütüyoruz; ilişkiyi gizlemiyoruz.",
        siz: "Satış görüşmesi yapmıyorsunuz.",
      },
      {
        b: "Kapanış ve ödeme",
        a: "İşlem kapandıktan sonra bedel ödeniyor.",
        siz: "Tahsilat takibi sizde değil.",
      },
    ],
  },
  {
    anahtar: "tanistirma",
    ad: "Tanıdığım var",
    kim: "Yatırım yapmayı düşünen birini tanıyan herkes",
    getirdigi: "Alıcı adayı",
    adimlar: [
      {
        b: "Tanıştırın",
        a: "Adı ve telefonu bize iletin — kendisinin haberi olsun yeter.",
        siz: "Ürünü anlatmanız gerekmiyor.",
      },
      {
        b: "Görüşmeyi biz yapıyoruz",
        a: "Aynı gün dönüyoruz; hedefini, bütçesini ve beklentisini biz anlıyoruz.",
        siz: "Soru cevaplamıyorsunuz.",
      },
      {
        b: "Süreci biz yürütüyoruz",
        a: "Ev seçimi, ekspertiz, escrow ve tapu — hepsi bizde.",
        siz: "Hiçbir aşamada sorumluluk almıyorsunuz.",
      },
      {
        b: "Kapanış ve ödeme",
        a: "İşlem kapandıktan sonra tanıştırma bedeli ödeniyor.",
        siz: "Takip sizde değil.",
      },
    ],
  },
];
