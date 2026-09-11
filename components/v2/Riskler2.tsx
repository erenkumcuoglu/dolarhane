/**
 * v2 riskler ve sorular — iki kolon akordeon.
 *
 * İçerik detay/riskler.tsx ile aynı kaynağı paylaşıyor. Bu bölüm referans
 * tasarımda YOKTU; eklenmesi zorunlu, çünkü sayfanın omurgası "aleyhimize
 * olan notlar da yazılı" iddiası. O iddia bu bölüm olmadan kurulamaz.
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
    <div className="v2-sss">
      <div className="v2-sect__bas v2-sect__bas--dik">
        <h3 className="v2-h3">{baslik}</h3>
        <p className="v2-xs v2-sect__yan">{alt}</p>
      </div>
      {ler.map(([s, c]) => (
        <details className="v2-kat" key={s}>
          <summary>
            <span>{s}</span>
            <i aria-hidden="true" />
          </summary>
          <p className="v2-sm">{c}</p>
        </details>
      ))}
    </div>
  );
}

export function Riskler2() {
  return (
    <section className="v2-sect v2-riskler" id="v2-riskler">
      <div className="v2-kap v2-riskler__in">
        <Yigin
          baslik="Ters gidebilecek şeyler."
          alt={`${RISKLER.length} risk, başlığa dokununca açılıyor.`}
          ler={RISKLER}
        />
        <Yigin
          baslik="Sorulması gereken sorular."
          alt={`${SORULAR.length} soru, aynı şekilde.`}
          ler={SORULAR}
        />
      </div>
    </section>
  );
}
