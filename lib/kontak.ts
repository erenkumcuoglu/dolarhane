/**
 * İletişim yapılandırması.
 *
 * Boş bırakıldığı sürece sayfa uydurma bir başarı ekranı GÖSTERMEZ:
 * form dürüstçe "bir hedefe bağlanmadı" der, kanal düğmeleri de
 * doldurulması gereken alan olarak görünür. Bir telefon numarası ya da
 * lisans numarası icat edilmez.
 */
export const KONTAK = {
  /** WhatsApp, yalnız rakam. Örn: "905321234567" */
  wa: "",
  /** Aranabilir telefon. Örn: "+905321234567" */
  tel: "",
  /** Görünen telefon. Örn: "0532 123 45 67" */
  telGorunen: "",
  /** Form POST hedefi (Formspree, kendi API, vb.) */
  formEndpoint: "",
  /** Calendly randevu linki */
  calendly: "",
  /** E-posta */
  eposta: "",
  /**
   * Sitenin yayındaki tam adresi, sonunda eğik çizgi olmadan.
   * Örn: "https://dolarhane.com"
   *
   * Boş olduğu sürece paylaşım kartı (og:image) ve canonical etiketi
   * YAZILMAZ: mutlak adres gerektiriyorlar ve uydurma bir adres basmak
   * WhatsApp'ta kırık önizleme demek. Netlify adresi belli olunca burayı
   * doldurmak yeterli — başka değişiklik gerekmiyor.
   */
  siteUrl: "",
} as const;

/** Footer kimlik şeridi — yayına almadan önce doldurulması zorunlu. */
export const KIMLIK: { etiket: string; deger: string }[] = [
  { etiket: "Tüzel kişilik", deger: "" },
  { etiket: "ABD ofis", deger: "" },
  { etiket: "Türkiye iletişim", deger: "" },
  { etiket: "Telefon", deger: "" },
  { etiket: "ABD emlak lisansı", deger: "" },
  { etiket: "E-posta", deger: "" },
];

/**
 * Sosyal ve kurumsal profiller — `Organization.sameAs` dizisini besler.
 *
 * Varlık (entity) tutarlılığının teknik ayağı: LLM'ler ve Google, markayı
 * ancak profiller birbirine bağlıysa tek bir varlık olarak kurabiliyor.
 * SEO-GEO-PLAN.md §8.4.
 *
 * Boş olanlar şemaya YAZILMAZ — var olmayan profile link vermek,
 * varlık grafiğini kurmak yerine bozar.
 */
export const PROFILLER: { ad: string; url: string }[] = [
  { ad: "LinkedIn", url: "" },
  { ad: "YouTube", url: "" },
  { ad: "Instagram", url: "" },
  { ad: "X", url: "" },
  { ad: "Crunchbase", url: "" },
];

export const YAYIN_HAZIR =
  KONTAK.formEndpoint !== "" &&
  KONTAK.wa !== "" &&
  KIMLIK.every((k) => k.deger !== "");
