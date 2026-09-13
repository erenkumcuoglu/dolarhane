import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Kirinti } from "@/components/Kirinti";
import { KumeLinkleri } from "@/components/KumeLinkleri";
import { Jsonld } from "@/components/Jsonld";
import { kirintiSemasi } from "@/lib/jsonld";
import { ADRES_VAR } from "@/lib/site";
import {
  KUMELER,
  doluKumeler,
  kirintiIzi,
  kumeYolu,
  type KumeAnahtari,
} from "@/lib/icerik";
import { NavYazi } from "@/components/yazi/NavYazi";
import { DipYazi } from "@/components/yazi/DipYazi";
import "../v2/v2.css";
import "../yazi.css";

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
    <div className="v2">
      <Jsonld veri={kirintiSemasi(iz)} />
      <NavYazi />
      <main id="icerik" className="yazi">
        <div className="v2-kap">
          <div className="yazi__in">
            <Kirinti iz={iz} />
            <header className="yazi__bas">
              <h1>{k.baslik}</h1>
              <p className="yazi__oz">{k.ozet}</p>
            </header>
          </div>
          <KumeLinkleri kume={k.slug} />
        </div>
      </main>
      <DipYazi />
    </div>
  );
}
