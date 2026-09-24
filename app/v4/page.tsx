import type { Metadata } from "next";
import { gambettaV4 } from "../fonts";
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
import "../v4.css";

/**
 * DÖRDÜNCÜ İTERASYON — deneme rotası (/v4).
 *
 * V3'ün içeriği ve iddia disiplini aynen; değişen görsel dil. Teşhis:
 * V3 doğru şeyleri söylüyordu ama bir şablon gibi görünüyordu — her yerde
 * aynı ağırlıkta (900) başlık, ikon karoları, pill düğmeler, eşit kart
 * ızgaraları. V4'ün cevabı "Açık Defter":
 *   - Ses: ince, çok büyük Gambetta manşetler + Satoshi gövde. Bağırmıyor.
 *   - İki malzeme: sinematik fotoğraf (atmosfer) ve mimari çizim (iddia).
 *     Hesabın yanındaki görsel fotoğraf değil, paranın aktığı bir cephe
 *     çizimi — stok fotoğraf iddia taşıyan yere konmaz (kural 16).
 *   - Her bölüm kendi kompozisyonunu taşıyor; hiçbiri "başlık → lede →
 *     kart ızgarası" değil.
 *   - Bölüm künyeleri (01 — Tez …) ve kılcal çizgiler: basılı bir
 *     prospektüsün ızgarası.
 *
 * Bölüm sırası: vaat → tez → hesap → Türkiye → evler → güven → süreç →
 * biz → görüşme.
 */
export const metadata: Metadata = {
  title: "Dolarhane — V4 deneme",
  robots: { index: false, follow: false },
};

export default function V4() {
  return (
    <div className={`v4 ${gambettaV4.variable}`}>
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
