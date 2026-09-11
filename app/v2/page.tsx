import { Nav2 } from "@/components/v2/Nav2";
import { Hero2 } from "@/components/v2/Hero2";
import { Hesap2 } from "@/components/v2/Hesap2";
import { Karsilastirma2 } from "@/components/v2/Karsilastirma2";
import { Neden2 } from "@/components/v2/Neden2";
import { Firsatlar2 } from "@/components/v2/Firsatlar2";
import { Referans2 } from "@/components/v2/Referans2";
import { Hikaye2 } from "@/components/v2/Hikaye2";
import { Nasil2 } from "@/components/v2/Nasil2";
import { Riskler2 } from "@/components/v2/Riskler2";
import { Form2 } from "@/components/v2/Form2";
import { Dip2 } from "@/components/v2/Dip2";
import "./v2.css";

/**
 * İKİNCİ İTERASYON — /v2
 *
 * Birinci iterasyon (`/` ve `/hesap`) dokunulmadan duruyor. Bu sayfa aynı
 * içeriği paylaşılan referans tasarımın kompozisyonuna yediriyor: lacivert
 * hero + kenara kanayan fotoğraf, iki kaydırıcılı hesap paneli, numaralı
 * gerekçe kartları, dört kartlı portföy ızgarası, yatay form bandı.
 *
 * Aynı iddia disiplini geçerli: her rakam lib/finance.ts'ten, portföy ve
 * şeffaflık verisi damgalı, boş iletişim alanı uydurulmuyor, şehir adı
 * geçmiyor. Referans tasarımdan alınmayan üç şey ve nedenleri:
 *  1. Şehir/eyalet etiketleri — coğrafya sayfada yazılmaz (kural 11).
 *  2. "Aylık nakit akış +$928" — kredili senaryonun gerçek nakit fazlası
 *     ince; tablo gideri de yazıyor ve anapara birikimini vurguluyor (13).
 *  3. "SINIRSIZ YATIRIM, GERÇEK FIRSATLAR" sloganı — "sınırsız" marka
 *     kitinin kendi §06 yasağına ("garantili / risksiz / kesin kazanç")
 *     komşu; karar Eren'de, o yüzden basılmadı.
 *
 * Bölüm sırası: vaat → hesap → karşılaştırma → gerekçe → portföy →
 * referans → biz kimiz → süreç → riskler → form.
 */
export const metadata = {
  title: "Dolarhane — ikinci iterasyon",
  description:
    "Aynı içerik, ikinci tasarım iterasyonu. Amerika'da bir eviniz olacak; taksitini kiracınız ödeyecek.",
  robots: { index: false, follow: false },
};

export default function Iterasyon2() {
  return (
    <div className="v2">
      <Nav2 />
      <Hero2 />
      <main>
        <Hesap2 />
        <Karsilastirma2 />
        <Neden2 />
        <Firsatlar2 />
        <Referans2 />
        <Hikaye2 />
        <Nasil2 />
        <Riskler2 />
        <Form2 />
      </main>
      <Dip2 />
    </div>
  );
}
