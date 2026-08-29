const RISKLER: [string, string][] = [
  [
    "Kaldıraç iki yönlü çalışır",
    "Kredili alımda nakit akışı incedir. Boşluk uzarsa ya da büyük bir onarım çıkarsa o ay taksiti siz ödersiniz. Hesap sayfasında vadeyi kısaltın; oran 1'in altına düştüğünde tablo bunu size kendisi söyler.",
  ],
  [
    "Bu bir nakit akışı yatırımı, değer artışı yatırımı değil",
    "Orta kuşak şehirlerde fiyat artışı sahil metropollerinin gerisinde kalır. Eviniz her ay kira üretir; birkaç yılda katlanmasını beklemeyin. Katlanacağını söyleyen varsa ondan uzak durun.",
  ],
  [
    "Likit değildir",
    "Satış kararı verdiğinizde nakde dönmek tipik olarak 1–3 ay sürer ve satış masrafı yaklaşık %6–8'dir. Yarın lazım olacak parayla girilecek bir yatırım değil.",
  ],
  [
    "Kur her iki yöne de işler",
    "Geliriniz dolar; bu bugünkü tabloda avantaj. Ancak TL dolara karşı değer kazanırsa TL cinsinden geliriniz azalır. Dolar geliri bir sigortadır, tek yönlü bir kazanç garantisi değildir.",
  ],
  [
    "Eski yapı stoku, gerçek bakım gideri",
    "Bu bantta evlerin çoğu 1940–1980 arası. Çatı, ısıtma sistemi ve tesisat 5.000–15.000 $'lık kalemler olarak karşınıza çıkabilir. Hesaptaki %8 bakım payı bunun için ayrılmıştır ama tek bir yılda aşılabilir.",
  ],
  [
    "Kiracı riski gerçektir",
    "Faaliyet bölgelerimizi tahliye süresi ve ev sahibi hakları güçlü olan eyaletlerden seçiyoruz, ama en iyi durumda bile kötü bir kiracı size birkaç aylık gelir ve avukat masrafı kaybettirebilir.",
  ],
  [
    "İki ülkede beyan yükümlülüğü",
    "Hem ABD'de hem Türkiye'de beyan vermeniz gerekir. Bu işi sizin adınıza biz yürütüyoruz, ancak yükümlülük hukuken size aittir ve süreklidir.",
  ],
];

const SORULAR: [string, string][] = [
  [
    "Vefat edersem ailem ne olacak?",
    "Kimsenin konuşmadığı en kritik konu. ABD'de yerleşik olmayan yabancıların veraset vergisi istisnası yalnızca 60.000 dolar. Evi doğrudan kendi adınıza alırsanız vefatınızda mirasçılarınız bu eşiğin üstündeki kısım için ciddi bir vergiyle karşılaşabilir. Doğru yapı — LLC ya da uygun bir mülkiyet düzeni — bunu baştan çözer.",
  ],
  [
    "Amerika'ya gitmem gerekiyor mu?",
    "Hayır. Vergi numarası, teklif, ev denetimi, escrow ve tapu kapanışı dahil süreç tamamen uzaktan yürüyor; imzalar elektronik. Yine de gelip görmek isteyenler için yılda birkaç kez portföy gezisi düzenliyoruz — tavsiye ederiz, mecbur değilsiniz.",
  ],
  [
    "Yabancı olarak gerçekten kredi alabilir miyim?",
    "Evet. Bu programlar Türkiye'deki gelirinize, vergi beyanınıza ya da ABD kredi geçmişinize bakmıyor — evin kendi kira gelirinin taksiti karşılayıp karşılamadığına bakıyor. Peşinat %25–30, faiz ABD vatandaşlarına göre yaklaşık 0,5–0,75 puan yüksek. Kredili ve peşin senaryoyu aynı dosyada yan yana görüyorsunuz.",
  ],
  [
    "Kiracı ödemezse ne oluyor?",
    "Önce tahsilat takibi ve ödeme planı devreye giriyor; çözülmezse yasal tahliye sürecini biz yürütüyoruz. Faaliyet bölgelerimizi seçerken sadece getiriye değil, tahliye süresinin ne kadar sürdüğüne ve ev sahibi haklarının ne kadar net korunduğuna da bakıyoruz. Hesaptaki %8 boşluk payı da tam olarak bu ihtimal için ayrılmış durumda.",
  ],
  [
    "Parayı nasıl göndereceğim, Türkiye'de beyan gerekir mi?",
    "Transfer bankanız üzerinden bağımsız bir escrow şirketinin hesabına yapılır — bizim hesabımıza değil. Türkiye'de yerleşik olduğunuz için dünya genelindeki geliriniz beyana tabidir; ABD'de elde ettiğiniz kira gelirini Türkiye'de beyan eder, çifte vergilendirmeyi önleme anlaşması kapsamında ABD'de ödediğiniz vergiyi mahsup edersiniz. Bu beyanı sizin adınıza biz hazırlıyoruz.",
  ],
];

function Yigin({
  baslik,
  alt,
  ler,
}: {
  baslik: string;
  alt: string;
  ler: [string, string][];
}) {
  return (
    <div>
      <h3 className="h2">{baslik}</h3>
      <p className="xs sss__alt">{alt}</p>
      <div className="sss">
        {ler.map(([s, c]) => (
          <details className="kart sss__h" key={s}>
            <summary>
              <span>{s}</span>
              <i aria-hidden="true" />
            </summary>
            <p className="sm">{c}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

export function Riskler() {
  return (
    <div className="pano pano--iki">
      <Yigin
        baslik="Ters gidebilecek şeyler."
        alt={`${RISKLER.length} risk, başlığa dokununca açılıyor.`}
        ler={RISKLER}
      />
      <Yigin
        baslik="Sorulması gereken sorular."
        alt={`${SORULAR.length} soru, aynı şekilde.`}
        ler={SORULAR}
      />
    </div>
  );
}
