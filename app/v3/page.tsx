import { Nav3 } from "@/components/v3/Nav3";
import { Hero3 } from "@/components/v3/Hero3";
import { Hesap3 } from "@/components/v3/Hesap3";
import { Evler3 } from "@/components/v3/Evler3";
import { Neden3 } from "@/components/v3/Neden3";
import { Huni3 } from "@/components/v3/Huni3";
import { Hikaye3 } from "@/components/v3/Hikaye3";
import { Kapanis3 } from "@/components/v3/Kapanis3";
import { Dip3 } from "@/components/v3/Dip3";
import type { Metadata } from "next";
import "../v3.css";

/**
 * ÜÇÜNCÜ İTERASYON — deneme rotası.
 *
 * Dolarhane_V3_Design_Revision_Brief.md'nin uygulaması. İkinci
 * iterasyon (`/`) DOKUNULMADI; iki dünya yan yana duruyor, seçim
 * Eren'de — v1/v2 geçişinde izlenen yol.
 *
 * Brief'ten SAPILAN üç yer ve gerekçeleri (hepsi iddia disiplini):
 *  1. Hesap kredili değil PEŞİN. Brief peşinat/vade/faiz ve "aylık
 *     fark" istiyor; kredi kamuya açık ürün değil (iş planı §11).
 *     Sonuç hiyerarşisi korundu, kalemler peşin modelin kalemleri.
 *  2. Üç ev kartı gerçek değil, [ÖRNEK VERİ] damgalı. Portföyde henüz
 *     ev yok; damga kalktığı an iddia uydurma olur.
 *  3. Manşet brief'in sabit cümlesi değil, slayt 7'nin dönen slogan
 *     seti — zaten onaylı ve daha somut.
 *
 * Brief'e UYULARAK çıkarılanlar: referans şeridi ("bazı evlerimizin
 * getirileri" — satılmış ev iddiası, gerçek satış yok), tam genişlik
 * Türkiye karşılaştırma bölümü (hesabın içine iç panel oldu), şeffaflık
 * tablosu (satırların hepsi "örnek · gerçek veri değil"), hikâyedeki üç
 * ikonlu güvence kümesi, karşılamadaki üç ikonlu özellik satırı,
 * dördüncü ev kartı, dördüncü "neden" maddesi.
 *
 * Bölüm sırası: vaat → hesap → evler → neden → huni → biz kimiz →
 * kapanış.
 *
 * "Ters gidebilecek şeyler" bölümü ŞİMDİLİK sayfada değil (Eren'in
 * kararı, 2026-09-23): alt sayfalarda duracak. Bileşen
 * components/v3/Riskler3.tsx'te bekliyor, tek satırla geri gelir.
 * RISKLER/SORULAR verisi components/detay/riskler.tsx'te ve /hesap ile
 * içerik kümeleri onu kullanmaya devam ediyor.
 */
export const metadata: Metadata = {
  title: "Dolarhane — V3 deneme",
  /* Deneme rotası indekslenmiyor: aynı içeriğin ikinci kopyası. */
  robots: { index: false, follow: false },
};

export default function V3() {
  return (
    <div className="v3">
      <Nav3 />
      <Hero3 />
      <main id="icerik">
        <Hesap3 />
        <Evler3 />
        <Neden3 />
        <Huni3 />
        <Hikaye3 />
        <Kapanis3 />
      </main>
      <Dip3 />
    </div>
  );
}
