/**
 * V3 "Nasıl ilerliyor?" — dört kademeli huni (brief §6).
 *
 * Brief dört jenerik kart yerine, keşiften temasa GÖRÜNÜR biçimde
 * daralan tek bir odak görsel istiyor. Kademeler daralarak ve tonu
 * koyulaşarak iniyor; bölümün başka görseli yok.
 *
 * Kademelerin METNİ brief'inki değil, sayfanın kendi onaylı süreci:
 * mesaj → aynı gün konuşma → kendi seçtiğiniz randevu → birebir Zoom.
 * Brief'in "Ev sahibi olun" kademesi kapanış/sahiplik vadediyor;
 * operasyon bugün o adımı taşımıyor, o yüzden yazılmadı.
 *
 * Numara yerine amblem dilinden ikon karoları; zaman etiketleri
 * ("Bugün", "Aynı gün"…) kaldırıldı — huni bir takvim değil, bir sıra.
 * Son kademe lacivert olduğu için karo orada terse dönüyor: altın
 * zemin, lacivert işaret.
 *
 * v2'deki şeffaflık tablosu bu bölümden ÇIKTI: satırların hepsi
 * "örnek · gerçek veri değil" etiketliydi, yani uydurma metrik.
 */
import { IkonZarf, IkonKonusma, IkonTakvim, IkonGorusme } from "./ikon3";

const ADIMLAR = [
  {
    I: IkonZarf,
    b: "Bir mesaj gönderin",
    a: "Formu doldurun. Talebiniz kaydedilir, hiçbir taahhüt doğmaz.",
  },
  {
    I: IkonKonusma,
    b: "Hedefinizi konuşalım",
    a: "Bütçe, beklenti ve zaman ufku. Bu aşamada hâlâ taahhüt yok.",
  },
  {
    I: IkonTakvim,
    b: "Takvimden randevu",
    a: "Uygun olduğunuz slotu kendiniz seçiyorsunuz.",
  },
  {
    I: IkonGorusme,
    b: "Birebir görüşme",
    a: "45 dakika. Üç gerçek ev, üç gerçek net tablo.",
  },
];

export function Huni3() {
  return (
    <section className="v3-sect v3-surec" id="v3-surec">
      <div className="v3-kap">
        <div className="v3-bas v3-bas--orta">
          <h2 className="v3-h2">Nasıl ilerliyor?</h2>
          <p className="v3-bas__yan">
            Dört adım, tamamı online. Her şeyi uzaktan yapabiliyoruz.
          </p>
        </div>

        <ol className="v3-huni">
          {ADIMLAR.map((a, i) => (
            <li className={`v3-huni__k v3-huni__k--${i + 1}`} key={a.b}>
              <span className="v3-karo" aria-hidden="true">
                <a.I />
              </span>
              <span className="v3-huni__gov">
                <b>{a.b}</b>
                <i>{a.a}</i>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
