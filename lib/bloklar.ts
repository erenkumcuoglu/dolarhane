/**
 * Yazı gövdesi — blok tipleri.
 *
 * Neden markdown değil: ek bağımlılık istemiyoruz (proje `next`, `react`,
 * `react-dom` dışında hiçbir şey taşımıyor), ve daha önemlisi GEO tarafı
 * yapı istiyor. Blok tipleri sayesinde tablo gerçekten `<table>` oluyor
 * (LLM'ler tabloyu böyle okuyor — SEO-GEO-PLAN §8.2), SSS blokları
 * otomatik `FAQPage` şemasına dönüşüyor, ve her yazının ilk paragrafı
 * alıntılanabilir bir cevap olmaya zorlanıyor.
 *
 * Satır içi biçim: **kalın** ve [metin](adres). Fazlası bilinçli olarak yok.
 */

export type Blok =
  | { t: "p"; metin: string }
  | { t: "h"; metin: string; seviye?: 2 | 3 }
  | { t: "liste"; maddeler: string[]; sirali?: boolean }
  | {
      t: "tablo";
      basliklar: string[];
      satirlar: string[][];
      /** Tablonun altına düşen kaynak/varsayım notu. */
      not?: string;
      /** Vurgulanacak satır indeksleri (0 tabanlı, `satirlar` içinde). */
      vurgu?: number[];
    }
  /** Uyarı, varsayım ya da ALEYHİMİZE not. Markanın imzası — gizlenmiyor. */
  | { t: "not"; metin: string; baslik?: string }
  /** `FAQPage` şemasını da besler. */
  | { t: "sss"; sorular: { s: string; c: string }[] }
  | { t: "kaynak"; maddeler: { metin: string; url?: string }[] };

/** Yazının SSS bloklarını toplar — şema üretimi için. */
export const sssTopla = (bloklar: Blok[]): { s: string; c: string }[] =>
  bloklar.flatMap((b) => (b.t === "sss" ? b.sorular : []));

/**
 * İlk paragrafın metni. Meta description'ı doldurmak ve "ilk iki cümle
 * sorunun net cevabı olsun" kuralını denetlemek için.
 */
export const ilkParagraf = (bloklar: Blok[]): string =>
  bloklar.find((b): b is Extract<Blok, { t: "p" }> => b.t === "p")?.metin ?? "";
