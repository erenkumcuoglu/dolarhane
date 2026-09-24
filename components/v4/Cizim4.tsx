/**
 * Evin şematik cephesi — hesabın görsel karşılığı.
 *
 * Stok fotoğraf iddia taşıyan yere konmaz (DESIGN.md kural 16); bu yüzden
 * hesabın yanındaki görsel bir FOTOĞRAF DEĞİL, bir çizim: mimari cephe
 * dilinde, ince hat, ölçü çizgileriyle. Para bu çizimin üzerinde akıyor:
 *   1  kira soldan kapıya giriyor (dolu altın hat)
 *   2–4 giderler çatıdan çıkıyor (kesik hat, yukarı ok)
 *   5  kalan, evin altındaki ölçü çizgisi: aylık eline geçen
 *
 * Ev, fiyatla birlikte hafifçe büyüyüp küçülüyor (0,84–1,12). Etiketlerin
 * çıkış noktaları aynı ölçekle hesaplanıyor, hatlar eve yapışık kalıyor.
 * Telefonda metin etiketleri gizlenir, yerlerinde numaralı işaretler kalır
 * — defterdeki satırlar aynı numaraları taşıyor.
 */
import { fmtUsd } from "@/lib/finance";

export type Anahtar = "kira" | "vergi" | "sigorta" | "yonetim" | "net";

const X0 = 400;
const Y0 = 370;

export function Cizim4({
  olcek,
  kira,
  vergi,
  sigorta,
  yonetim,
  net,
  odak,
}: {
  olcek: number;
  kira: number;
  vergi: number;
  sigorta: number;
  yonetim: number;
  net: number;
  odak: Anahtar | null;
}) {
  const s = olcek;
  const p = (x: number, y: number) => [X0 + (x - X0) * s, Y0 + (y - Y0) * s] as const;
  const [kx, ky] = p(352, 346);
  const [v1x, v1y] = p(300, 185);
  const [v2x, v2y] = p(375, 130);
  const [v3x, v3y] = p(450, 185);
  const [solx] = p(250, 0);
  const [sagx] = p(640, 0);
  const sinif = (a: Anahtar) => `c-a c-a--${a}${odak && odak !== a ? " c-a--sonuk" : ""}${odak === a ? " c-a--odak" : ""}`;

  return (
    <svg
      className="v4-cizim"
      viewBox="0 0 720 470"
      role="img"
      aria-label={`Şematik çizim: aylık kira ${fmtUsd(kira)} eve giriyor; emlak vergisi ${fmtUsd(vergi)}, sigorta ${fmtUsd(sigorta)} ve mülk yönetimi ${fmtUsd(yonetim)} çıkıyor; kalan ${fmtUsd(net)}.`}
    >
      <defs>
        <marker id="c-ok-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M1 1 9 5 1 9" fill="none" stroke="#C9A45C" strokeWidth="1.4" />
        </marker>
        <marker id="c-ok-k" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M1 1 9 5 1 9" fill="none" stroke="#A9B4BF" strokeWidth="1.4" />
        </marker>
        <pattern id="c-tarama" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" className="c-tarama" />
        </pattern>
      </defs>

      {/* ızgara — kâğıt hissi */}
      <g className="c-izgara" aria-hidden="true">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="470" />
        ))}
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60 + 10} x2="720" y2={i * 60 + 10} />
        ))}
      </g>

      {/* zemin */}
      <line x1="30" y1={Y0} x2="700" y2={Y0} className="c-zemin" />
      <rect x="30" y={Y0} width="670" height="12" fill="url(#c-tarama)" />

      {/* ev */}
      <g className="c-ev" style={{ transform: `translate(${X0}px, ${Y0}px) scale(${s}) translate(${-X0}px, ${-Y0}px)` }}>
        {/* garaj */}
        <path d="M500 370V286H636V370" />
        <path d="M492 288 520 262H628L646 288" />
        <rect x="520" y="302" width="100" height="68" />
        {[316, 330, 344, 358].map((y) => (
          <line key={y} x1="520" y1={y} x2="620" y2={y} className="c-ince" />
        ))}
        {/* ana gövde */}
        <path d="M250 370V236H500V370" />
        <path d="M228 240 375 128 522 240" className="c-cati" />
        <path d="M244 240 375 140 506 240" className="c-ince" />
        {/* baca */}
        <path d="M442 179V150H464V196" />
        <line x1="438" y1="150" x2="468" y2="150" />
        {/* çatı penceresi — amblemin dört bölmeli penceresi */}
        <rect x="363" y="178" width="24" height="24" />
        <path d="M375 178v24M363 190h24" className="c-ince" />
        {/* pencereler */}
        {[275, 425].map((x) => (
          <g key={x}>
            <rect x={x} y="266" width="50" height="50" />
            <path d={`M${x + 25} 266v50M${x} 291h50`} className="c-ince" />
            <line x1={x - 6} y1="322" x2={x + 56} y2="322" />
          </g>
        ))}
        {/* kapı */}
        <rect x="355" y="296" width="40" height="74" />
        <rect x="363" y="304" width="24" height="20" className="c-ince" />
        <circle cx="387" cy="338" r="2" className="c-dolu" />
        <path d="M343 370h64" />
        {/* çatı altı kılcal çizgi */}
        <line x1="250" y1="250" x2="500" y2="250" className="c-ince" />
      </g>

      {/* 1 · kira — giriş */}
      <g className={sinif("kira")}>
        <line x1="36" y1={ky} x2={kx - 6} y2={ky} className="c-akis" markerEnd="url(#c-ok-a)" />
        <text x="36" y={ky - 34} className="c-et c-et--ad">Kira</text>
        <text x="36" y={ky - 12} className="c-et c-et--deger">+{fmtUsd(kira)}</text>
        <g className="c-no" transform={`translate(52 ${ky - 30})`}>
          <circle r="17" />
          <text y="7">1</text>
        </g>
      </g>

      {/* 2–4 · giderler — çıkış */}
      {(
        [
          ["vergi", "Emlak vergisi", vergi, v1x, v1y, 150, 2],
          ["sigorta", "Sigorta", sigorta, v2x, v2y, 375, 3],
          ["yonetim", "Mülk yönetimi", yonetim, v3x, v3y, 600, 4],
        ] as const
      ).map(([a, ad, t, x, y, lx, no]) => (
        <g className={sinif(a)} key={a}>
          <path d={`M${x} ${y - 4}V96H${lx}V70`} className="c-cikis" markerEnd="url(#c-ok-k)" />
          <circle cx={x} cy={y} r="3" className="c-dolu" />
          <text x={lx} y="30" textAnchor="middle" className="c-et c-et--ad">{ad}</text>
          <text x={lx} y="54" textAnchor="middle" className="c-et c-et--deger">−{fmtUsd(t)}</text>
          <g className="c-no" transform={`translate(${lx} 40)`}>
            <circle r="17" />
            <text y="7">{no}</text>
          </g>
        </g>
      ))}

      {/* 5 · kalan — ölçü çizgisi */}
      <g className={sinif("net")}>
        <line x1={solx} y1="408" x2={sagx} y2="408" className="c-olcu" />
        <line x1={solx} y1="398" x2={solx} y2="418" className="c-olcu" />
        <line x1={sagx} y1="398" x2={sagx} y2="418" className="c-olcu" />
        <text x={(solx + sagx) / 2} y="446" textAnchor="middle" className="c-et c-et--net">
          = aylık eline geçen {fmtUsd(net)}
        </text>
        <g className="c-no" transform={`translate(${(solx + sagx) / 2} 440)`}>
          <circle r="17" />
          <text y="7">5</text>
        </g>
      </g>

      <text x="700" y="462" textAnchor="end" className="c-kose">şematik · ölçeksiz</text>
    </svg>
  );
}

/** Türkiye karşılaştırmasındaki küçük ev işareti. `oran` < 1 ise kırpılır. */
export function EvIsaret({ oran = 1, id, tur }: { oran?: number; id: string; tur: "tr" | "us" }) {
  const govde = (
    <>
      <path d="M6 26 30 7l24 19" />
      <path d="M11 22v28h38V22" />
      <rect x="26" y="34" width="8" height="16" />
    </>
  );
  return (
    <svg className={`v4-evis v4-evis--${tur}`} viewBox="0 0 60 56" aria-hidden="true">
      {oran < 1 ? (
        <>
          <defs>
            <clipPath id={id}>
              <rect x="0" y="0" width={60 * oran} height="56" />
            </clipPath>
          </defs>
          <g className="v4-evis__hayal">{govde}</g>
          <g clipPath={`url(#${id})`} className="v4-evis__dolu">
            <path d="M11 22 30 7l19 15v28H11z" className="v4-evis__zemin" />
            {govde}
          </g>
        </>
      ) : (
        <g className="v4-evis__dolu">
          <path d="M11 22 30 7l19 15v28H11z" className="v4-evis__zemin" />
          {govde}
        </g>
      )}
    </svg>
  );
}
