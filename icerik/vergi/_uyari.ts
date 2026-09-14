import type { Blok } from "@/lib/bloklar";

/**
 * Vergi kümesinin paylaşılan uyarı bloğu.
 *
 * Her sayfada aynısı basılıyor. SEO-GEO-PLAN §7: YMYL içerikte uzman
 * imzası olmadan yayın yapılmıyor — küme tamamı `taslak` ve bu blok
 * imza gelene kadar da, geldikten sonra da kalıyor.
 */
export const CPA_UYARISI: Blok = {
  t: "not",
  baslik: "Bu sayfa vergi danışmanlığı değil",
  metin:
    "Vergi kuralları kişinin durumuna göre değişiyor ve zaman içinde " +
    "değişiyor. Bu sayfa kavramları ve soruları tanıtıyor; **karar için " +
    "ABD beyanınızı hazırlayacak lisanslı bir muhasebeciye ve gerektiğinde " +
    "avukata danışmanız gerekiyor.** Rakamlar ve eşikler yayın öncesinde " +
    "uzman tarafından doğrulanacaktır.",
};
