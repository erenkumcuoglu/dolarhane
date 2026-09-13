import type { Blok } from "@/lib/bloklar";

/**
 * Rakip adı geçmiyor — TTK 55 riski bir yana, tarafsız kontrol listesi
 * suçlamadan daha etkili (EV-KALITE-CERCEVESI §0.1).
 */
export const dolandiricilikNasilAnlasilir: Blok[] = [
  {
    t: "p",
    metin:
      "Yurt dışından ev alımında dolandırıcılık genellikle sahte bir ev " +
      "üzerinden değil, **gerçek bir evin etrafında kurulan yanlış bir " +
      "süreç** üzerinden yürüyor. Ev var, fiyat makul, fotoğraflar gerçek — " +
      "bozuk olan para ve belge akışı.",
  },
  {
    t: "p",
    metin:
      "Aşağıdaki maddeler bir suçlama listesi değil, bir kontrol listesi. " +
      "Kimden alırsanız alın uygulayın; **bize de uygulayın.**",
  },

  { t: "h", metin: "Durdurucu sinyaller" },
  {
    t: "p",
    metin:
      "Bunlardan biri varsa işlem devam etmemeli — pazarlık konusu değil.",
  },
  {
    t: "tablo",
    basliklar: ["Sinyal", "Neden durdurucu"],
    satirlar: [
      [
        "Para escrow dışına isteniyor",
        "Şahıs hesabına, aracının hesabına ya da üçüncü bir ülkeye. Escrow işlemin tarafsız merkezidir; dışına çıkan para korumasızdır",
      ],
      [
        "Havale talimatı son anda değişti",
        "Klasik e-posta ele geçirme deseni. Değişiklik tek başına alarmdır",
      ],
      [
        "Kendi inceleme uzmanınıza itiraz",
        "Bağımsız inceleme hakkınızdır; engellenmesinin meşru bir sebebi yoktur",
      ],
      [
        "Parsel numarası verilmiyor",
        "İlçe kütüğü kamuya açıktır. Numarayı vermemek, kaydı doğrulamanızı istememek demektir",
      ],
      [
        "Lisans bilgisi paylaşılmıyor",
        "ABD'de emlak lisansları kamuya açık kayıtlarda sorgulanır. Gizlenecek bir şey değildir",
      ],
      [
        "Garantili getiri vaadi",
        "Kira geliri garanti edilemez. Garanti edilen şey ya fiyata gömülüdür ya da verilebilir değildir",
      ],
      [
        "Karar için süre baskısı",
        "“Bugün kapanmazsa gider” cümlesi, kontrol adımlarını atlatmanın en yaygın yoludur",
      ],
    ],
    vurgu: [0, 1],
    not:
      "Vurgulu iki satır en sık ve en pahalı olanlar. İkisi de paranın " +
      "yolu hakkında ve ikisinde de kayıp geri alınamıyor.",
  },

  { t: "h", metin: "Yavaşlatıcı sinyaller" },
  {
    t: "p",
    metin:
      "Bunlar tek başına dolandırıcılık göstergesi değil ama açıklama " +
      "istemeyi gerektirir:",
  },
  {
    t: "liste",
    maddeler: [
      "Fiyat bölgeye göre belirgin biçimde ucuz — ucuzluğun bir sebebi vardır ve sorulmalıdır.",
      "İddia edilen kira, ilan edilen kiralardan yüksek.",
      "Emlak vergisi ve sigorta rakamları hesapta hiç geçmiyor.",
      "Tapunun kimin adına çıkacağı net değil.",
      "Sözleşmede şarta bağlılık maddeleri yok ya da feragat isteniyor.",
      "Yönetim şirketi satıcıyla aynı grup ve bu söylenmiyor.",
    ],
  },

  { t: "h", metin: "Kendiniz doğrulayabileceğiniz dört şey" },
  {
    t: "p",
    metin:
      "Hiçbiri izin gerektirmiyor; hepsi kamuya açık ve internetten " +
      "yapılabiliyor.",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Mülkün kaydı.** İlçe kütüğünden adresle arayın: malik kim, vergi borcu var mı, şerh var mı.",
      "**Emlak vergisi.** Aynı kayıtta yıllık vergi görünür; size söylenen rakamla karşılaştırın.",
      "**Piyasa kirası.** Aynı mahallede benzer evlerin ilan edilmiş kiralarına bakın.",
      "**Lisans.** Eyaletin emlak komisyonu sitesinden lisans numarasını sorgulayın.",
    ],
  },
  {
    t: "not",
    baslik: "Tek cümlelik kural",
    metin:
      "Doğrulamanızı kolaylaştıran taraf çalışmak istediğiniz taraftır. " +
      "Doğrulamayı zorlaştıran, geciktiren ya da gereksiz bulan taraf, " +
      "size ne satarsa satsın yanlış taraftır.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Para gittikten sonra geri alınabilir mi?",
        c:
          "Uluslararası havalede genellikle hayır. Çok hızlı fark edilirse " +
          "banka geri çağırma denemesi yapabilir ama başarı oranı düşüktür. " +
          "Bu yüzden korunma gönderimden **önce**dir: talimatı telefonla " +
          "teyit etmek.",
      },
      {
        s: "Emlakçı lisanslıysa güvenli mi?",
        c:
          "Lisans bir alt sınırdır, garanti değil. Lisanslı bir aracı da " +
          "size kötü bir mülkü iyi diye satabilir. Lisans, kimliği ve " +
          "hesap verebilirliği doğrular; yatırımın kalitesini değil.",
      },
      {
        s: "Türkiye'den hukuki yol var mı?",
        c:
          "İşlem ABD'de gerçekleştiği için uyuşmazlık genellikle orada " +
          "görülür ve süreç uzun, masraflı olur. Pratik sonuç şu: koruma " +
          "sonradan aranmaz, işlemin içine konur — escrow, bağımsız " +
          "inceleme, title insurance.",
      },
    ],
  },
];
