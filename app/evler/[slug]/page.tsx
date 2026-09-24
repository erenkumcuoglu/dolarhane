import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { gambettaV4 } from "../../fonts";
import { Hareket4 } from "@/components/v4/Hareket4";
import { Nav4 } from "@/components/v4/Nav4";
import { EvDetay4 } from "@/components/v4/EvDetay4";
import { Dip4 } from "@/components/v4/Dip4";
import { EVLER_V4, evBul } from "@/lib/evler-v4";
import "../../v4.css";

/** Ev detay sayfaları — statik dışa aktarımda her ev için bir sayfa.
 *  Portföy örnek olduğu sürece noindex; gerçek portföy gelince açılır
 *  ve sitemap'e eklenir. */
export function generateStaticParams() {
  return EVLER_V4.map((e) => ({ slug: e.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const e = evBul(slug);
  if (!e) return {};
  return {
    title: `${e.ev.z} — Dolarhane`,
    robots: { index: false, follow: false },
  };
}

export default async function EvSayfasi({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = evBul(slug);
  if (!e) notFound();
  return (
    <div className={`v4 ${gambettaV4.variable}`}>
      <Hareket4 />
      <Nav4 kok="/" cta="#v4-evd-form" />
      <main id="icerik">
        <EvDetay4 e={e} />
      </main>
      <Dip4 kok="/" />
    </div>
  );
}
