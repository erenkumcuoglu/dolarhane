import type { Metadata } from "next";
import {
  OkumaKabuk4,
  OkumaBas4,
  YaziListesi4,
} from "@/components/v4/OkumaKabuk4";
import { Ok4 } from "@/components/v4/isaret";
import { Jsonld } from "@/components/Jsonld";
import { kirintiSemasi } from "@/lib/jsonld";
import { ADRES_VAR } from "@/lib/site";
import { doluKumeler, kumeYolu, kumeninYazilari } from "@/lib/icerik";
import "../v2.css";
import "../v4.css";
import "../v4-okuma.css";

/**
 * BLOG — kütüphanenin giriş kapısı.
 *
 * Neden var: küme sayfaları (/getiri, /surec, …) tek tek duruyordu ve
 * kütüphanenin tamamını gösteren bir kapı yoktu; menüdeki "Blog"
 * kümelerden birine gidiyordu. Ayrıca küme sayfası yazıları dar bir
 * okuma kolonunda düz liste olarak basıyor — aynı içerik burada
 * kategorilere ayrılmış kart ızgarası olarak duruyor.
 *
 * 2026-09 (V4): kart ızgarası ve ikonlu kapaklar bırakıldı; ana sayfanın
 * editoryal diline geçti — koyu üst bant, ince Gambetta başlıklar,
 * kılcal çizgili yazı satırları (YaziListesi4).
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
    <OkumaKabuk4>
      <Jsonld
        veri={kirintiSemasi([
          { ad: "Dolarhane", yol: "/" },
          { ad: "Blog", yol: "/blog/" },
        ])}
      />
      <OkumaBas4
        ust={
          <nav className="kirinti" aria-label="Sayfa yolu">
            <ol>
              <li>
                <a href="/">Dolarhane</a>
              </li>
              <li>
                <span aria-current="page">Blog</span>
              </li>
            </ol>
          </nav>
        }
        baslik={
          <>
            Amerika&apos;dan ev almak <em>üzerine.</em>
          </>
        }
        oz="Getirisi, süreci, vergisi ve riskleri. Her yazı tek bir sorunun net cevabı, aleyhimize olan cevaplar dahil."
        genis
      >
        <nav className="v4-kategori" aria-label="Kategoriler">
          {kumeler.map((k) => (
            <a key={k.slug} href={`#k-${k.slug}`}>
              {k.ad}
              <i className="v4-num">{kumeninYazilari(k.slug).length}</i>
            </a>
          ))}
        </nav>
      </OkumaBas4>

      <main id="icerik" className="v4-blog">
        {kumeler.map((k) => (
          <section className="v4-blog__kume" id={`k-${k.slug}`} key={k.slug}>
            <div className="v4-kap">
              <div className="v4-blog__bas">
                <h2 className="v4-h2">{k.baslik}</h2>
                <div>
                  <p className="v4-p">{k.ozet}</p>
                  <a className="v4-baglanti" href={kumeYolu(k.slug)}>
                    {k.ad} kümesinin tamamı <Ok4 />
                  </a>
                </div>
              </div>
              <YaziListesi4 yazilar={kumeninYazilari(k.slug)} />
            </div>
          </section>
        ))}

        <section className="v4-blog__dip">
          <div className="v4-kap">
            <p className="v4-blog__sayi v4-num">
              {toplam} yazı · {kumeler.length} kategori
            </p>
            <p className="v4-h3 v4-h2--acik">
              Aradığınız soru burada yoksa görüşmede sorun. Cevabı biliyorsak
              yazıyoruz, bilmiyorsak onu da söylüyoruz.
            </p>
            <a className="v4-dugme" href="/#v4-kapanis">
              <span>Görüşme alın</span>
              <Ok4 />
            </a>
          </div>
        </section>
      </main>
    </OkumaKabuk4>
  );
}
