import type { Blok } from "@/lib/bloklar";

/**
 * Markanın en uç sayfası. Portföyümüz yokken güven içeriği yazmak, aynı
 * soruyu bize geri soruyor; kaçınmak en büyük risk olurdu.
 * SEO-GEO-PLAN §2.1.
 *
 * Ton: özeleştiri gösterisi değil. Deneyimde eksik olduğumuzu söylüyor,
 * yöntemde güçlü olduğumuzu gösteriyor, ve ne zaman güvenilebileceğinin
 * ölçütünü okura veriyor.
 */
export const nedenBizeHenuzGuvenmemelisiniz: Blok[] = [
  {
    t: "p",
    metin:
      "Bu sitede [güvenin nasıl kontrol edileceğini anlatan bir küme](/guven/) var. " +
      "Aynı soruyu kendimize sormadan o kümeyi yazmak tutarsız olurdu. " +
      "O yüzden açık yazıyoruz: **şu anda portföyümüzde ev yok ve bugüne " +
      "kadar kimseye ev satmadık.**",
  },
  {
    t: "p",
    metin:
      "Bir konsept pazarlıyoruz. İlk portföy gelecek, ama henüz gelmedi. " +
      "Bunu sayfanın dibine küçük puntoyla yazmak yerine kendi başlığını " +
      "verdik.",
  },

  { t: "h", metin: "Elimizde olmayan şey" },
  {
    t: "p",
    metin:
      "Bir şirkete güvenmenin en sağlam dayanağı **geçmiş işlemlerdir** — " +
      "kaç ev sattığı, o evlerin ne getirdiği, alıcıların ne yaşadığı. " +
      "Bizde bu yok ve olduğunu iddia etmiyoruz.",
  },
  {
    t: "liste",
    maddeler: [
      "Satılmış ev sayımız: **sıfır**.",
      "Gösterebileceğimiz alıcı referansı: **yok**.",
      "Yayınlanmış geçmiş getiri verimiz: **yok** — ve olmadığı için getiri iddiasında da bulunmuyoruz.",
    ],
  },
  {
    t: "not",
    baslik: "Bunun anlamı",
    metin:
      "Bugün, geçmişi kanıtlanmış bir taraftan almak istiyorsanız **biz o " +
      "şirket değiliz.** Bu cümleyi yazmak işimize gelmiyor ama doğru, ve " +
      "doğru olmayan bir şey söyleyerek başlamak istemiyoruz.",
  },

  { t: "h", metin: "Elimizde olan şey" },
  {
    t: "p",
    metin:
      "Deneyim yerine koyabileceğimiz tek şey **yöntem şeffaflığı**. " +
      "İddia edemediğimiz için gösteriyoruz:",
  },
  {
    t: "tablo",
    basliklar: ["Ne yapıyoruz", "Nasıl doğrularsınız"],
    satirlar: [
      [
        "Rakamları kaynağa bağlıyoruz",
        "Her sayfada kaynak listesi var; kamuya açık verilere siz de bakabilirsiniz",
      ],
      [
        "Modeli açık bırakıyoruz",
        "Varsayımlar yazılı; beğenmediğinizi değiştirip sonucu yeniden görebilirsiniz",
      ],
      [
        "Aleyhimize olanı yazıyoruz",
        "[Ucuz evin brütte iyi görünüp nette kaybettirmesi](/getiri/brut-vs-net-getiri/), emlak vergisinin yüksekliği, [tahliyenin maliyeti](/surec/amerikada-tahliye-sureci/) — hepsi burada",
      ],
      [
        "Getiri vaat etmiyoruz",
        "Sitede garantili ya da kesin getiri ifadesi yok; olmadığını arayarak kontrol edebilirsiniz",
      ],
    ],
    not:
      "Bunların hiçbiri deneyimin yerini tutmaz. Yöntemin doğru olması, " +
      "uygulamanın da doğru olacağını garanti etmiyor — sadece kontrol " +
      "edilebilir bir zemin sunuyor.",
  },

  { t: "h", metin: "Bizden ne zaman isteyeceğiniz şeyler" },
  {
    t: "p",
    metin:
      "İlk portföy geldiğinde bize sorulacak sorular bunlar. Şimdiden " +
      "yazıyoruz ki sonradan konuyu değiştiremeyelim:",
  },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Lisans numarası.** ABD tarafında işlemi kim yürütüyor, lisansı ne, hangi eyalette geçerli.",
      "**Tüzel kimlik ve adres.** Hangi şirket, nerede kayıtlı.",
      "**İlçe parsel numarası.** Satılan evin [kütük kaydı](/guven/tapu-kimin-adina/) — kendiniz doğrulayabilmelisiniz.",
      "**Bağımsız inceleme hakkı.** [Kendi seçtiğiniz inspector'ı](/surec/evi-gormeden-ev-almak/) tutmanıza itiraz edilmemeli.",
      "**Gerçek alıcı referansı.** Bizim seçtiğimiz değil, konuşmak istediğiniz alıcı.",
    ],
  },
  {
    t: "not",
    baslik: "Aynı listeyi herkese uygulayın",
    metin:
      "Bu beş madde bize özgü değil. Kimden alırsanız alın isteyin; " +
      "[durdurucu sinyallerin tam listesi ayrı bir sayfada](/guven/dolandiricilik-nasil-anlasilir/) — " +
      "cevap veremeyen taraf, sizinle çalışmaya hazır değil demektir.",
  },

  { t: "h", metin: "Şu an ne yapıyoruz" },
  {
    t: "p",
    metin:
      "Portföy hazırlanırken kategorinin verisini tutuyoruz ve nasıl ev " +
      "seçildiğini yazıya döküyoruz. Bunun bir sebebi var: **envanter " +
      "geldiğinde yöntemi tartışmak için geç olur.** Ölçütlerin, ev " +
      "ortadayken değil, ev yokken yazılmış olması gerekiyor.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "İlk portföy ne zaman gelecek?",
        c:
          "Tarih netleştiğinde burada yazacağız. Belirsiz bir tarih vermek, " +
          "bu sayfanın varlık sebebine aykırı olurdu.",
      },
      {
        s: "O zaman neden şimdiden sizinle konuşayım?",
        c:
          "Konuşmak zorunda değilsiniz. Bekleme listesine kaydolmanın tek " +
          "işlevi, envanter geldiğinde haber almanız ve o arada ne " +
          "aradığınızı bize söylemeniz. Bu bir satın alma taahhüdü değil.",
      },
      {
        s: "Bu sayfa bir pazarlama numarası mı?",
        c:
          "Dürüstlüğün pazarlama değeri olduğunun farkındayız; bunu " +
          "saklamıyoruz. Ama sayfanın içindeki bilgiler kontrol edilebilir: " +
          "sıfır satış, sıfır referans, sıfır getiri verisi. Numara olsaydı " +
          "bu üç rakamı yazmazdık.",
      },
    ],
  },
];
