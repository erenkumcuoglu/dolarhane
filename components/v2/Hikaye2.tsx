/**
 * v2 hikâye şeridi — referans tasarımdaki "Bu işe müşteri olarak başladık"
 * bandı. Metin nasil.tsx'teki hikâye bloğuyla aynı; üç güvence Gorusme.tsx'in
 * GUVENCELER listesinden geliyor.
 *
 * Soldaki yuva artık boş değil: YER TUTUCU olarak lisanslı temsilî ev
 * fotoğrafı duruyor, lacivert perde altında ve "temsilî" rozetiyle. Referansta
 * burası bir portre; stok portre KONMADI — kurucu yuvasındaki yabancı yüz
 * "bunlar bizim ekibimiz" demek olur, yani uydurma kanıt. Gerçek ekip
 * fotoğrafı gelince `FOTO` sabiti ve rozet değişir, başka yer değişmez.
 */
import { IkonKilit, IkonTapu, IkonKisiler } from "./ikon";

const GUVENCELER = [
  {
    I: IkonKilit,
    b: "Paranız bize gelmiyor",
    a: "Ödemeler bağımsız bir escrow şirketinin hesabına gider; bizim hesabımıza değil.",
  },
  {
    I: IkonTapu,
    b: "Tapu sizin adınıza",
    a: "Mülkiyet doğrudan sizin adınıza çıkar. Yapı ve mülkiyet düzeni görüşmede yazılı olarak konuşulur.",
  },
  {
    I: IkonKisiler,
    b: "Yerel profesyoneller",
    a: "Ev denetimi, escrow, kapanış ve mülk yönetimi ABD'deki yerel ekiplerle yürütülür.",
  },
];

export function Hikaye2() {
  return (
    <section className="v2-hikaye">
      <div className="v2-hikaye__gorsel">
        <img
          src="/ev/hero.jpg"
          width={860}
          height={1075}
          loading="lazy"
          alt="Temsilî fotoğraf: orta kuşakta bahçeli müstakil bir evin girişi"
        />
        <span className="v2-hikaye__perde" aria-hidden="true" />
        <span className="v2-temsili">temsilî · yer tutucu</span>
        <p className="v2-elyazi v2-hikaye__el">
          Önce kendimiz
          <br />
          aldık.
        </p>
      </div>

      <div className="v2-hikaye__in">
        <div className="v2-hikaye__soz">
          <h2 className="v2-h2">Bu işe müşteri olarak başladık.</h2>
          <p className="v2-sm">
            Birkaç yıl önce varlığımızı Amerika&apos;ya taşıdık ve elimizde
            hiçbir rehber yoktu. Hangi eyalette ev sahibinin hakkı korunuyor,
            hangi kredi yabancıya açık, tapu kimin adına çıkmalı — hepsini hata
            yaparak öğrendik.
          </p>
          <p className="v2-vurus">
            Size aldığımız evlerin aynısından kendimiz de alıyoruz. Kötü bir
            mahalleyi size satmak, önce kendi tablomuzu bozar.
          </p>
        </div>

        <ul className="v2-hikaye__ler">
          {GUVENCELER.map((g) => (
            <li key={g.b}>
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
