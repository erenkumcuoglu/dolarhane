import { Isik4 } from "./Isik4";
import { Kunye4 } from "./isaret";

/**
 * V4 tez + "Neden Amerika?"
 *
 * Üst yarı sayfanın sesini tek cümleyle ilan ediyor (PRODUCT.md "Ses":
 * hesap konuşur, satış konuşmaz). Kart ızgarası YOK: alt yarı editoryal
 * — solda yapışkan başlık, sağda kılcal çizgilerle ayrılmış üç satır.
 * Bölümde tek bir rakam yok; hesap bir sonraki bölümde.
 */
const ILKELER = [
  {
    b: "Kira sözleşmesi bir hak, temenni değil.",
    a: "Ev sahibinin hakkının fiilen işlediği eyaletlerde alım yapıyoruz. Tahliye süresi öngörülebilir, süreç yazılı.",
  },
  {
    b: "Gelir dolar, gider dolar.",
    a: "Kur riski taşımıyorsunuz; kurun içindesiniz. Kira dolar gelir, giderler dolar çıkar.",
  },
  {
    b: "Ev, ev olarak duruyor.",
    a: "Sıradan bir orta kuşak mahallesinde garajlı, bahçeli, kiracısı olan müstakil bir ev. Egzotik bir enstrüman değil.",
  },
];

export function Tez4() {
  return (
    <section className="v4-tez" id="v4-tez">
      <div className="v4-kap">
        <Kunye4 no="01" ad="Tez" />
        <Isik4
          metin="Hesap konuşur, satış konuşmaz. Sayfadaki her rakam varsayımıyla birlikte yazılı — aleyhimize olan satırlar dahil."
          vurgu={["aleyhimize"]}
        />

        <div className="v4-neden">
          <div className="v4-neden__bas">
            <h2 className="v4-h2" data-r>
              Neden <em>Amerika?</em>
            </h2>
            <p className="v4-p" data-r>
              Mesele yalnızca fiyat değil. Mülkün, sözleşmenin ve paranın aynı
              dilde konuştuğu bir yer.
            </p>
          </div>
          <ol className="v4-neden__ler">
            {ILKELER.map((x, i) => (
              <li key={x.b} data-r style={{ ["--d" as string]: `${i * 80}ms` }}>
                <span className="v4-neden__no" aria-hidden="true">
                  {["i.", "ii.", "iii."][i]}
                </span>
                <h3 className="v4-h3">{x.b}</h3>
                <p className="v4-p">{x.a}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
