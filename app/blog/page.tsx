import type { Metadata } from "next";
import { Nav3 } from "@/components/v3/Nav3";
import { Dip3 } from "@/components/v3/Dip3";
import { BlogKart } from "@/components/v3/BlogKart";
import { KUME_IKONU } from "@/components/v3/kumeIkon";
import { Jsonld } from "@/components/Jsonld";
import { kirintiSemasi } from "@/lib/jsonld";
import { ADRES_VAR } from "@/lib/site";
import { doluKumeler, kumeYolu, kumeninYazilari } from "@/lib/icerik";
import "../v3.css";

/**
 * BLOG — kütüphanenin giriş kapısı.
 *
 * Neden var: küme sayfaları (/getiri, /surec, …) tek tek duruyordu ve
 * kütüphanenin tamamını gösteren bir kapı yoktu; menüdeki "Blog"
 * kümelerden birine gidiyordu. Ayrıca küme sayfası yazıları dar bir
 * okuma kolonunda düz liste olarak basıyor — aynı içerik burada
 * kategorilere ayrılmış kart ızgarası olarak duruyor.
 *
 * Kapaklar ÜRETİLMİŞ: yazıların fotoğrafı yok ve uydurulmuyor. Lacivert
 * tuval + altın kategori künyesi + dizili başlık (bkz. BlogKart).
 *
 * Kümelerin sırası bilgi mimarisinden geliyor (KUME_SIRASI); burada elle
 * sıralanmıyor. Yalnız YAYINDA yazısı olan kümeler basılıyor — vergi
 * kümesi tamamen taslak olduğu için listede yok, ama sayfaları uzman
 * incelemesi için erişilebilir durumda (lib/icerik.ts).
 */
export const metadata: Metadata = {
  title: "Blog — Dolarhane",
  description:
    "Amerika'dan ev almanın getirisi, süreci, vergisi ve riskleri. " +
    "Her yazı tek bir sorunun net cevabı; aleyhimize olan cevaplar dahil.",
  ...(ADRES_VAR ? { alternates: { canonical: "/blog/" } } : {}),
};

export default function Blog() {
  const kumeler = doluKumeler();
  const toplam = kumeler.reduce(
    (t, k) => t + kumeninYazilari(k.slug).length,
    0,
  );

  return (
    <div className="v3">
      <Jsonld
        veri={kirintiSemasi([
          { ad: "Dolarhane", yol: "/" },
          { ad: "Blog", yol: "/blog/" },
        ])}
      />
      <Nav3 />

      <header className="v3-blogbas">
        <div className="v3-kap">
          <p className="v3-blogbas__iz">
            <a href="/">Dolarhane</a>
            <span aria-hidden="true">/</span>
            <span>Blog</span>
          </p>
          <h1 className="v3-blogbas__h">Amerika&apos;dan ev almak üzerine.</h1>
          <p className="v3-blogbas__lede">
            Getirisi, süreci, vergisi ve riskleri. Her yazı tek bir sorunun
            net cevabı — aleyhimize olan cevaplar dahil.
          </p>

          <nav className="v3-kategori" aria-label="Kategoriler">
            {kumeler.map((k) => {
              const Ikon = KUME_IKONU[k.slug];
              return (
                <a key={k.slug} href={`#k-${k.slug}`}>
                  <span aria-hidden="true">
                    <Ikon />
                  </span>
                  {k.ad}
                  <i>{kumeninYazilari(k.slug).length}</i>
                </a>
              );
            })}
          </nav>
        </div>
      </header>

      <main id="icerik">
        {kumeler.map((k) => (
          <section className="v3-sect v3-blog" id={`k-${k.slug}`} key={k.slug}>
            <div className="v3-kap">
              <div className="v3-blog__bas">
                <div>
                  <h2 className="v3-h2">{k.baslik}</h2>
                  <p className="v3-blog__oz">{k.ozet}</p>
                </div>
                <a className="v3-blog__tum" href={kumeYolu(k.slug)}>
                  {k.ad} kümesinin tamamı
                </a>
              </div>

              <div className="v3-bk__ler">
                {kumeninYazilari(k.slug).map((y) => (
                  <BlogKart yazi={y} key={y.slug} />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="v3-sect v3-blogdip">
          <div className="v3-kap">
            <p className="v3-blogdip__sayi">
              {toplam} yazı · {kumeler.length} kategori
            </p>
            <p className="v3-blogdip__c">
              Aradığınız soru burada yoksa görüşmede sorun — cevabı
              biliyorsak yazıyoruz, bilmiyorsak onu da söylüyoruz.
            </p>
            <a className="v3-btn v3-btn--dolu v3-btn--lg" href="/v3/#v3-kapanis">
              Görüşme alın
            </a>
          </div>
        </section>
      </main>

      <Dip3 />
    </div>
  );
}
