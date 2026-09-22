/**
 * v2 karşılaştırma — iş planı slayt 9: "Aynı para, iki farklı sonuç".
 *
 * TABAN NOTU: burada bilerek `netAylik`/`netGetiri` kullanılıyor,
 * `nakitAylik` değil. Türkiye kolonundaki %2,8'in hangi giderleri
 * içerdiğini bilmiyoruz; bizim tarafta karşılıkları da düşülmüş en
 * muhafazakâr rakamı koyarak taban uyuşmazlığının bizim lehimize
 * çalışmasını engelliyoruz. Hesap paneli "eline geçen" nakdi
 * gösteriyor ve bu tablodan yüksek — fark sayfada yazılı.
 *
 * Kaldıraçlı sürümün yerini aldı. İki taraf da PEŞİN; kredi, taksit ve
 * vade karşılaştırması yok (iş planı §10–11).
 *
 * Tablo aleyhimize olan satırı gizlemiyor: ev başına aylık net bizde daha
 * DÜŞÜK (701 $ / 933 $). Kazanan taraf aynı bütçeye kaç ev sığdığında
 * ortaya çıkıyor ve alttaki bant tam olarak bunu söylüyor.
 */
import {
  CANLI,
  TR,
  fmtAdet,
  fmtOran,
  fmtUsd,
  fmtYuzde,
} from "@/lib/finance";

export function Karsilastirma2() {
  const u = CANLI.getiri;
  const k = CANLI.karsilastirma;

  const satirlar: [string, string, string][] = [
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
    ["Aylık net", fmtUsd(k.trAylikNet), fmtUsd(u.netAylik)],
    ["Gelirin para birimi", "TL riskiyle", "Dolar"],
    ["Gelir ne zaman başlar", "Kiracı bulunca", "İlk ay · kiracı içinde"],
  ];

  return (
    <section className="v2-sect v2-kars" id="v2-karsilastirma">
      <div className="v2-kap">
        <div className="v2-sect__bas">
          <h2 className="v2-h2">Aynı para, iki farklı sonuç.</h2>
          <p className="v2-xs v2-sect__yan">
            İki taraf da peşin alım. Ev başına aylık net bizde daha düşük —
            fark, aynı bütçeye kaç ev sığdığında ortaya çıkıyor. Bu
            tabloda bizim kolonumuz bakım payı da düşülmüş rakamla
            kuruldu; yukarıdaki hesapta gördüğünüz tutardan bu yüzden
            düşük.
          </p>
        </div>

        <div className="v2-kart v2-kars__kart">
          <div className="v2-kars__s v2-kars__s--bas">
            <span />
            <span className="v2-xs">İstanbul&apos;da daire</span>
            <span className="v2-xs v2-kars__biz">Dolarhane · ABD</span>
          </div>
          {satirlar.map(([etiket, trDeger, usDeger]) => (
            <div className="v2-kars__s" key={etiket}>
              <span className="v2-xs v2-kars__k">{etiket}</span>
              <span className="v2-kars__tr">
                <em className="v2-mini">İstanbul&apos;da daire</em>
                {trDeger}
              </span>
              <span className="v2-kars__us">
                <em className="v2-mini">Dolarhane · ABD</em>
                {usDeger}
              </span>
            </div>
          ))}
        </div>

        <div className="v2-sermaye">
          <div>
            <p className="v2-xs">
              {fmtUsd(k.butce)} ile aylık net gelir
            </p>
            <p className="v2-sermaye__v v2-num">{fmtOran(k.kat)}</p>
          </div>
          <p className="v2-sm">
            {fmtUsd(k.butce)} Türkiye&apos;de <strong>bir ev</strong> alıyor,
            ayda {fmtUsd(k.trAylikNet)} getiriyor. Aynı parayla bizde{" "}
            <strong>{fmtAdet(k.usEv)}</strong>, ayda{" "}
            {fmtUsd(k.usAylikNet)}. Türkiye kolonu bugün bulunabilen{" "}
            <strong>en iyi</strong> koşulla kuruldu; piyasa ortalaması daha
            kötü.
          </p>
        </div>
      </div>
    </section>
  );
}
