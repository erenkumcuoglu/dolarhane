import type { MetadataRoute } from "next";
import { ADRES_VAR, mutlak } from "@/lib/site";

/* `output: export` ile route handler'ların statik olduğu açıkça beyan edilmeli. */
export const dynamic = "force-static";

/**
 * robots.txt
 *
 * Cephe C'nin (GEO) ön koşulu: yapay zekâ crawler'ları AÇIK olmalı.
 * Tek satırlık bir yanlış, LLM görünürlüğünün tamamını öldürüyor —
 * SEO-GEO-PLAN.md §8.1. Wildcard zaten izin veriyor ama niyeti açıkça
 * yazıyoruz: sonradan biri "AI'ları kapatalım mı" diye düşündüğünde
 * kararın bilinçli olduğunu görsün.
 *
 * ADRES KORUMASI — `KONTAK.siteUrl` boşken tüm site kapalı. Gerekçe:
 * domain alınmadan yapılan yayın `*.netlify.app` adresine iniyor. O adres
 * indekslenirse, gerçek domain açıldığında elimizde kendi kendimizle
 * yarışan bir kopya oluyor ve marka SERP'i (SEO-GEO-PLAN §9) daha
 * doğmadan bölünüyor. `siteUrl` dolduğu an koruma kendiliğinden kalkar —
 * başka değişiklik gerekmiyor.
 */
const AI_CRAWLERLARI = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "PerplexityBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  if (!ADRES_VAR) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERLARI.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    sitemap: mutlak("/sitemap.xml"),
  };
}
