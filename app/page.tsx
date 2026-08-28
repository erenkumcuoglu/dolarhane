import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Band } from "@/components/Band";
import { Cetvel } from "@/components/Cetvel";
import { Detaylar } from "@/components/Detaylar";
import { Gorusme } from "@/components/Gorusme";
import { Footer } from "@/components/Footer";

export default function Sayfa() {
  return (
    <>
      <Nav />
      <Hero />
      <main id="icerik">
        <Band />
        <Cetvel />
        <Detaylar />
        <Gorusme />
      </main>
      <Footer />
    </>
  );
}
