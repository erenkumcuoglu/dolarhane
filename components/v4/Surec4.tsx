import { Kunye4 } from "./isaret";

/**
 * V4 süreç — dört adım, yatay zaman çizgisi.
 *
 * Metin V3 hunisinin onaylı akışı: mesaj → konuşma → randevu → görüşme.
 * Çizgi görüş alanına girince soldan sağa altınla doluyor; her adımın
 * noktası sırası gelince yanıyor (CSS gecikmesi).
 */
const ADIMLAR = [
  { b: "Bir mesaj gönderin", a: "Formu doldurun. Talebiniz kaydedilir, hiçbir taahhüt doğmaz." },
  { b: "Hedefinizi konuşalım", a: "Bütçe, beklenti ve zaman ufku. Bu aşamada hâlâ taahhüt yok." },
  { b: "Takvimden randevu", a: "Uygun olduğunuz saati kendiniz seçiyorsunuz." },
  { b: "Birebir görüşme", a: "45 dakika, online. Üç gerçek ev, üç gerçek net tablo." },
];

export function Surec4() {
  return (
    <section className="v4-surec" id="v4-surec" aria-labelledby="v4-surec-bas">
      <div className="v4-kap">
        <Kunye4 no="06" ad="Süreç" />
        <div className="v4-surec__bas">
          <h2 className="v4-h2" id="v4-surec-bas" data-r>
            Dört adım. <em>Tamamı online.</em>
          </h2>
          <p className="v4-p" data-r>
            Ofis ziyareti akışın parçası değil; imzalar elektronik. Amerika&apos;ya
            gitmeniz gerekmiyor.
          </p>
        </div>
        <ol className="v4-zaman" data-r>
          <span className="v4-zaman__ray" aria-hidden="true"><i /></span>
          {ADIMLAR.map((x, i) => (
            <li key={x.b} style={{ ["--d" as string]: `${300 + i * 260}ms` }}>
              <span className="v4-zaman__nokta" aria-hidden="true" />
              <span className="v4-zaman__no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="v4-h4">{x.b}</h3>
              <p className="v4-p v4-p--kucuk">{x.a}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
