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

export const YAYIN_HAZIR =
  KONTAK.formEndpoint !== "" &&
  KONTAK.wa !== "" &&
  KIMLIK.every((k) => k.deger !== "");
