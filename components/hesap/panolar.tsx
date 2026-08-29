import {
  CANLI,
  KANONIK,
  US_YILLIK,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  giderler,
  vadeSonu,
  zamanCizgisi,
} from "@/lib/finance";

/* ── Hesap sayfası panoları ───────────────────────────────────
   Ana sayfadan buraya taşındı: rakam yükünün yarısı bu üç panelde.
   Riskler ve sorular ana sayfada kaldı. */

/* 01 · Nakit ve getiri */
export function Nakit() {
  const u = CANLI.us;
  const net = CANLI.net;
  const g = giderler(KANONIK.fiyat);

  return (
    <section className="hpano pano--iki" id="h-nakit">
      <div>
        <h2 className="h2 pano__h">
          Kira taksiti karşılıyor. Cebinize giren para yine de az.
        </h2>
        <p className="vurus pano__vurus">
          Asıl kazanç nakitte değil: evi fiilen kiracı satın alıyor, siz
          peşinatı koydunuz.
        </p>
        <div className="ikili">
          <div className="kart kart--tint ikili__h">
            <p className="xs">Ayda cebinize giren nakit</p>
            <p className="ikili__v num">{fmtUsd(u.nakitAkisiAylik)}</p>
          </div>
          <div className="kart kart--wash ikili__h">
            <p className="xs amber-t">Ayda biriken anapara</p>
            <p className="ikili__v ikili__v--amber num">
              {fmtUsd(u.anaparaAylikIlkYil)}
            </p>
          </div>
        </div>
        <p className="xs pano__dip">
          {fmtUsd(u.kira)} kira − {fmtUsd(u.isletmeAylik)} işletme −{" "}
          {fmtUsd(u.taksit)} taksit. Anapara ilk 12 ayın ortalaması.
        </p>
      </div>

      <div>
        <div className="sect__bas">
          <h3 className="h3">Brüt getiri bir reklamdır.</h3>
          <p className="xs sect__yan">
            {fmtUsd(KANONIK.fiyat)} · peşin · yıllık
          </p>
        </div>
        <div className="kart defter">
          <div className="defter__s defter__s--bas">
            <span>Brüt kira geliri</span>
            <span className="num">{fmtUsd(net.brutYillik)}</span>
          </div>
          {g.map((x) => (
            <div className="defter__s" key={x.etiket}>
              <span>
                {x.etiket}
                {x.not ? <em className="chip">{x.not}</em> : null}
              </span>
              <span className="num">−{fmtUsd(x.tutarYillik)}</span>
            </div>
          ))}
          <div className="defter__s defter__s--net">
            <span>Net nakit akışı</span>
            <span className="num">
              {fmtUsd(net.netYillik)} · {fmtYuzde(net.netGetiri * 100, 2)}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 02 · 30 yıl */
export function OtuzYil() {
  const son = vadeSonu();
  const km = zamanCizgisi();

  return (
    <section className="hpano pano--iki otuz" id="h-otuz">
      <div className="otuz__soz">
        <h2 className="h2">Otuz yıl sonra ev sizin. Parasını kiracınız ödedi.</h2>
        <p className="vurus">
          Peşinatı siz koyuyorsunuz; geri kalanını her ay bir başkası kapatıyor.
        </p>
        <p className="sm otuz__not">
          Bu tabloda kira {KANONIK.vadeYil} yıl boyunca hiç artmıyor: gerçekçi
          değil, kasten kötümser. Değer artışı da varsayılmıyor.
        </p>
        <dl className="otuz__ozet">
          <div>
            <dt className="xs">Sizin koyduğunuz</dt>
            <dd className="num">{fmtUsd(son.sizinKoydugunuz)}</dd>
          </div>
          <div className="otuz__ozet--amber">
            <dt className="xs amber-t">
              Kiracının {KANONIK.vadeYil} yılda kapattığı
            </dt>
            <dd className="num amber-t">{fmtUsd(son.kiracininKapattigi)}</dd>
          </div>
          <div>
            <dt className="xs">Elinizde kalan</dt>
            <dd>Borçsuz ev</dd>
          </div>
        </dl>
      </div>

      <div className="kart tasar">
        <p className="xs tasar__bas">
          Kredinin kapanışı · {km.length} kilometre taşı
        </p>
        {km.map((k) => (
          <div className="tasar__h" key={k.yil}>
            <div className="tasar__ust">
              <span className="tasar__yil">{k.yil}. yıl</span>
              <span className="xs">
                {fmtYuzde(k.ozkaynakOrani * 100)} kapandı · kalan{" "}
                {fmtUsd(k.kalanKredi)}
              </span>
            </div>
            <div className="tasar__ray" aria-hidden="true">
              <span style={{ width: `${k.ozkaynakOrani * 100}%` }} />
            </div>
          </div>
        ))}
        <p className="xs">
          {fmtUsd(KANONIK.fiyat)} ev, {fmtYuzde(KANONIK.pesinatOrani * 100)}{" "}
          peşinat, yıllık {fmtYuzde(US_YILLIK * 100, 2)} ·{" "}
          {KANONIK.vadeYil} yıl. Kapanan pay krediye göredir.
        </p>
      </div>
    </section>
  );
}

/* 03 · Karşılaştırma */
export function Karsilastirma() {
  const net = CANLI.net;
  const t = CANLI.tr;
  const u = CANLI.us;

  /** aleyhte: kaybettiğimiz satır — kazanç rengiyle boyanmaz */
  const satir: {
    olcut: string;
    bizim: string;
    aleyhte?: boolean;
    digerleri: [string, string, boolean?][];
  }[] = [
    {
      olcut: "Yıllık net nakit getiri",
      bizim: `${fmtYuzde(net.netGetiri * 100, 2)} · USD`,
      digerleri: [
        ["İstanbul'da daire", "%5,6 · TL"],
        ["Altın", "Yok", true],
        ["Dolar mevduat", "%2–3 · USD"],
      ],
    },
    {
      olcut: "Kredi kullanılabilirliği",
      bizim: `Yıllık ${fmtYuzde(US_YILLIK * 100, 2)}`,
      digerleri: [
        ["İstanbul'da daire", `Efektif ${fmtYuzde(t.efektifYillik * 100)} faiz`],
        ["Altın", "—", true],
        ["Dolar mevduat", "—", true],
      ],
    },
    {
      olcut: "Kira, taksiti karşılıyor mu",
      bizim: `Evet · ${fmtOran(u.oran)}`,
      digerleri: [
        ["İstanbul'da daire", `Hayır · ${fmtOran(t.oran)}`],
        ["Altın", "—", true],
        ["Dolar mevduat", "—", true],
      ],
    },
    {
      olcut: "Reel değer koruması",
      bizim: "Güçlü",
      digerleri: [
        ["İstanbul'da daire", "Zayıf · −%5,8"],
        ["Altın", "Güçlü"],
        ["Dolar mevduat", "Orta"],
      ],
    },
    {
      olcut: "Yönetim yükü",
      bizim: "Bizde",
      digerleri: [
        ["İstanbul'da daire", "Sizde"],
        ["Altın", "Yok", true],
        ["Dolar mevduat", "Yok", true],
      ],
    },
    {
      olcut: "Likidite",
      bizim: "Düşük–orta",
      aleyhte: true,
      digerleri: [
        ["İstanbul'da daire", "Düşük"],
        ["Altın", "Yüksek"],
        ["Dolar mevduat", "Yüksek"],
      ],
    },
    {
      olcut: "Varlığın bulunduğu hukuk",
      bizim: "ABD",
      digerleri: [
        ["İstanbul'da daire", "Türkiye"],
        ["Altın", "Kasanız"],
        ["Dolar mevduat", "Türk bankası"],
      ],
    },
  ];

  return (
    <section className="hpano" id="h-kars">
      <div className="sect__bas">
        <h2 className="h2 pano__h">
          Gerçek rakibimiz Amerika&apos;daki başka bir ev değil.
        </h2>
        <p className="xs sect__yan">
          Elinizdeki para bugün dört yerden birine gidiyor. Her ölçütte önce
          bizim cevabımız, altında diğer üç yol.
        </p>
      </div>

      {/* masaüstünde tek başlıklı tablo, telefonda yığın kart */}
      <div className="kars">
        <div className="kars__bas" aria-hidden="true">
          <span />
          <span className="xs">İstanbul&apos;da daire</span>
          <span className="xs">Altın</span>
          <span className="xs">Dolar mevduat</span>
          <span className="xs kars__basbiz">Dolarhane</span>
        </div>
        {satir.map((s) => (
          <div className="kart kars__h" key={s.olcut}>
            <p className="kars__olcut">{s.olcut}</p>
            <dl className="kars__ler">
              {s.digerleri.map(([ad, deger, sonuk]) => (
                <div key={ad}>
                  <dt className="xs">{ad}</dt>
                  <dd className={sonuk ? "kars__yok" : undefined}>{deger}</dd>
                </div>
              ))}
              <div
                className={
                  s.aleyhte ? "kars__biz kars__biz--aleyhte" : "kars__biz"
                }
              >
                <dt className="xs">Dolarhane</dt>
                <dd>{s.bizim}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
      <p className="xs pano__dip">
        Likidite satırı bizim kaybettiğimiz satır — o yüzden kazanç rengiyle
        boyanmadı.
      </p>
    </section>
  );
}
