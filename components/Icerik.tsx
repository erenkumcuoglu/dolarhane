import type { ReactNode } from "react";
import type { Blok } from "@/lib/bloklar";

/**
 * Satır içi biçimleyici — **kalın** ve [metin](adres).
 *
 * Elle yazılmış küçük bir çözümleyici; markdown kütüphanesi eklemektense
 * iki biçimi desteklemek yeterli. Metin React tarafından kaçırıldığı için
 * HTML enjeksiyonu mümkün değil.
 */
function bicimle(metin: string): ReactNode[] {
  const parcalar: ReactNode[] = [];
  const desen = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let son = 0;
  let m: RegExpExecArray | null;
  let i = 0;

  while ((m = desen.exec(metin)) !== null) {
    if (m.index > son) parcalar.push(metin.slice(son, m.index));
    if (m[1] !== undefined) {
      parcalar.push(<strong key={i++}>{m[1]}</strong>);
    } else {
      const ic = m[3]!;
      const disari = /^https?:\/\//.test(ic);
      parcalar.push(
        <a
          key={i++}
          href={ic}
          {...(disari ? { rel: "noopener", target: "_blank" } : {})}
        >
          {m[2]}
        </a>,
      );
    }
    son = m.index + m[0].length;
  }
  if (son < metin.length) parcalar.push(metin.slice(son));
  return parcalar;
}

export function Icerik({ bloklar }: { bloklar: Blok[] }) {
  return (
    <>
      {bloklar.map((b, i) => {
        switch (b.t) {
          case "p":
            return <p key={i}>{bicimle(b.metin)}</p>;

          case "h":
            return b.seviye === 3 ? (
              <h3 key={i}>{b.metin}</h3>
            ) : (
              <h2 key={i}>{b.metin}</h2>
            );

          case "liste": {
            const maddeler = b.maddeler.map((m, j) => (
              <li key={j}>{bicimle(m)}</li>
            ));
            return b.sirali ? (
              <ol key={i}>{maddeler}</ol>
            ) : (
              <ul key={i}>{maddeler}</ul>
            );
          }

          case "tablo":
            /* Gerçek <table>. Geniş tablo kendi kabında yatay kayar —
               sayfa gövdesi asla yana kaymaz. */
            return (
              <figure key={i} className="yazi__tablo">
                  <table>
                    <thead>
                      <tr>
                        {b.basliklar.map((h, j) => (
                          <th key={j} scope="col">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {b.satirlar.map((satir, j) => (
                        <tr key={j} className={b.vurgu?.includes(j) ? "vurgu" : undefined}>
                          {satir.map((h, k) =>
                            k === 0 ? (
                              <th key={k} scope="row">
                                {bicimle(h)}
                              </th>
                            ) : (
                              /* data-etiket: dar ekranda satır yığın karta
                                 dönüşürken hücre kendi sütun başlığını
                                 ::before ile geri üretir (DESIGN.md kural 7). */
                              <td key={k} data-etiket={b.basliklar[k]}>
                                {bicimle(h)}
                              </td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                {b.not ? <figcaption>{bicimle(b.not)}</figcaption> : null}
              </figure>
            );

          case "not":
            return (
              <aside key={i} className="yazi__not">
                {b.baslik ? <b>{b.baslik}</b> : null}
                <p>{bicimle(b.metin)}</p>
              </aside>
            );

          case "sss":
            return (
              <div key={i} className="yazi__sss">
                {b.sorular.map((q, j) => (
                  <details key={j}>
                    <summary>{q.s}</summary>
                    <p>{bicimle(q.c)}</p>
                  </details>
                ))}
              </div>
            );

          case "kaynak":
            return (
              <section key={i} className="yazi__kaynak">
                <h2>Kaynaklar</h2>
                <ol>
                  {b.maddeler.map((k, j) => (
                    <li key={j}>
                      {k.url ? (
                        <a href={k.url} rel="noopener" target="_blank">
                          {k.metin}
                        </a>
                      ) : (
                        k.metin
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            );
        }
      })}
    </>
  );
}
