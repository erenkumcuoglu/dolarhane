import { NavYazi } from "@/components/yazi/NavYazi";
import { DipYazi } from "@/components/yazi/DipYazi";
import "./v2.css";

export const metadata = { title: "Sayfa bulunamadı — Dolarhane" };

export default function Bulunamadi() {
  return (
    <div className="v2">
      <NavYazi />
      <main id="icerik" className="sect yok">
        <div className="kap yok__in">
          <p className="rozet">404</p>
          <h1 className="h2 yok__h">Bu sayfa yok.</h1>
          <p className="lede yok__lede">
            Bağlantı eski olabilir ya da adres yanlış yazılmış olabilir.
            Hesabın tamamı ve görüşme formu ana sayfada duruyor.
          </p>
          <div className="yok__eylem">
            <a className="btn btn--lg" href="/">
              Ana sayfaya dön
            </a>
            <a className="btn btn--sessiz" href="/#v2-form">
              Doğrudan mesaj gönderin
            </a>
          </div>
        </div>
      </main>
      <DipYazi />
    </div>
  );
}
