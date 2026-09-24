import { Kunye4 } from "./isaret";

/**
 * V4 güven mimarisi — "paranız nereye gider?"
 *
 * PRODUCT.md: "para bizim hesabımıza değil bağımsız escrow şirketine
 * gider; tapu doğrudan alıcının adına çıkar. Bu iki gerçek, alıcının
 * havale kararını açan şey." V3'te bu cümle hikâye bölümünün dipnotuydu;
 * burada bir şema: üç hat, her hat soldan sağa bir akış. Dolarhane'nin
 * düğümü parayı taşıyan hatta YOK — şemanın söylediği şey tam olarak bu.
 */
const HATLAR = [
  {
    ad: "Para",
    dugumler: ["Siz", "Bağımsız escrow şirketi", "Satıcı"],
    vurgu: 1,
    not: "Ödemeniz bizim hesabımıza değil, bağımsız escrow hesabına gider. Bağımsız ev denetimi ve tapu araştırması tamamlanıp kapanış yapıldığında satıcıya geçer.",
  },
  {
    ad: "Tapu",
    dugumler: ["Satıcı", "Tapu kaydı", "Sizin adınız"],
    vurgu: 2,
    not: "Tapu doğrudan sizin ya da kuracağınız şirketin adına çıkar. Şahıs mı şirket mi, veraset ve sorumluluk açısından ilk görüşmede konuşulur.",
  },
  {
    ad: "Yönetim",
    dugumler: ["Kiracı", "Dolarhane yönetimi", "Sizin hesabınız"],
    vurgu: 2,
    not: "Tapudan sonra kiracı, tadilat ve iki ülkedeki beyan takibi bizde. Her ay yazılı rapor.",
  },
];

export function Guven4() {
  return (
    <section className="v4-guven" id="v4-guven" aria-labelledby="v4-guven-bas">
      <div className="v4-kap">
        <Kunye4 no="05" ad="Güven" koyu />
        <div className="v4-guven__bas">
          <h2 className="v4-h2 v4-h2--acik" id="v4-guven-bas" data-r>
            Paranız bize <em>gelmez.</em>
          </h2>
          <p className="v4-p v4-p--acik" data-r>
            9.000 km öteden alınan bir evde güven, el sıkışmadan değil yapıdan
            gelir. İşte o yapı, üç hatta.
          </p>
        </div>

        <ol className="v4-hatlar">
          {HATLAR.map((h, i) => (
            <li className="v4-hat" key={h.ad} data-r style={{ ["--d" as string]: `${i * 120}ms` }}>
              <p className="v4-hat__ad">
                <span>{String(i + 1).padStart(2, "0")}</span>
                {h.ad}
              </p>
              <div className="v4-hat__akis">
                {h.dugumler.map((d, j) => (
                  <span key={d} className="v4-hat__parca">
                    <span className={`v4-dugum${j === h.vurgu ? " v4-dugum--vurgu" : ""}`}>{d}</span>
                    {j < h.dugumler.length - 1 ? <span className="v4-hat__cizgi" aria-hidden="true"><i /></span> : null}
                  </span>
                ))}
              </div>
              <p className="v4-hat__not">{h.not}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
