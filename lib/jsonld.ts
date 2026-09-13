/**
 * JSON-LD üreticileri — SEO-GEO-PLAN.md §8.2.
 *
 * GEO tarafında en çok kaybettiğimiz yer burasıydı: LLM'ler yapılandırılmış
 * veriyi ve tabloyu kolay çıkarıyor. Şema, sayfanın ne olduğunu tahmin
 * ettirmek yerine söylüyor.
 *
 * Kural: ALAN UYDURULMAZ. Kimlik bilgisi (lisans no, adres, telefon) boşken
 * o alan şemaya hiç yazılmaz — yanlış şema, eksik şemadan kötüdür.
 */
import { KONTAK, KIMLIK, PROFILLER } from "./kontak";
import { ADRES_VAR, mutlak } from "./site";
import type { Yazi, Kirinti } from "./icerik";

const dolu = (e: string) => KIMLIK.find((k) => k.etiket === e)?.deger || "";

/** Kurumsal varlık. Entity tutarlılığının teknik ayağı — SEO-GEO-PLAN §8.4.
 *  Tanım cümlesi her yerde BİREBİR aynı olmalı, bu yüzden burada sabit. */
export const organizasyon = () => {
  const sameAs = PROFILLER.map((p) => p.url).filter(Boolean);
  const lisans = dolu("ABD emlak lisansı");
  const tuzel = dolu("Tüzel kişilik");

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dolarhane",
    description:
      "Türkiye'den alıcılara Amerika Birleşik Devletleri'nde kira getiren " +
      "müstakil ev satan girişim.",
    ...(ADRES_VAR ? { url: mutlak("/"), logo: mutlak("/logo/logo.png") } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(tuzel ? { legalName: tuzel } : {}),
    ...(lisans ? { identifier: lisans } : {}),
    ...(KONTAK.eposta ? { email: KONTAK.eposta } : {}),
    ...(KONTAK.tel ? { telephone: KONTAK.tel } : {}),
  };
};

export const kirintiSemasi = (iz: Kirinti[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: iz.map((k, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: k.ad,
    ...(ADRES_VAR ? { item: mutlak(k.yol) } : {}),
  })),
});

export const makaleSemasi = (y: Yazi) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: y.baslik,
  description: y.ozet,
  inLanguage: "tr-TR",
  ...(ADRES_VAR
    ? { mainEntityOfPage: mutlak(`/${y.kume}/${y.slug}/`) }
    : {}),
  // Tarih yalnız gerçekten varsa. Evergreen sayfalarda tarih yok — ne
  // görünürde ne şemada. Sahte dateModified, sitemap'teki sahte lastmod
  // kadar zararlı.
  ...(y.guncelleme && y.tazelik !== "evergreen"
    ? { dateModified: y.guncelleme }
    : {}),
  // Yazar boşken `author` YAZILMAZ. YMYL içerikte uydurma yazar,
  // yazarsızlıktan kötü.
  ...(y.yazar ? { author: { "@type": "Person", name: y.yazar } } : {}),
  ...(y.gozdenGeciren
    ? { reviewedBy: { "@type": "Person", name: y.gozdenGeciren } }
    : {}),
  publisher: organizasyon(),
});

export const sssSemasi = (sorular: { s: string; c: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: sorular.map((q) => ({
    "@type": "Question",
    name: q.s,
    acceptedAnswer: { "@type": "Answer", text: q.c },
  })),
});
