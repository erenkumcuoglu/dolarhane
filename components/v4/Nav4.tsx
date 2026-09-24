import { Ok4 } from "./isaret";

/**
 * V4 nav — karşılamanın üstünde şeffaf, kaydırınca buzlu laciverde dönüyor
 * (`.v4--kaydi`, Hareket4). Alt kenarında sayfanın okunma oranını gösteren
 * kılcal altın çizgi var: uzun bir sayfada "ne kadar kaldı" sorusunun
 * sessiz cevabı.
 */
const BOLUMLER: [string, string][] = [
  ["#v4-hesap", "Hesap"],
  ["#v4-evler", "Evler"],
  ["#v4-guven", "Güven"],
  ["#v4-surec", "Süreç"],
  ["/blog/", "Blog"],
];

/** `kok`: alt sayfalarda ("/") sayfa içi çapaların önüne eklenir. */
export function Nav4({ kok = "", cta }: { kok?: string; cta?: string }) {
  const yol = (h: string) => (h.startsWith("#") ? kok + h : h);
  return (
    <nav className="v4-nav" aria-label="Ana menü">
      <div className="v4-kap v4-nav__in">
        <a className="v4-marka" href={yol("#v4-tepe")} aria-label="Dolarhane — sayfa başı">
          <img src="/logo/svg/09_icon_transparent_gold_gradient.svg" alt="" width={34} height={29} />
          <b>DOLARHANE</b>
        </a>
        <div className="v4-nav__ler">
          {BOLUMLER.map(([h, l]) => (
            <a key={h} href={yol(h)}>
              {l}
            </a>
          ))}
        </div>
        <a className="v4-dugme v4-dugme--kucuk" href={cta ?? yol("#v4-kapanis")}>
          <span>Görüşme alın</span>
          <Ok4 />
        </a>
      </div>
      <span className="v4-nav__ilerleme" aria-hidden="true" />
    </nav>
  );
}
