import type { Blok } from "@/lib/bloklar";

/**
 * Kaldıraçlı alımın metriği. Sitenin ANA TEZİ DEĞİL: 2026-09'da ürün
 * peşin alıma döndü (iş planı §10-11) ve kaldıraç kamuya açık üründen
 * çıktı. Sayfa metriği öğretmeye devam ediyor — kredili alım Türkçe'de
 * aranan bir konu — ama artık bizim hesabımızı anlatmıyor ve okuru
 * peşin modelin metriklerine yönlendiriyor.
 *
 * Kural 5 gereği burada RAKAM YOK: canlı rakamlar lib/finance.ts'ten
 * geliyor ve /hesap sayfasında duruyor.
 */
export const kiraylaKarsilamaOrani: Blok[] = [
  {
    t: "p",
    metin:
      "Kirayla karşılama oranı tek bir soruyu cevaplar: **kira, kredi " +
      "taksitinin kaç katı?** Bir bölürsünüz — aylık kira ÷ aylık taksit — " +
      "ve çıkan sayı, evin kendi borcunu ödeyip ödemediğini söyler.",
  },
  {
    t: "p",
    metin:
      "Oran 1'in altındaysa aradaki farkı her ay siz kapatıyorsunuz. " +
      "1'in üstündeyse kiracı taksiti ödüyor ve üstü size kalıyor. " +
      "Bu kadar basit, ve gayrimenkul yatırımında tek bir sayıya " +
      "bakılacaksa büyük ihtimalle bu sayıdır.",
  },

  { t: "h", metin: "Neden bu oran" },
  {
    t: "p",
    metin:
      "Getiri yüzdesi soyut; bu oran somut. Yüzde kaç kazandığınızı " +
      "anlamak için karşılaştırma gerekiyor, ama “kira taksiti karşılıyor " +
      "mu” sorusunun cevabı tek başına anlamlı.",
  },
  {
    t: "liste",
    maddeler: [
      "**Nakit çıkışını gösterir.** Her ay cebinizden para çıkıp çıkmadığını doğrudan söyler.",
      "**Kaldıracı hesaba katar.** Peşin getirisi aynı iki ev, kredi koşulları farklıysa çok farklı oranlar verir.",
      "**Karşılaştırılabilir.** Ülke, para birimi ve fiyat farkından bağımsız olarak aynı anlamı taşır.",
    ],
  },
  {
    t: "not",
    baslik: "Bu oran tek başına yeterli değil",
    metin:
      "Oran yalnız kirayı ve taksiti görür. [Emlak vergisi, sigorta, " +
      "boşluk, yönetim ve bakım](/getiri/brut-vs-net-getiri/) bu hesapta **yok.** Oran 1'in üstünde " +
      "olduğu halde net nakit akışı negatif olabilir. Oranı bir kapı " +
      "olarak kullanın: geçemeyen ev elenir, geçen ev ayrıca hesaplanır.",
  },

  { t: "h", metin: "Doğru hesaplamak" },
  {
    t: "liste",
    sirali: true,
    maddeler: [
      "**Taksite neyin dahil olduğunu netleştirin.** Bazı ülkelerde taksit yalnız anapara ve faizdir; bazı sistemlerde vergi ve sigorta da taksitin içine katılır. İkisi karşılaştırılamaz.",
      "**Brüt kirayı değil tahsil edilen kirayı kullanın** ya da en azından boşluk payını ayrıca not edin.",
      "**Peşinat oranını yazın.** Aynı ev, farklı peşinatla tamamen farklı bir oran verir. Oranı peşinatsız konuşmak anlamsızdır.",
      "**Faiz oranını ve vadeyi yazın.** Bu ikisi taksiti belirliyor.",
    ],
  },
  {
    t: "p",
    metin:
      "Bu dört bilgi olmadan verilen bir oran, karşılaştırılamaz bir " +
      "sayıdır. Birinin size oran söylediğinde sorulacak ilk soru: " +
      "**hangi peşinat ve hangi faizle?**",
  },

  { t: "h", metin: "Oran neden ülkeler arasında bu kadar değişiyor" },
  {
    t: "p",
    metin:
      "Üç değişken belirliyor: kira/fiyat oranı, faiz oranı ve vade. " +
      "Uzun vade taksiti düşürüyor, dolayısıyla oranı yükseltiyor; yüksek " +
      "faiz tersini yapıyor. Aynı ev, otuz yıl yerine on yıl vadeyle " +
      "alındığında oran belirgin biçimde düşer.",
  },
  {
    t: "p",
    metin:
      "Bu yüzden ülkeler arası karşılaştırmada kredi sisteminin kendisi " +
      "en az mülk kadar belirleyici — ve bu, oranın taşınabilir bir " +
      "ölçü olmadığı anlamına geliyor.",
  },

  {
    t: "sss",
    sorular: [
      {
        s: "Oran kaç olmalı?",
        c:
          "Tek bir eşik yok, ama 1 kritik sınır: altındaysa her ay cebinizden " +
          "para çıkıyor demektir. 1'in üstünde ne kadar pay kaldığı, diğer " +
          "giderleri karşılamaya yetip yetmediğine göre değerlendirilir.",
      },
      {
        s: "Peşin alırsam bu oran ne anlama geliyor?",
        c:
          "Taksit yoksa oran tanımsızdır. Peşin alımda bakılacak metrik " +
          "[cap rate](/getiri/cap-rate-nedir/) ve " +
          "[net nakit akışıdır](/getiri/nakit-akisi-nasil-hesaplanir/); " +
          "kirayla karşılama oranı kaldıraçlı alıma özgüdür. " +
          "Bizim modelimiz peşin — [hesabın tamamı burada](/hesap/).",
      },
      {
        s: "Oran yüksekse ev iyi bir yatırım mıdır?",
        c:
          "Şart değil. Çok yüksek oran genellikle düşük fiyatlı, düşük " +
          "sınıf bir mülkü işaret eder — ve orada boşluk, devir ve capex " +
          "net getiriyi yiyebilir. Yüksek oran bir davettir, cevap değil.",
      },
    ],
  },
];
