"use client";

import { useState } from "react";
import {
  fmtUsd,
  fmtYuzde,
  getiri,
  giderler,
  KAPANIS_ORANI,
  HIZMET_ORANI,
} from "@/lib/finance";
import { EVLER_V4, evYolu, onluk, type EvV4 } from "@/lib/evler-v4";
import { LeadForm4 } from "./LeadForm4";
import { Ok4 } from "./isaret";

/**
 * V4 ev detay sayfası — kartın bir adım derini.
 *
 * Açık olan: fotoğraf, künye, evin durumu, bu evin fiyatıyla kurulmuş
 * aylık tablo (lib/finance.ts). Görüşmeye kalan: tam adres, mahalle
 * analizi, kira sözleşmesi, denetim ve tapu dosyası. Merak orada devam
 * etsin, ama rakam saklanmasın.
 *
 * Eylem: "Bu evle ilgileniyorum" → eve bağlı form (gizli `ev` alanı) →
 * başarılıysa Calendly. Form tıklamayla açılıyor; tıklamanın kendisi
 * ilgi sinyali.
 *
 * Bu sayfada `data-r` yok: artifact önizlemesinde katman olarak
 * sonradan açılıyor ve Hareket4'ün gözlemcisi onu görmüyor.
 */
const DOSYA = [
  ["Tam adres ve konum", "Sokak, parsel ve haritadaki yeri."],
  ["Mahalle analizi", "Kira seviyesi, kiracı profili, okul ve ulaşım."],
  ["Kira durumu", "Sözleşme, kiracı geçmişi ve ödeme düzeni."],
  ["Ev denetimi ve tapu", "Bağımsız denetim raporu ve tapu araştırması."],
] as const;

export function EvDetay4({ e }: { e: EvV4 }) {
  const { ev, foto, w, h, slug } = e;
  const [acik, setAcik] = useState(false);
  const u = getiri(ev.fiyat);
  const gd = giderler(ev.fiyat);
  const digerleri = EVLER_V4.filter((x) => x.slug !== slug);
  const evEtiketi = `${ev.z} · ${fmtUsd(ev.fiyat)} (${slug})`;

  return (
    <article className="v4-evd">
      <div className="v4-evd__ust">
        <div className="v4-kap">
          <a className="v4-evd__geri" href="/#v4-evler">
            <svg viewBox="0 0 20 12" aria-hidden="true">
              <path
                d="M19 6H2M7 1 2 6l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Tüm evler
          </a>

          <header className="v4-evd__bas">
            <div>
              <p className="v4-evd__durum">{ev.durum}</p>
              <h1 className="v4-h2">{ev.z}</h1>
              <p className="v4-evd__kunye">
                {ev.oda} · {ev.m2} m² · {ev.arsa} m² arsa · {ev.yil} yapımı
              </p>
            </div>
            <dl className="v4-evd__ana">
              <div>
                <dt>Fiyat</dt>
                <dd className="v4-num">{fmtUsd(ev.fiyat)}</dd>
              </div>
              <div>
                <dt>Beklenen kira</dt>
                <dd className="v4-num">
                  {fmtUsd(onluk(u.kiraAylik))}
                  <small>/ay</small>
                </dd>
              </div>
              <div>
                <dt>Yıllık getiri</dt>
                <dd className="v4-num">{fmtYuzde(u.nakitGetiri * 100, 1)}</dd>
              </div>
            </dl>
          </header>
        </div>
      </div>

      <div className="v4-kap">
        <figure className="v4-evd__foto">
          <img
            src={foto}
            width={w}
            height={h}
            alt={`Temsilî fotoğraf: ${ev.z}`}
          />
          <span className="v4-rozet">temsilî</span>
        </figure>

        <div className="v4-evd__govde">
          <section className="v4-evd__blok">
            <h2 className="v4-h3">Bu ev hakkında</h2>
            <p className="v4-p">{ev.karakter}</p>
            <ul className="v4-evd__oz">
              {ev.ozellik.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </section>

          <section className="v4-evd__blok">
            <h2 className="v4-h3">Bu evin aylık tablosu</h2>
            <dl className="v4-evd__tablo">
              <div>
                <dt>Kira</dt>
                <dd className="v4-num">{fmtUsd(u.kiraAylik)}</dd>
              </div>
              {gd.map((g) => (
                <div key={g.etiket} className="eksi">
                  <dt>
                    {g.etiket} {g.not ? <em>{g.not}</em> : null}
                  </dt>
                  <dd className="v4-num">−{fmtUsd(g.tutarYillik / 12)}</dd>
                </div>
              ))}
              <div className="toplam">
                <dt>Aylık eline geçen</dt>
                <dd className="v4-num">{fmtUsd(u.nakitAylik)}</dd>
              </div>
            </dl>
            <p className="v4-evd__alt">
              Ayrıca kiracısız boş dönem ve büyük onarımlar için ayda{" "}
              <b className="v4-num">{fmtUsd(u.karsilikAylik)}</b> ayırmanızı
              öneriyoruz. Bu para sizin hesabınızda kalır.
            </p>
            <dl className="v4-evd__giris">
              <div>
                <dt>Ev fiyatı</dt>
                <dd className="v4-num">{fmtUsd(u.giris.fiyat)}</dd>
              </div>
              <div>
                <dt>
                  Kapanış masrafı <em>{fmtYuzde(KAPANIS_ORANI * 100)}</em>
                </dt>
                <dd className="v4-num">{fmtUsd(u.giris.kapanis)}</dd>
              </div>
              <div>
                <dt>
                  Hizmet bedeli <em>{fmtYuzde(HIZMET_ORANI * 100, 1)}</em>
                </dt>
                <dd className="v4-num">{fmtUsd(u.giris.hizmet)}</dd>
              </div>
              <div className="toplam">
                <dt>Toplam giriş</dt>
                <dd className="v4-num">{fmtUsd(u.giris.toplam)}</dd>
              </div>
            </dl>
          </section>

          <section className="v4-evd__blok">
            <h2 className="v4-h3">Görüşmede açılanlar</h2>
            <ul className="v4-evd__dosya">
              {DOSYA.map(([b, a]) => (
                <li key={b}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <rect
                      x="3"
                      y="7"
                      width="10"
                      height="7"
                      rx="1.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                    <path
                      d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                    />
                  </svg>
                  <span>
                    <b>{b}</b>
                    {a}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="v4-evd__eylem" id="v4-evd-form">
        <div className="v4-kap v4-kapanis__in">
          <div className="v4-kapanis__soz">
            <h2 className="v4-h2 v4-h2--acik">
              Bu evle <em>ilgileniyor musunuz?</em>
            </h2>
            <p className="v4-kapanis__lede">
              Bilgilerinizi bırakın, bu evin tam dosyasını görüşmede birlikte
              açalım.
            </p>
          </div>
          {acik ? (
            <LeadForm4
              onek={`v4d-${slug}`}
              ev={evEtiketi}
              gonderEtiket="Bilgilerimi gönder"
            />
          ) : (
            <div className="v4-evd__dugme">
              <button
                className="v4-dugme v4-dugme--tam"
                type="button"
                onClick={() => setAcik(true)}
              >
                <span>Bu evle ilgileniyorum</span>
                <Ok4 />
              </button>
              <p>
                İki dakikalık bir form. Ardından görüşme saatini takvimden
                seçebilirsiniz.
              </p>
            </div>
          )}
        </div>
      </section>

      <div className="v4-kap">
        <nav className="v4-evd__diger" aria-label="Diğer evler">
          <p className="v4-evd__durum">Diğer evler</p>
          <ul>
            {digerleri.map((x) => (
              <li key={x.slug}>
                <a href={evYolu(x.slug)}>
                  <span>{x.ev.z}</span>
                  <b className="v4-num">{fmtUsd(x.ev.fiyat)}</b>
                  <Ok4 />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="v4-evd__not">
          Fotoğraf temsilîdir. Rakamlar tahmindir ve kesin bir taahhüt değildir.
          Nihai hesap evin durumuna göre netlik kazanır.
        </p>
      </div>
    </article>
  );
}
