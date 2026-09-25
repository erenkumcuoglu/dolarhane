import { OkumaKabuk4, OkumaBas4 } from "@/components/v4/OkumaKabuk4";
import { Ok4 } from "@/components/v4/isaret";
import "./v2.css";
import "./v4.css";
import "./v4-okuma.css";

export const metadata = { title: "Sayfa bulunamadı — Dolarhane" };

/* V4 okuma kabuğu (2026-09): ana sayfayla aynı nav ve alt şerit. Eski
   "#v2-form" çapası V4'te yok; çağrı V4 formuna gidiyor. */
export default function Bulunamadi() {
  return (
    <OkumaKabuk4>
      <main id="icerik">
        <OkumaBas4
          ust={<p className="v4-okbas__404">404</p>}
          baslik={
            <>
              Bu sayfa <em>yok.</em>
            </>
          }
          oz="Bağlantı eski olabilir ya da adres yanlış yazılmış olabilir. Hesap aleti ve görüşme formu ana sayfada duruyor."
        >
          <div className="v4-okbas__eylem">
            <a className="v4-dugme" href="/">
              <span>Ana sayfaya dön</span>
              <Ok4 />
            </a>
            <a className="v4-baglanti v4-baglanti--acik" href="/#v4-kapanis">
              Doğrudan mesaj gönderin
            </a>
          </div>
        </OkumaBas4>
      </main>
    </OkumaKabuk4>
  );
}
