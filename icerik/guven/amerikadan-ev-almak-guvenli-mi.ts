import type { Blok } from "@/lib/bloklar";

/** Kümenin giriş sayfası. Evergreen. */
export const amerikadanEvAlmakGuvenliMi: Blok[] = [
  {
    t: "p",
    metin:
      "“Güvenli mi” tek bir soru değil, iki ayrı soru — ve cevapları " +
      "birbirinden çok farklı. **Hukuki güvenlik yüksektir; ticari " +
      "güvenlik kiminle çalıştığınıza bağlıdır.** İkisini ayırmadan " +
      "verilen her cevap ya fazla iyimser ya fazla karamsar oluyor.",
  },

  { t: "h", metin: "Hukuki taraf: güçlü" },
  {
    t: "p",
    metin:
      "Amerika'da gayrimenkul mülkiyeti yabancılara açıktır ve bunun için " +
      "oturum, vize ya da vatandaşlık gerekmez. Mülkiyet altyapısı iki " +
      "yüzyıllık bir kayıt sistemine dayanıyor:",
  },
  {
    t: "tablo",
    basliklar: ["Koruma", "Ne yapar"],
    satirlar: [
      ["İlçe tapu kütüğü", "Mülkiyet kamuya açık kayıtta; malik adını kendiniz doğrulayabilirsiniz"],
      ["Title araştırması", "Mülkiyet zinciri geriye doğru taranır"],
      ["[Title insurance](/surec/title-insurance/)", "Geçmişten gelen hak iddialarına karşı sigorta"],
      ["[Escrow](/surec/escrow-nedir/)", "Para ve tapu tarafsız üçüncü tarafta; kimse diğerine güvenmek zorunda değil"],
      ["Mahkeme yolu", "Kiracı da ev sahibi de yazılı ve öngörülebilir bir süreçle korunur"],
    ],
    not:
      "Bu korumaların hiçbiri size özel bir ayrıcalık değil; işlemin " +
      "standart parçaları. Yokmuş gibi davranan bir satıcı varsa asıl " +
      "sinyal odur.",
  },
  {
    t: "p",
    metin:
      "Yabancı olmanız hukuki konumunuzu değiştirmiyor: tapu sizin " +
      "adınıza tescil ediliyor, aynı sigorta aynı kapsamla alınıyor, " +
      "aynı mahkemeye başvuruyorsunuz.",
  },

  { t: "h", metin: "Ticari taraf: risk burada" },
  {
    t: "p",
    metin:
      "Asıl risk ülkede değil, **iki şeyde**: kimden aldığınız ve ne " +
      "aldığınız.",
  },
  {
    t: "liste",
    maddeler: [
      "**Yanlış aracı.** Bağımsız inceleme yaptırmayan, parayı escrow dışına isteyen, lisansını göstermeyen taraf.",
      "**Yanlış mülk.** Ucuz göründüğü için alınan, ama [boşluk, devir ve capex'i](/getiri/getiri-tuzaklari/) getirisini yiyen ev.",
      "**Yanlış hesap.** Brüt getiriye bakıp [net getiriyi](/getiri/brut-vs-net-getiri/) hiç hesaplamamak.",
    ],
  },
  {
    t: "not",
    baslik: "Aleyhimize olan not",
    metin:
      "Bu üç riskin üçü de **satıcıdan bağımsız olarak sizin kontrol " +
      "edebileceğiniz** şeyler — ve kontrol etmeniz bizim de işimize " +
      "gelmeyebilir. Yine de yazıyoruz: kendi inceleme raporunuzu tutun, " +
      "parayı escrow'a gönderin, [net getiriyi kendiniz hesaplayın](/hesap/).",
  },

  { t: "h", metin: "Sık sorulan üç şeyin kısa cevabı" },
  {
    t: "liste",
    maddeler: [
      "**Tapu gerçekten benim adıma mı çıkıyor?** Evet, ve [ilçe kütüğünden kendiniz doğrulayabilirsiniz](/guven/tapu-kimin-adina/).",
      "**Evi hiç görmeden almak mantıklı mı?** [Görmek yerine üç bağımsız inceleme geçiyor](/surec/evi-gormeden-ev-almak/); asıl soru o incelemelerin kimin için yapıldığı.",
      "**Param nasıl gidiyor?** [Kapanış şirketinin emanet hesabına havaleyle](/guven/parayi-nasil-gonderiyorum/) — ve [havale talimatı asla e-postadan doğrulanmaz](/guven/dolandiricilik-nasil-anlasilir/).",
    ],
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Yabancı olarak mülküme el konabilir mi?",
        c:
          "Mülkiyet hakkı uyruğa bağlı değildir ve tapu kamuya açık kayıtta " +
          "durur. Devletin kamu yararı için kamulaştırma yetkisi vardır ama " +
          "bu vatandaşlar için de aynıdır ve bedel ödenmesini gerektirir.",
      },
      {
        s: "Vergi vermezsem ne olur?",
        c:
          "Emlak vergisi mülke bağlıdır ve ödenmezse zamanla mülk üzerinde " +
          "yük oluşturur; uzun vadede mülkü kaybetmeye kadar gidebilir. " +
          "Vergi ödemesinin yönetim şirketi tarafından takip edildiğinden " +
          "emin olun — bu sözleşmede yazılı olmalı.",
      },
      {
        s: "Bu sayfayı yazan şirketin kendi durumu ne?",
        c:
          "Şu anda portföyümüzde ev yok ve kimseye ev satmadık. Bunu [ayrı " +
          "bir sayfada](/guven/neden-bize-henuz-guvenmemelisiniz/) açıkça yazıyoruz; güven sorusunu size sorup kendimizi " +
          "dışarıda tutmak tutarsız olurdu.",
      },
    ],
  },
];
