import { CANLI, KANONIK, fmtOran, fmtYuzde } from "@/lib/finance";

/**
 * KANIT BANDI — dört rakam, manşetin kanıtı.
 * Mobilde 2×2; oran çifti hero'da da göründüğü için burada tekrar
 * etmiyor, mobilde yalnız net getiri ve vade gösteriliyor.
 */
export function Band() {
  const u = CANLI.us;
  const t = CANLI.tr;
  const net = CANLI.net;

  const hepsi = [
    { v: fmtOran(u.oran), k: "kira / taksit · ABD", ilk: true },
    { v: fmtOran(t.oran), k: "Türkiye'de aynı ev", ilk: true, sessiz: true },
    { v: fmtYuzde(net.netGetiri * 100, 2), k: "net getiri · brüt değil", amber: true },
    { v: `${KANONIK.vadeYil} yıl`, k: "sonunda borçsuz ev" },
  ];

  return (
    <section className="band" aria-label="Özet rakamlar">
      <div className="kap band__in">
        {hepsi.map((x) => (
          <div className={`band__h${x.ilk ? " band__h--hero" : ""}`} key={x.k}>
            <p
              className={`band__v num${x.amber ? " amber-t" : ""}${
                x.sessiz ? " band__v--sessiz" : ""
              }`}
            >
              {x.v}
            </p>
            <p className="xs">{x.k}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
