import type { Metadata } from "next";
import { gambettaV4 } from "./fonts";
import { Jsonld } from "@/components/Jsonld";
import { organizasyon } from "@/lib/jsonld";
import { ADRES_VAR } from "@/lib/site";
import { Hareket4 } from "@/components/v4/Hareket4";
import { Nav4 } from "@/components/v4/Nav4";
import { Hero4 } from "@/components/v4/Hero4";
import { Tez4 } from "@/components/v4/Tez4";
import { Olcu4 } from "@/components/v4/Olcu4";
import { Evler4 } from "@/components/v4/Evler4";
import { Guven4 } from "@/components/v4/Guven4";
import { Surec4 } from "@/components/v4/Surec4";
import { Hikaye4 } from "@/components/v4/Hikaye4";
import { Kapanis4 } from "@/components/v4/Kapanis4";
import { Dip4 } from "@/components/v4/Dip4";
import "./v4.css";

/* Kök layout canonical basmıyor; her sayfa kendi yolunu beyan ediyor.
   Başlık ve açıklama layout'tan miras — ana sayfa için doğru olan o. */
export const metadata: Metadata = {
  ...(ADRES_VAR ? { alternates: { canonical: "/" } } : {}),
};

/**
 * ANA SAYFA — dördüncü iterasyon ("Açık Defter"), 2026-09.
 *
 * V3'ün içeriği ve iddia disiplini aynen; değişen görsel dil: ince, çok
 * büyük Gambetta manşetler + Satoshi gövde, sinematik fotoğraf ve mimari
 * çizim, her bölüm kendi kompozisyonunda. Önceki ana sayfa /v2'de arşiv.
 *
 * İddia disiplini: her rakam lib/finance.ts'ten, portföy fotoğrafları
 * "temsilî" rozetli, boş iletişim alanı uydurulmuyor, şehir adı geçmiyor
 * (DESIGN.md kural 11).
 *
 * Bölüm sırası: vaat → tez → hesap → Türkiye → evler → güven → süreç →
 * biz → görüşme. Ev detayları /evler/[slug].
 */
export default function AnaSayfa() {
  return (
    <div className={`v4 ${gambettaV4.variable}`}>
      {/* Varlık çapası (SEO-GEO-PLAN §8.4). Boş kimlik alanları şemaya
          yazılmıyor. */}
      <Jsonld veri={organizasyon()} />
      <Hareket4 />
      <Nav4 />
      <Hero4 />
      <main id="icerik">
        <Tez4 />
        <Olcu4 />
        <Evler4 />
        <Guven4 />
        <Surec4 />
        <Hikaye4 />
        <Kapanis4 />
      </main>
      <Dip4 />
    </div>
  );
}
