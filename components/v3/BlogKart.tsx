/**
 * BLOG KARTI — kapak + özet.
 *
 * Yazıların fotoğrafı yok ve uydurulmayacak (kural 9). Kapak bu yüzden
 * üretilmiş: lacivert tuval, üstte altın kategori künyesi ve ikonu,
 * altında yazının başlığı dizili. Başlık YALNIZ kapakta geçiyor —
 * referans sitelerdeki gibi kapakta ve gövdede iki kez yazılmıyor.
 *
 * Kartın tamamı tek bağlantı; başlık kartın içinde gerçek bir h3, yani
 * liste ekran okuyucuda da başlıklarla geziliyor.
 */
import Link from "next/link";
import { KUMELER, tarihGosterilir, yaziYolu, type Yazi } from "@/lib/icerik";
import { KUME_IKONU } from "./kumeIkon";

const tarihTR = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function BlogKart({ yazi }: { yazi: Yazi }) {
  const kume = KUMELER[yazi.kume];
  const Ikon = KUME_IKONU[yazi.kume];

  return (
    <article className="v3-bk">
      <Link className="v3-bk__ic" href={yaziYolu(yazi)}>
        <span className="v3-bk__kapak">
          <span className="v3-bk__ust">
            <span className="v3-bk__ikon" aria-hidden="true">
              <Ikon />
            </span>
            <i>{kume.ad}</i>
          </span>
          <h3 className="v3-bk__baslik">{yazi.baslik}</h3>
        </span>

        <span className="v3-bk__gov">
          <span className="v3-bk__oz">{yazi.ozet}</span>
          <span className="v3-bk__alt">
            <span className="v3-bk__oku">Oku</span>
            {/* Tarih yalnız tazelik kademesi izin veriyorsa
                (VERI-TAKVIMI §3.5): evergreen içerikte tarih yok. */}
            {tarihGosterilir(yazi) ? (
              <time dateTime={yazi.guncelleme}>
                {tarihTR.format(new Date(yazi.guncelleme as string))}
              </time>
            ) : null}
          </span>
        </span>
      </Link>
    </article>
  );
}
