/**
 * V3 "Neden Amerika?" — kısa editoryal bölüm (brief §5).
 *
 * Dört numaralı karttan ÜÇ ilkeye indi, kart kutuları kalktı. Çıkarılan
 * madde "İlk aydan kira" idi — karşılama satırında ve hesapta zaten iki
 * kez geçiyor.
 *
 * Numara kademesi (01/02/03) yerini amblemin dilinden türetilmiş ikon
 * karolarına bıraktı (components/v3/ikon3.tsx): lacivert yuvarlak kare,
 * altın işaret. Dizilim dikey listeden yatay üçlüye geçti.
 *
 * Bölümde tek bir rakam yok; hesap yukarıda.
 */
import { IkonMuhur, IkonSikke, IkonEv3 } from "./ikon3";

const ILKELER = [
  {
    I: IkonMuhur,
    b: "Kira sözleşmesi bir hak",
    a: "Ev sahibinin hakkının fiilen işlediği eyaletlerde alım yapıyoruz. Tahliye süresi öngörülebilir, süreç yazılı.",
  },
  {
    I: IkonSikke,
    b: "Gelir dolar, gider dolar",
    a: "Kur riski taşımıyorsunuz; kurun içindesiniz. Kira dolar gelir, giderler dolar çıkar.",
  },
  {
    I: IkonEv3,
    b: "Ev, ev olarak duruyor",
    a: "Sıradan bir orta kuşak mahallesinde, garajlı, bahçeli, kiracısı olan bir müstakil ev. Egzotik bir enstrüman değil.",
  },
];

export function Neden3() {
  return (
    <section className="v3-sect v3-neden" id="v3-neden">
      <div className="v3-kap">
        <h2 className="v3-h2 v3-neden__bas">Neden Amerika?</h2>

        <ul className="v3-neden__ler">
          {ILKELER.map((g) => (
            <li key={g.b}>
              <span className="v3-karo" aria-hidden="true">
                <g.I />
              </span>
              <h3 className="v3-h3">{g.b}</h3>
              <p className="v3-neden__a">{g.a}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
