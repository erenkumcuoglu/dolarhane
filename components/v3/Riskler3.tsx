/**
 * V3 riskler ve sorular — sade akordeon (brief §8).
 *
 * Kart çerçevesi kalktı, başlıklar küçüldü, iki yığın aynı kılcal
 * çizgiyi paylaşıyor. Listeler kısaltılmadı: sayfanın omurgası
 * "aleyhimize olan notlar da yazılı" iddiası ve bu bölüm o iddianın
 * kendisi. Akordeon içeriği DOM'da duruyor — brief'in SEO kuralı
 * anlamlı içeriği etkileşim arkasına saklamayı yasaklıyor.
 */
import { RISKLER, SORULAR } from "@/components/detay/riskler";

function Yigin({
  baslik,
  alt,
  ler,
}: {
  baslik: string;
  alt: string;
  ler: [string, string][];
}) {
  return (
    <div className="v3-sss">
      <h3 className="v3-h3">{baslik}</h3>
      <p className="v3-bas__yan">{alt}</p>
      {ler.map(([s, c]) => (
        <details className="v3-kat" key={s}>
          <summary>
            <span>{s}</span>
            <i aria-hidden="true" />
          </summary>
          <p>{c}</p>
        </details>
      ))}
    </div>
  );
}

export function Riskler3() {
  return (
    <section className="v3-sect v3-riskler" id="v3-riskler">
      <div className="v3-kap">
        <div className="v3-bas">
          <h2 className="v3-h2">Ters gidebilecek şeyler.</h2>
          <p className="v3-bas__yan">
            Bu bir nakit akışı yatırımı ve garantisi yok. Aşağıdakiler
            satış görüşmesinde de aynen söyleniyor.
          </p>
        </div>

        <div className="v3-riskler__in">
          <Yigin
            baslik="Riskler"
            alt={`${RISKLER.length} başlık, dokununca açılıyor.`}
            ler={RISKLER}
          />
          <Yigin
            baslik="Sorulması gereken sorular"
            alt={`${SORULAR.length} soru, aynı şekilde.`}
            ler={SORULAR}
          />
        </div>
      </div>
    </section>
  );
}
