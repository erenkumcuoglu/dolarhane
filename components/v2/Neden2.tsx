/**
 * v2 "Neden Amerika" — referans tasarımın numaralı dört kartı + sağda
 * fotoğraflı alıntı paneli.
 *
 * İçerik anlati.tsx'teki GEREKCELER ile aynı; bu bölümde tek bir rakam yok.
 * Referanstaki panel fotoğrafı palmiyeli bir metropol siluetiydi — marka
 * kitinin kendi §06 kuralı bunu reddediyor ("aşırı lüks, finans influencer
 * estetiği"), o yüzden panelde orta kuşak ev fotoğrafı var ve "temsilî"
 * rozeti taşıyor. Şehir adı geçmiyor (kural 11).
 */
import { IkonDolar, IkonYuzde, IkonEv, IkonTapu } from "./ikon";

const GEREKCELER = [
  {
    no: "01",
    I: IkonTapu,
    b: "Kira sözleşmesi bir hak",
    a: "Ev sahibinin hakkının fiilen işlediği eyaletlerde alım yapıyoruz. Tahliye süresi öngörülebilir, süreç yazılı.",
  },
  {
    no: "02",
    I: IkonDolar,
    b: "Gelir dolar, gider dolar",
    a: "Kur riski taşımıyorsunuz; kurun içindesiniz. Kira dolar gelir, giderler dolar çıkar.",
  },
  {
    no: "03",
    I: IkonYuzde,
    /* Eski gerekçe "Otuz yıl sabit faiz" idi — kredi özelliği, kaldıraç
       kamuya açık ürün değil (iş planı §11). Yerine §10'un peşin alım
       gerekçesi. */
    b: "İlk aydan kira",
    a: "Evler kiracısıyla birlikte alınıyor. Kiracı arama, boş geçen aylar ve ilk yerleştirme masrafı yok.",
  },
  {
    no: "04",
    I: IkonEv,
    b: "Ev, ev olarak duruyor",
    a: "Sıradan bir orta kuşak mahallesinde, garajlı, bahçeli, kiracısı olan bir müstakil ev. Egzotik bir enstrüman değil.",
  },
];

export function Neden2() {
  return (
    <section className="v2-sect v2-neden" id="v2-neden">
      <div className="v2-neden__foto">
        <img
          src="/ev/ev-01.jpg"
          width={760}
          height={475}
          loading="lazy"
          alt="Temsilî fotoğraf: orta kuşakta ahşap cepheli müstakil bir ev"
        />
        <span className="v2-neden__perde" aria-hidden="true" />
        <span className="v2-temsili">temsilî</span>
        <p className="v2-elyazi v2-neden__alinti">
          Size aldığımız evlerin
          <br />
          aynısından kendimiz de alıyoruz.
        </p>
      </div>

      <div className="v2-kap v2-neden__in">
        <div className="v2-sect__bas">
          <h2 className="v2-h2">Neden Amerika.</h2>
          <p className="v2-xs v2-sect__yan">
            Rakamsız dört gerekçe — hesap yukarıdaki bölümde.
          </p>
        </div>

        <ul className="v2-neden__ler">
          {GEREKCELER.map((g) => (
            <li className="v2-kart v2-neden__h" key={g.no}>
              <p className="v2-neden__no v2-num">{g.no}</p>
              <span className="v2-ikon v2-ikon--kutu" aria-hidden="true">
                <g.I />
              </span>
              <h3 className="v2-h4">{g.b}</h3>
              <p className="v2-sm">{g.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
