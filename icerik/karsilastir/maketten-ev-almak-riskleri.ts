import type { Blok } from "@/lib/bloklar";

/** Ülke adı geçmiyor — maketten alım her yerde aynı risk sınıfı. */
export const makettenEvAlmakRiskleri: Blok[] = [
  {
    t: "p",
    metin:
      "Maketten alımda satın aldığınız şey bir ev değil, **bir vaat.** " +
      "Bu kendi başına kötü bir şey değil; peşin fiyat avantajı ve " +
      "taksitli ödeme imkânı gerçek. Ama risk sınıfı, mevcut bir evi " +
      "almaktan tamamen farklı ve aynı ölçütlerle değerlendirilemez.",
  },

  { t: "h", metin: "Farkın kaynağı" },
  {
    t: "tablo",
    basliklar: ["", "Mevcut ev", "Maketten"],
    satirlar: [
      ["Ne alıyorsunuz", "Tapulu, görülebilir bir varlık", "Sözleşmeye bağlı bir teslim taahhüdü"],
      ["Kira ne zaman başlar", "[Kapanıştan](/surec/uzaktan-tapu-kapanisi/) sonra — kiralıysa hemen", "Teslimden sonra; o güne kadar gelir yok"],
      ["İnceleme yapılabilir mi", "Evet, [bağımsız rapor alınır](/surec/evi-gormeden-ev-almak/)", "Hayır — henüz yok"],
      ["Kira doğrulanabilir mi", "Evet, [ilanlardan ve sözleşmeden](/getiri/kira-carpani/)", "Hayır, yalnız projeksiyon var"],
      ["Ana risk", "Mülkün durumu", "Karşı tarafın performansı"],
      ["Paranız nerede", "[Escrow'da](/surec/escrow-nedir/), kapanışta el değiştirir", "Geliştiriciye ya da emanet hesabına, teslime kadar"],
    ],
    vurgu: [1, 4],
  },
  {
    t: "not",
    baslik: "Vurgulu iki satır getiri hesabını değiştiriyor",
    metin:
      "Teslime kadar kira gelmiyor ama paranız bağlı. Yatırılan sermayeyi " +
      "kullanamadığınız aylar, getiri hesabında **maliyet** olarak yer " +
      "almalı. İki yıllık bir teslim süresi, ilk iki yılın getirisini " +
      "sıfırlar — hesaba katılmazsa [getiri sistematik olarak yüksek çıkar](/getiri/getiri-tuzaklari/).",
  },

  { t: "h", metin: "Somut riskler" },
  {
    t: "liste",
    maddeler: [
      "**Gecikme.** Teslim tarihi kayabiliyor; sözleşmede gecikme yaptırımı yoksa bekleme bedelsiz kalıyor.",
      "**Spesifikasyon değişikliği.** Teslim edilen, tanıtılandan farklı olabiliyor. Sözleşmede malzeme ve ölçü kalitesi ne kadar bağlayıcı yazılmış?",
      "**Karşı taraf riski.** Geliştirici mali sıkıntıya girerse süreç belirsizleşiyor.",
      "**Kira projeksiyonu.** Teslim sonrası kira bir tahmin; doğrulanacak bir ilan ya da sözleşme yok.",
      "**Bölgenin arz yükü.** Aynı dönemde teslim olacak diğer projeler kira ve fiyatı aşağı çekebiliyor.",
      "**Çıkış zorluğu.** Teslim öncesi devir sözleşmeye bağlı; her zaman serbest değil ve masraflı olabiliyor.",
    ],
  },

  { t: "h", metin: "Alacaksanız sözleşmede aranacaklar" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Emanet hesabı.** Ödemeler geliştiricinin serbest hesabına değil, düzenlemeye tabi bir emanet hesabına gitmeli. Bu koruma birçok piyasada zorunlu — zorunlu olup olmadığını öğrenin.",
      "**İnşaat aşamasına bağlı ödeme.** Takvime değil, tamamlanma yüzdesine bağlı ödeme planı sizi korur.",
      "**Gecikme yaptırımı.** Teslim gecikirse ne oluyor? Tazminat, cayma hakkı ya da ikisi.",
      "**Teknik şartname eki.** Malzeme, ölçü ve donanım listesi sözleşmenin eki olmalı.",
      "**Devir hakkı.** Teslim öncesi satma hakkınız var mı, hangi koşullarla.",
      "**Teslimde muayene.** Teslimi kabul etmeden bağımsız kontrol hakkı.",
    ],
  },
  {
    t: "not",
    baslik: "Geliştirici geçmişi en güçlü sinyal",
    metin:
      "Sözleşme ne kadar iyi yazılsa da, uygulayacak tarafın geçmişi " +
      "kadar değerli. Bakılacak tek şey: bu geliştirici **daha önce " +
      "hangi projeleri zamanında ve tanıtıldığı gibi teslim etti?** " +
      "Teslim geçmişi olmayan bir tarafla maketten alım, iki riski " +
      "üst üste almak demek.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Maketten almak her zaman yanlış mı?",
        c:
          "Hayır. Fiyat avantajı gerçek ve ödeme planı nakit akışı " +
          "yönetimini kolaylaştırabiliyor. Yanlış olan, maketten alımı " +
          "mevcut ev almakla aynı risk sınıfında değerlendirmek.",
      },
      {
        s: "Getiri hesabını nasıl kurmalıyım?",
        c:
          "Teslime kadar geçen süreyi sıfır gelirli ay olarak modele " +
          "koyun ve o süredeki sermaye bağlılığını maliyet sayın. " +
          "Teslim sonrası kirayı da projeksiyon olarak işaretleyin, " +
          "doğrulanmış rakam gibi kullanmayın.",
      },
      {
        s: "Biz maketten satıyor muyuz?",
        c:
          "Hayır. Odağımız mevcut, oturulmuş konut stoğu — kirası " +
          "doğrulanabilen ve bağımsız incelemeye açık mülkler.",
      },
    ],
  },
];
