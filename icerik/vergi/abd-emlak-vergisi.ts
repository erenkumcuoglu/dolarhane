import type { Blok } from "@/lib/bloklar";
import { CPA_UYARISI } from "./_uyari";

/**
 * Türk alıcının en büyük kör noktası ve kendi aleyhimize olan kalem
 * (EV-KALITE-CERCEVESI §5.1). Zone dışı eyalet karşılaştırma tablosu
 * YAYINLANMIYOR — sadece büyüklük anlatılıyor.
 */
export const abdEmlakVergisi: Blok[] = [
  {
    t: "p",
    metin:
      "ABD'de emlak vergisi, Türk alıcının hesabında en çok eksik kalan " +
      "kalem — çünkü Türkiye'deki emlak vergisiyle **kıyaslanamayacak " +
      "kadar** farklı bir büyüklükte. Brüt kiranın anlamlı bir dilimini " +
      "alıyor ve her yıl alıyor.",
  },
  {
    t: "p",
    metin:
      "Bu kalem bizim de aleyhimize. Yine de yazıyoruz, çünkü hesaba " +
      "katılmadığında getiri sistematik olarak yüksek görünüyor ve " +
      "sürpriz kalemler alıcıyla satıcı arasındaki güveni bitiriyor.",
  },
  CPA_UYARISI,

  { t: "h", metin: "Nasıl hesaplanıyor" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "İlçe, mülke bir **değerlenmiş değer** (assessed value) atıyor. Bu, piyasa değeriyle aynı olmak zorunda değil.",
      "Yerel vergi oranları toplanıyor: ilçe, belediye, okul bölgesi, özel hizmet bölgeleri.",
      "Değerlenmiş değer × toplam oran = yıllık vergi.",
      "Vergi yılda bir ya da iki taksitte ödeniyor; kredi varsa genellikle taksite dahil edilip emanet hesabından ödeniyor.",
    ],
  },
  {
    t: "not",
    baslik: "Okul bölgesi payı en büyük kalem olabiliyor",
    metin:
      "Toplam oranın önemli bir kısmı okul finansmanından geliyor. " +
      "Bu, iyi okul puanıyla yüksek emlak vergisinin sık sık birlikte " +
      "gitmesinin sebebi: **iyi mahalle isterseniz vergiyi de " +
      "alıyorsunuz.** İkisi aynı kalemin iki yüzü.",
  },

  { t: "h", metin: "Neden bu kadar değişken" },
  {
    t: "p",
    metin:
      "Oran federal değil **yerel** belirlendiği için ilçeden ilçeye, " +
      "hatta aynı ilçede okul bölgesine göre belirgin biçimde " +
      "değişebiliyor. Aynı fiyatlı iki ev, farklı ilçelerde birbirinden " +
      "çok farklı yıllık vergi ödeyebiliyor.",
  },
  {
    t: "p",
    metin:
      "Bu yüzden emlak vergisi **tahmin edilemez, yalnız kontrol " +
      "edilebilir.** Ortalama bir oran kullanarak yapılan hesap " +
      "yanıltıcı olur.",
  },
  {
    t: "not",
    baslik: "Nasıl kontrol edilir",
    metin:
      "İlçenin vergi ya da değerleme ofisi kayıtları çoğu yerde " +
      "çevrimiçi ve kamuya açık. Adresle arayın: mülkün değerlenmiş " +
      "değeri, uygulanan oran ve **geçen yıl fiilen ödenen vergi** " +
      "orada yazıyor. Size söylenen rakamla karşılaştırın. Bu, hiç izin " +
      "gerektirmeyen bir doğrulama.",
  },

  { t: "h", metin: "Zamanla artıyor" },
  {
    t: "liste",
    maddeler: [
      "**Yeniden değerleme.** İlçe belirli aralıklarla mülkleri yeniden değerliyor; değer artarsa vergi de artıyor.",
      "**Oran değişimi.** Yerel bütçe kararlarıyla oranlar yükselebiliyor.",
      "**Satış sonrası düzeltme.** Bazı yerlerde mülkün el değiştirmesi yeniden değerlemeyi tetikliyor — yani sizin ödeyeceğiniz vergi, satıcının ödediğinden yüksek olabiliyor.",
    ],
  },
  {
    t: "not",
    baslik: "Son madde en sık atlanan",
    metin:
      "Satıcının vergi kaydına bakıp “yıllık şu kadar” diye modelleme " +
      "yapmak, satış sonrası yeniden değerleme yapılan yerlerde hatalı " +
      "sonuç veriyor. Alım öncesinde sorulacak soru: **bu ilçede satış " +
      "yeniden değerlemeyi tetikliyor mu?**",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "İtiraz edebilir miyim?",
        c:
          "Evet. Değerlenmiş değerin fazla olduğunu düşünüyorsanız " +
          "itiraz süreci var ve benzer mülk satışlarıyla " +
          "gerekçelendiriliyor. Süreler sıkı; kaçırılırsa bir sonraki " +
          "döneme kalıyor.",
      },
      {
        s: "Vergiyi kim ödüyor?",
        c:
          "Malik olarak siz. Pratikte yönetim şirketi takip edip " +
          "kiradan ödüyor ya da kredi varsa emanet hesabından " +
          "ödeniyor. Kimin takip ettiği yönetim sözleşmesinde yazılı " +
          "olmalı.",
      },
      {
        s: "Ödenmezse ne olur?",
        c:
          "Emlak vergisi mülke bağlı bir yük. Ödenmediğinde gecikme " +
          "faizi işliyor ve uzun vadede mülk üzerinde satışa kadar " +
          "gidebilen bir süreç başlıyor. Takip edilmesi gereken " +
          "en kritik ödeme kalemi bu.",
      },
    ],
  },

  {
    t: "kaynak",
    maddeler: [
      {
        metin:
          "Emlak vergisi oranı eyalet ve ilçe düzeyinde belirlenir; tek bir ABD " +
          "oranı yoktur. Faaliyet bölgemizin efektif oranı hesap sayfasındaki " +
          "modelde yazılıdır.",
      },
      {
        metin:
          "IRS · Publication 527, Residential Rental Property — emlak vergisinin " +
          "kira gelirinden indirilmesi",
        url: "https://www.irs.gov/publications/p527",
      },
    ],
  },
];
