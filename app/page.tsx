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
import { Jsonld } from "@/components/Jsonld";
import { organizasyon } from "@/lib/jsonld";
import "./v2.css";

/**
 * ANA SAYFA — ikinci iterasyon.
 *
 * İkinci iterasyon 2026-09'da sitenin kendisi oldu; birinci iterasyonun
 * ana sayfası bırakıldı (git geçmişinde duruyor, son hali b53d724).
 * `/hesap` hâlâ birinci iterasyonun yüzeyinde: içeriği — tüm cetveller
 * tek parça — gerçek iş taşıdığı için silinmedi, taşınmayı bekliyor.
 *
 * Kompozisyon: lacivert hero + kenara kanayan fotoğraf, iki kaydırıcılı
 * hesap paneli, numaralı gerekçe kartları, dört kartlı portföy ızgarası,
 * yatay form bandı.
 *
 * İddia disiplini değişmedi: her rakam lib/finance.ts'ten, portföy ve
 * şeffaflık verisi damgalı, boş iletişim alanı uydurulmuyor, şehir adı
 * geçmiyor (DESIGN.md kural 11).
 *
 * Bölüm sırası: vaat → hesap → karşılaştırma → gerekçe → portföy →
 * referans → biz kimiz → süreç → riskler → form.
 */
export default function AnaSayfa() {
  return (
    <div className="v2">
      {/* Varlık çapası. LLM'ler ve Google markayı ancak tek bir varlık
          olarak kurabilirse istikrarlı biçimde anıyor; o varlığın kanonik
          tanımı burada duruyor (SEO-GEO-PLAN §8.4). Boş kimlik alanları
          şemaya yazılmıyor. */}
      <Jsonld veri={organizasyon()} />
      <Nav2 />
      <Hero2 />
      {/* Yerleşimdeki "İçeriğe geç" bağlantısının hedefi. */}
      <main id="icerik">
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
