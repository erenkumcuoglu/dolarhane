/**
 * /hesap panoları — PEŞİN model (iş planı §10).
 *
 * Kaldıraçlı sürüm (ABD–Türkiye kredi cetveli, 30 yıllık kapanış, aylık
 * $35 nakit akışı) tamamen kalktı; o senaryo artık kamuya açık ürün değil.
 *
 * Bu sayfanın işi ikna değil DENETİM: slayt 16'nın satırlarını tek tek
 * gösteriyor, iki senaryoyu yan yana koyuyor ve fiyat yükseldikçe verimin
 * neden düştüğünü açık ediyor.
 */
import {
  CANLI,
  GIDER,
  HIZMET_ORANI,
  KAPANIS_ORANI,
  MODEL_DOGRULANDI,
  TATLI_NOKTA,
  TR,
  fmtAdet,
  fmtOran,
  fmtUsd,
  fmtYuzde,
  getiri,
  giderler,
  karsiliklar,
} from "@/lib/finance";

/* 01 · Giriş bileti */
export function Giris() {
  const g = CANLI.getiri.giris;

  const satir: [string, string, string?][] = [
    ["Ev fiyatı", fmtUsd(g.fiyat)],
    ["Kapanış masrafları", fmtUsd(g.kapanis), fmtYuzde(KAPANIS_ORANI * 100)],
    [
      "Dolarhane hizmet bedeli",
      fmtUsd(g.hizmet),
      fmtYuzde(HIZMET_ORANI * 100, 1),
    ],
  ];

  return (
    <section className="hpano" id="h-giris">
      <div className="sect__bas">
        <h2 className="h2 pano__h">Cebinizden ne çıkıyor.</h2>
        <p className="xs sect__yan">
          Kanonik senaryo · {fmtUsd(g.fiyat)} · peşin
        </p>
      </div>

      {!MODEL_DOGRULANDI ? (
        <p className="damga">[MODEL ÇALIŞMASI — partner verisiyle doğrulanacak]</p>
      ) : null}

      <div className="kart defter">
        {satir.map(([k, v, not]) => (
          <div className="defter__s" key={k}>
            <span>
              {k}
              {not ? <em className="chip">{not}</em> : null}
            </span>
            <span className="num">{v}</span>
          </div>
        ))}
        <div className="defter__s defter__s--net">
          <span>Toplam çıkış</span>
          <span className="num">{fmtUsd(g.toplam)}</span>
        </div>
      </div>

      <p className="xs pano__dip">
        Getiri oranları ev fiyatına değil bu tutara bölünür — yatırımcının
        cebinden çıkan para budur. Kredi, peşinat ve taksit yok: alım peşin.
      </p>
    </section>
  );
}

/* 02 · Gider defteri */
export function Defter() {
  const u = CANLI.getiri;
  const g = giderler();
  const kars = karsiliklar();

  return (
    <section className="hpano pano--iki" id="h-defter">
      <div>
        <h2 className="h2 pano__h">Brüt getiri bir reklamdır.</h2>
        <p className="vurus pano__vurus">
          Kira tahsil edilir, giderler ondan düşer. Sayfada yazan rakam
          düşüldükten sonrasıdır.
        </p>
        <div className="ikili">
          <div className="kart kart--tint ikili__h">
            <p className="xs">Aylık brüt kira</p>
            <p className="ikili__v num">{fmtUsd(u.kiraAylik)}</p>
          </div>
          <div className="kart kart--wash ikili__h">
            <p className="xs amber-t">Aylık eline geçen</p>
            <p className="ikili__v ikili__v--amber num">
              {fmtUsd(u.nakitAylik)}
            </p>
          </div>
        </div>
        <p className="xs pano__dip">
          Soldaki kira, sağdaki emlak vergisi, sigorta ve mülk yönetimi
          düşüldükten sonra hesabınıza giren para. Boşluk{" "}
          {fmtYuzde(GIDER.boslukOrani * 100)} ve bakım{" "}
          {fmtYuzde(GIDER.bakimOrani * 100)} payları bu rakamdan
          düşülmedi — onlar bize gitmiyor, sizin hesabınızda kalıyor.
          Aşağıda ayrıca duruyorlar.
        </p>
      </div>

      <div>
        <div className="sect__bas">
          <h3 className="h3">Yıllık defter</h3>
          <p className="xs sect__yan">{fmtUsd(u.giris.fiyat)} · peşin</p>
        </div>
        <div className="kart defter">
          <div className="defter__s defter__s--bas">
            <span>Brüt kira geliri</span>
            <span className="num">{fmtUsd(u.brutYillik)}</span>
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
            <span>Yıllık eline geçen</span>
            <span className="num">
              {fmtUsd(u.nakitYillik)} · {fmtYuzde(u.nakitGetiri * 100, 1)}
            </span>
          </div>
        </div>

        {/* Karşılıklar defterin DIŞINDA ve "−" ile değil "~" ile:
            cepten çıkmıyorlar (bkz. lib/finance.ts). */}
        <div className="kart defter defter--karsilik">
          <div className="defter__s defter__s--bas">
            <span>Kenarda tutmanızı önerdiğimiz</span>
            <span className="num">~{fmtUsd(u.karsilikYillik)}</span>
          </div>
          {kars.map((x) => (
            <div className="defter__s" key={x.etiket}>
              <span>
                {x.etiket}
                {x.not ? <em className="chip">{x.not}</em> : null}
              </span>
              <span className="num">~{fmtUsd(x.tutarYillik)}</span>
            </div>
          ))}
          <div className="defter__s defter__s--net">
            <span>Hepsi harcanırsa yıllık</span>
            <span className="num">
              {fmtUsd(u.netYillik)} · {fmtYuzde(u.netGetiri * 100, 1)}
            </span>
          </div>
        </div>

        <p className="xs pano__dip">
          Bu para bize gelmiyor ve kimseye ödenmiyor — kendi ABD
          hesabınızda duruyor. Çatı, kombi ve su ısıtıcı bir gün
          değişiyor; kiracı bir gün çıkıyor. Beş yılda{" "}
          <strong>{fmtUsd(u.karsilikYillik * 5)}</strong> birikiyor ve
          harcanmazsa sizde kalıyor. Kötü bir yılda bakım bu payı
          aşabilir; iyi bir yılda hiç dokunulmaz.
        </p>
      </div>
    </section>
  );
}

/* 03 · İki senaryo — slayt 16 */
export function Senaryolar() {
  const a = getiri(140_000);
  const b = getiri(200_000);

  const satir: [string, string, string][] = [
    ["Ev fiyatı", fmtUsd(a.giris.fiyat), fmtUsd(b.giris.fiyat)],
    ["Toplam çıkış", fmtUsd(a.giris.toplam), fmtUsd(b.giris.toplam)],
    ["Aylık kira", fmtUsd(a.kiraAylik), fmtUsd(b.kiraAylik)],
    [
      "Brüt getiri",
      fmtYuzde(a.brutGetiri * 100, 1),
      fmtYuzde(b.brutGetiri * 100, 1),
    ],
    ["Yıllık gider", "−" + fmtUsd(a.giderYillik), "−" + fmtUsd(b.giderYillik)],
    ["Aylık eline geçen", fmtUsd(a.nakitAylik), fmtUsd(b.nakitAylik)],
    [
      "Nakit getiri",
      fmtYuzde(a.nakitGetiri * 100, 1),
      fmtYuzde(b.nakitGetiri * 100, 1),
    ],
    [
      "Önerilen bakım payı",
      "~" + fmtUsd(a.karsilikAylik),
      "~" + fmtUsd(b.karsilikAylik),
    ],
    ["Payın tamamı harcanırsa", fmtUsd(a.netAylik), fmtUsd(b.netAylik)],
  ];

  return (
    <section className="hpano" id="h-senaryo">
      <div className="sect__bas">
        <h2 className="h2 pano__h">Pahalı ev daha çok para getirir, daha az verim.</h2>
        <p className="xs sect__yan">
          Tatlı nokta {fmtUsd(TATLI_NOKTA.min)} – {fmtUsd(TATLI_NOKTA.max)}
        </p>
      </div>

      <div className="kart tablo">
        <div className="tablo__satir tablo__satir--bas">
          <span>Kalem</span>
          <span>{fmtUsd(140_000)} ev</span>
          <span>{fmtUsd(200_000)} ev</span>
        </div>
        {satir.map(([k, av, bv]) => (
          <div className="tablo__satir" key={k}>
            <span className="tablo__k">{k}</span>
            <span className="num">{av}</span>
            <span className="num tablo__tr">{bv}</span>
          </div>
        ))}
      </div>

      <p className="xs cetvel__not">
        Pahalı ev ayda{" "}
        <strong>{fmtUsd(b.nakitAylik - a.nakitAylik)} daha fazla</strong> nakit
        üretiyor ama paranın verimi{" "}
        {fmtYuzde((a.nakitGetiri - b.nakitGetiri) * 100, 1)} düşüyor: emlak vergisi
        ev fiyatıyla birlikte artarken kira aynı hızda artmıyor. Bu yüzden
        hedef bandımız {fmtUsd(TATLI_NOKTA.min)} – {fmtUsd(TATLI_NOKTA.max)}.
      </p>
    </section>
  );
}

/* 04 · Türkiye karşılaştırması — slayt 9 */
export function Karsilastirma() {
  const u = CANLI.getiri;
  const k = CANLI.karsilastirma;

  const satir: [string, string, string, boolean?][] = [
    ["Giriş bileti", fmtUsd(TR.girisBileti), fmtUsd(u.giris.toplam)],
    ["Aylık brüt kira", fmtUsd(TR.kiraAylik), fmtUsd(u.kiraAylik)],
    [
      "Brüt getiri",
      fmtYuzde(TR.brutGetiri * 100, 2),
      fmtYuzde(u.brutGetiri * 100, 1),
    ],
    [
      "Tahmini net getiri",
      fmtYuzde(TR.netGetiri * 100, 1),
      fmtYuzde(u.netGetiri * 100, 1),
    ],
    /* aleyhte: ev başına aylık net bizde daha düşük.
       TABAN NOTU — burada bilerek `netAylik` kullanılıyor, `nakitAylik`
       değil: Türkiye kolonundaki %2,8 net getirinin hangi giderleri
       içerdiğini bilmiyoruz (slayt 9'dan geliyor). Bizim tarafta
       karşılıkları da düşülmüş en muhafazakâr rakamı koymak, taban
       uyuşmazlığının bizim lehimize çalışmasını engelliyor. */
    ["Ev başına aylık net", fmtUsd(k.trAylikNet), fmtUsd(u.netAylik), true],
    ["Gelirin para birimi", "TL riskiyle", "Dolar"],
    ["Gelir ne zaman başlar", "Kiracı bulunca", "İlk ay · kiracı içinde"],
  ];

  return (
    <section className="hpano" id="h-kars">
      <div className="sect__bas">
        <h2 className="h2 pano__h">Aynı para, iki farklı sonuç.</h2>
        <p className="xs sect__yan">
          İki taraf da peşin alım. Kredi karşılaştırması yok.
        </p>
      </div>

      <div className="kart tablo">
        <div className="tablo__satir tablo__satir--bas">
          <span>Kalem</span>
          <span>İstanbul&apos;da daire</span>
          <span>Dolarhane · ABD</span>
        </div>
        {satir.map(([k2, tv, uv, aleyhte]) => (
          <div className="tablo__satir" key={k2}>
            <span className="tablo__k">
              {k2}
              {aleyhte ? <em className="chip">bizim aleyhimize</em> : null}
            </span>
            <span className="num">{tv}</span>
            <span className={aleyhte ? "num tablo__tr" : "num"}>{uv}</span>
          </div>
        ))}
      </div>

      <div className="ozetband">
        <span className="ozetband__k">
          {fmtUsd(k.butce)} Türkiye&apos;de bir ev alıyor ve ayda{" "}
          {fmtUsd(k.trAylikNet)} getiriyor. Aynı parayla bizde{" "}
          {fmtAdet(k.usEv)}, ayda {fmtUsd(k.usAylikNet)}.
        </span>
        <span className="ozetband__v num">{fmtOran(k.kat)}</span>
      </div>

      <p className="xs pano__dip">
        Ev başına aylık net bizde daha düşük — bu satırı gizlemiyoruz. Fark,
        aynı bütçeye kaç ev sığdığında ortaya çıkıyor. Türkiye kolonu bugün
        bulunabilen en iyi koşulla kuruldu; piyasa ortalaması daha kötü.
        Bu tabloda bizim kolonumuz <strong>bakım payı da düşülmüş</strong>{" "}
        en muhafazakâr rakamla kuruldu: Türkiye kolonundaki oranın hangi
        giderleri içerdiğini bilmediğimiz için belirsizliği kendi
        aleyhimize yazdık.
      </p>
    </section>
  );
}
