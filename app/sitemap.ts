import type { MetadataRoute } from "next";
import { ADRES_VAR, mutlak } from "@/lib/site";
import { ORTAKLIK_BAGLANTISI } from "@/lib/ortaklik";

/* `output: export` ile route handler'ların statik olduğu açıkça beyan edilmeli. */
export const dynamic = "force-static";
import {
  yayindakiler,
  doluKumeler,
  yaziYolu,
  kumeYolu,
  tarihGosterilir,
} from "@/lib/icerik";

/** Kökte duran, kayıt defterinde olmayan sayfalar (para sayfaları ve araçlar).
 *  Yeni bir kök sayfa açıldığında buraya eklenir.
 *
 *  `/ortaklik/` hukuki onaya bağlı: sayfa bugün üretiliyor ama `noindex`
 *  ve site içinden bağlantısı yok — sitemap'e koymak o izolasyonu delerdi.
 *  Bayrak `true` olduğu an nav, alt şerit ve bu liste birlikte açılır
 *  (lib/ortaklik.ts). */
const KOK_SAYFALAR = [
  "/",
  "/hesap/",
  ...ORTAKLIK_BAGLANTISI.map((o) => o.yol),
];

/**
 * Sitemap — kayıt defterinden üretilir, elle tutulmaz.
 *
 * `siteUrl` boşken BOŞ döner: göreli adresli sitemap geçersizdir, uydurma
 * host'lu sitemap ise zararlıdır. Domain alınıp `KONTAK.siteUrl` dolunca
 * hiçbir değişiklik gerekmeden çalışır.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!ADRES_VAR) return [];

  const girdiler: MetadataRoute.Sitemap = KOK_SAYFALAR.map((y) => ({
    url: mutlak(y),
    changeFrequency: "monthly",
    priority: y === "/" ? 1 : 0.8,
  }));

  for (const k of doluKumeler()) {
    girdiler.push({
      url: mutlak(kumeYolu(k.slug)),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  for (const y of yayindakiler()) {
    girdiler.push({
      url: mutlak(yaziYolu(y)),
      // lastModified YALNIZ gerçek bir güncelleme tarihi varsa yazılır.
      // Uydurma lastmod, Google'ın sitemap'in tamamını dikkate almayı
      // bırakmasına yol açıyor — tek sayfa için bütün siteyi riske atmıyoruz.
      ...(tarihGosterilir(y) ? { lastModified: new Date(y.guncelleme!) } : {}),
      changeFrequency:
        y.tazelik === "canli"
          ? "monthly"
          : y.tazelik === "bulten"
            ? "never"
            : "yearly",
      priority: 0.6,
    });
  }

  return girdiler;
}
