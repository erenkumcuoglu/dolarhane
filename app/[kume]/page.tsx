import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Kirinti } from "@/components/Kirinti";
import { Jsonld } from "@/components/Jsonld";
import { kirintiSemasi } from "@/lib/jsonld";
import { ADRES_VAR } from "@/lib/site";
import {
  KUMELER,
  doluKumeler,
  kirintiIzi,
  kumeYolu,
  kumeninYazilari,
  type KumeAnahtari,
} from "@/lib/icerik";
import {
  OkumaKabuk4,
  OkumaBas4,
  YaziListesi4,
} from "@/components/v4/OkumaKabuk4";
import "../v2.css";
import "../yazi.css";
import "../v4.css";
import "../v4-okuma.css";

/** Statik dışa aktarımda yalnız kayıt defterindeki kümeler üretilir.
 *  Yazısı olmayan küme sayfa açmaz — ince içerik ve öksüz rota olmasın. */
export function generateStaticParams() {
  return doluKumeler().map((k) => ({ kume: k.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kume: string }>;
}): Promise<Metadata> {
  const { kume } = await params;
  const k = KUMELER[kume as KumeAnahtari];
  if (!k) return {};
  return {
    title: `${k.baslik} — Dolarhane`,
    description: k.ozet,
    ...(ADRES_VAR ? { alternates: { canonical: kumeYolu(k.slug) } } : {}),
  };
}

export default async function KumeSayfasi({
  params,
}: {
  params: Promise<{ kume: string }>;
}) {
  const { kume } = await params;
  const k = KUMELER[kume as KumeAnahtari];
  if (!k) notFound();

  const iz = kirintiIzi(undefined, k);

  return (
    <OkumaKabuk4>
      <Jsonld veri={kirintiSemasi(iz)} />
      <OkumaBas4 ust={<Kirinti iz={iz} />} baslik={k.baslik} oz={k.ozet} />
      <main id="icerik" className="v4-blog">
        <section className="v4-blog__kume">
          <div className="v4-kap">
            <YaziListesi4 yazilar={kumeninYazilari(k.slug)} />
          </div>
        </section>
      </main>
    </OkumaKabuk4>
  );
}
