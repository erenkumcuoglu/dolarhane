import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Band } from "@/components/Band";
import {
  NedenAmerika,
  TurkiyeAyniPara,
  KiraciMeselesi,
  GetiriyleNeOlur,
} from "@/components/anlati";
import { Referanslar } from "@/components/Referanslar";
import { OzetHesap } from "@/components/OzetHesap";
import { Detaylar } from "@/components/Detaylar";
import { Gorusme } from "@/components/Gorusme";
import { Footer } from "@/components/Footer";

/**
 * Bölüm sırası ritme göre kuruldu: yoğun-sayısal (Y) iki bölüm yan yana
 * gelmiyor. Hero+Band tek bir "kanıt açılışı", Özet+Detaylar ise biri
 * küçük diğeri katlanmış olduğu için kasıtlı istisna.
 *
 * Y: Hero, Band, TurkiyeAyniPara, OzetHesap, Detaylar
 * N: NedenAmerika, KiraciMeselesi, Referanslar, GetiriyleNeOlur, Gorusme
 */
export default function Sayfa() {
  return (
    <>
      <Nav />
      <Hero />
      <main id="icerik">
        <Band />
        <NedenAmerika />
        <TurkiyeAyniPara />
        <KiraciMeselesi />
        <Referanslar />
        <GetiriyleNeOlur />
        <OzetHesap />
        <Detaylar />
        <Gorusme />
      </main>
      <Footer />
    </>
  );
}
