/**
 * Yazı gövdeleri — anahtar `"<kume>/<slug>"`.
 *
 * Kayıt defteri (`lib/icerik.ts`) yazının KÜNYESİNİ tutar; gövdesi burada.
 * Ayrım bilinçli: sitemap, breadcrumb ve küme listeleri gövdeyi yüklemeden
 * künyeden üretilebiliyor.
 *
 * Yeni yazı: `icerik/<kume>/<slug>.ts` dosyasını yaz, buraya bağla,
 * `lib/icerik.ts` YAZILAR dizisine künyeyi ekle.
 */
import type { Blok } from "@/lib/bloklar";
import { kiraCarpani } from "./getiri/kira-carpani";

export const GOVDELER: Record<string, Blok[]> = {
  "getiri/kira-carpani": kiraCarpani,
};
