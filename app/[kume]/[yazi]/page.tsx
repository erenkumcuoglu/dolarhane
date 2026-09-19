import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Kirinti } from "@/components/Kirinti";
import { KumeLinkleri } from "@/components/KumeLinkleri";
import { Jsonld } from "@/components/Jsonld";
import { Icerik } from "@/components/Icerik";
import { makaleSemasi, kirintiSemasi, sssSemasi } from "@/lib/jsonld";
import { sssTopla } from "@/lib/bloklar";
import { ADRES_VAR } from "@/lib/site";
import {
  rotalananlar,
  yaziBul,
  kirintiIzi,
  yaziYolu,
  tarihGosterilir,
} from "@/lib/icerik";
import { GOVDELER } from "@/icerik";
import { NavYazi } from "@/components/yazi/NavYazi";
import { DipYazi } from "@/components/yazi/DipYazi";
import "../../v2.css";
import "../../yazi.css";

export function generateStaticParams() {
  return rotalananlar().map((y) => ({ kume: y.kume, yazi: y.slug }));
}
export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ kume: string; yazi: string }>;
}): Promise<Metadata> {
  const { kume, yazi } = await params;
  const y = yaziBul(kume, yazi);
  if (!y) return {};
  /* Taslak sayfalar okunabilir ama indekslenmez: ne arama sonucuna
     çıkarlar ne sitemap'e girerler (bkz. lib/icerik.ts · rotalananlar). */
  const taslak = y.durum === "taslak";
  return {
    title: `${y.baslik} — Dolarhane`,
    description: y.ozet,
    ...(taslak ? { robots: { index: false, follow: false } } : {}),
    ...(ADRES_VAR && !taslak
      ? { alternates: { canonical: yaziYolu(y) } }
      : {}),
  };
}

export default async function YaziSayfasi({
  params,
}: {
  params: Promise<{ kume: string; yazi: string }>;
}) {
  const { kume, yazi } = await params;
  const y = yaziBul(kume, yazi);
  if (!y) notFound();

  const bloklar = GOVDELER[`${y.kume}/${y.slug}`];
  if (!bloklar) notFound();

  const iz = kirintiIzi(y);
  const sss = sssTopla(bloklar);

  return (
    /* Bilgi bankası ikinci iterasyonun dünyasında yaşıyor: taban stiller,
       nav, alt şerit ve kart dili v2.css'ten. Kompozisyon paylaşılmıyor —
       ana sayfa taranıyor, bu sayfa okunuyor. */
    <div className="v2">
      {/* Taslakta yapısal veri basılmıyor: yayınlanmış bir makale gibi
          görünmesin, LLM ve arama tarafına doğrulanmamış iddia gitmesin. */}
      {y.durum === "yayin" ? (
        <>
          <Jsonld veri={kirintiSemasi(iz)} />
          <Jsonld veri={makaleSemasi(y)} />
          {sss.length > 0 ? <Jsonld veri={sssSemasi(sss)} /> : null}
        </>
      ) : null}

      <NavYazi />

      <main id="icerik" className="yazi">
        <div className="v2-kap">
          <div className="yazi__in">
            <Kirinti iz={iz} />

            <article>
              {y.durum === "taslak" ? (
                <p className="yazi__taslak" role="status">
                  <strong>Taslak — yayında değil.</strong> Bu sayfa uzman
                  incelemesi için açık; arama motorlarına kapalı ve site
                  içinden bağlantı verilmiyor. Rakamlar ve eşikler
                  doğrulanmadan yayına alınmayacak.
                </p>
              ) : null}
              <header className="yazi__bas">
                <h1>{y.baslik}</h1>
                <p className="yazi__oz">{y.ozet}</p>

          {/* Künye — E-E-A-T (§7). Boş alan BASILMAZ, uydurulmaz.
              Tarih yalnız evergreen olmayan kademelerde görünür (§3.5). */}
                {(y.yazar || y.gozdenGeciren || tarihGosterilir(y)) && (
                  <p className="yazi__kunye">
              {y.yazar ? <span>{y.yazar}</span> : null}
              {y.gozdenGeciren ? (
                <span>Gözden geçiren: {y.gozdenGeciren}</span>
              ) : null}
              {tarihGosterilir(y) ? (
                <time dateTime={y.guncelleme}>
                  Son güncelleme:{" "}
                  {new Date(y.guncelleme!).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              ) : null}
            </p>
          )}
              </header>

              <Icerik bloklar={bloklar} />
            </article>

            <KumeLinkleri kume={y.kume} haric={y.slug} />
          </div>
        </div>
      </main>

      <DipYazi />
    </div>
  );
}
