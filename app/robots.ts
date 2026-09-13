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
 * Yayına hazır olmayan varyantlar dışarıda: /v2 ana sayfanın duplicate'i.
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
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/v2/"] },
      ...AI_CRAWLERLARI.map((ua) => ({ userAgent: ua, allow: "/" })),
    ],
    // Adres yokken Sitemap satırı yazılmaz: göreli sitemap geçersiz.
    ...(ADRES_VAR ? { sitemap: mutlak("/sitemap.xml") } : {}),
  };
}
