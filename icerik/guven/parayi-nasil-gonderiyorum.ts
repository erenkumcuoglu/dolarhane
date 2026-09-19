import type { Blok } from "@/lib/bloklar";

export const parayiNasilGonderiyorum: Blok[] = [
  {
    t: "p",
    metin:
      "Para bankadan bankaya, **kapanış şirketinin emanet hesabına** " +
      "havale edilir. Elden, şahıs hesabına ya da üçüncü bir ülkeye " +
      "yapılan ödeme yoktur; olması isteniyorsa işlem durmalıdır.",
  },

  { t: "h", metin: "Akışın tamamı" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "Sözleşme imzalanır; **kapora** [escrow hesabına](/surec/escrow-nedir/) gider (küçük tutar).",
      "Şartlar kapanır: inceleme, değerleme, tapu araştırması.",
      "Kapanış şirketi **yazılı havale talimatı** gönderir ve [son hesap dökümünü](/surec/closing-costs/) paylaşır.",
      "Talimatı telefonla teyit edersiniz — bu adım atlanmaz.",
      "Bankanız üzerinden havale yapılır; genellikle muhabir banka üzerinden geçer ve bir-iki iş günü sürer.",
      "Ulaştığını arayıp doğrularsınız.",
      "[Kapanış tamamlanır](/surec/uzaktan-tapu-kapanisi/), tapu tescile gider.",
    ],
  },
  {
    t: "not",
    baslik: "Tek kural",
    metin:
      "Havale talimatını **asla e-postadan doğrulamayın.** Bu ve benzeri " +
      "[durdurucu sinyallerin listesi ayrı bir sayfada](/guven/dolandiricilik-nasil-anlasilir/). E-postadaki " +
      "telefon numarasını da aramayın. Önceden, ilk temasta kaydettiğiniz " +
      "numarayı arayın. Talimat son anda değiştiyse bu tek başına bir " +
      "alarmdır. Havale geri alınamıyor; korunma gönderimden öncedir.",
  },

  { t: "h", metin: "Türkiye tarafı" },
  {
    t: "p",
    metin:
      "Bankanız uluslararası transferde **işlemin amacını ve fonun " +
      "kaynağını** soracaktır. Bu standart bir uyum sürecidir; hazırlıklı " +
      "olmak işi hızlandırır.",
  },
  {
    t: "liste",
    maddeler: [
      "Alım sözleşmesinin kopyası.",
      "Kapanış şirketinin yazılı havale talimatı.",
      "Fonun kaynağını gösteren belgeler.",
      "Transferi önceden bankaya bildirmek — büyük tutarlarda bloke ve gecikme yaşanabiliyor.",
    ],
  },
  {
    t: "not",
    baslik: "Kurallar değişiyor",
    metin:
      "Yurt dışına döviz transferine ilişkin düzenlemeler zaman zaman " +
      "değişiyor ve banka uygulamaları da farklılaşabiliyor. Transferden " +
      "önce **kendi bankanızdan güncel prosedürü teyit edin**; bu sayfadaki " +
      "genel çerçeveye dayanarak plan yapmayın.",
  },

  { t: "h", metin: "Kapanıştan sonraki para akışı" },
  {
    t: "p",
    metin:
      "Alım tek seferlik. Sonrasında akış **ters yöne** dönüyor: [kira " +
      "ABD'deki hesabınıza giriyor](/surec/kira-tahsilati/), oradan istediğiniz zaman Türkiye'ye " +
      "transfer ediyorsunuz.",
  },
  {
    t: "p",
    metin:
      "Çoğu yatırımcı her ay transfer etmiyor; biriktirip yılda birkaç kez " +
      "gönderiyor. İki sebebi var: her transferin masrafı var, ve tamir, " +
      "vergi, sigorta ödemeleri zaten ABD hesabından yapılıyor. Hesapta bir " +
      "tampon tutmak hem ucuz hem pratik.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Nakit ya da kripto ile ödeme yapabilir miyim?",
        c:
          "Kapanış şirketleri banka havalesi dışındaki yolları genellikle " +
          "kabul etmiyor; uyum kuralları buna izin vermiyor. Alternatif " +
          "ödeme öneren bir taraf varsa bu kendi başına bir sinyaldir.",
      },
      {
        s: "Döviz dönüşümü nerede oluyor?",
        c:
          "Alımda Türkiye tarafında, gönderim anında. Kira tarafında ise " +
          "dönüşüm hiç zorunlu değil — kira zaten dolar olarak ABD " +
          "hesabınıza giriyor ve ne zaman çevireceğinize siz karar " +
          "veriyorsunuz.",
      },
      {
        s: "ABD'de banka hesabı açmak zorunda mıyım?",
        c:
          "Alım için zorunlu değil. Ama kira tahsilatı, vergi ve tamir " +
          "ödemeleri için pratikte gerekli hale geliyor. Hesap açma süreci " +
          "banka ve kimlik durumuna göre değişiyor; ITIN bu aşamada " +
          "gündeme geliyor.",
      },
    ],
  },
];
