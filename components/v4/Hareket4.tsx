"use client";

import { useEffect } from "react";

/**
 * V4 hareket katmanı — sayfada TEK kez bağlanır.
 *
 * 1. `[data-r]` taşıyan öğeler görüş alanına girince `.gor` sınıfı alır;
 *    CSS geçişi oradan yürür. Gizleme CSS'te `@media (scripting: enabled)`
 *    ve `prefers-reduced-motion: no-preference` içinde — JS çalışmazsa ya
 *    da kullanıcı hareketi kısmışsa içerik baştan görünür, hiçbir şey
 *    boşlukta kalmaz.
 * 2. Nav'ın katılaşması ve üstteki ince ilerleme çizgisi `--v4-ilerleme`
 *    değişkeniyle, kaydırma dinleyicisi pasif ve rAF ile kısılmış.
 */
export function Hareket4() {
  useEffect(() => {
    const kok = document.querySelector(".v4") as HTMLElement | null;
    if (!kok) return;

    const io = new IntersectionObserver(
      (girdiler) => {
        for (const g of girdiler) {
          if (g.isIntersecting) {
            g.target.classList.add("gor");
            io.unobserve(g.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    kok.querySelectorAll("[data-r]").forEach((el) => io.observe(el));

    let bekliyor = false;
    const guncelle = () => {
      bekliyor = false;
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      kok.style.setProperty("--v4-ilerleme", String(h > 0 ? y / h : 0));
      kok.classList.toggle("v4--kaydi", y > 24);
    };
    const dinle = () => {
      if (!bekliyor) {
        bekliyor = true;
        requestAnimationFrame(guncelle);
      }
    };
    guncelle();
    window.addEventListener("scroll", dinle, { passive: true });
    window.addEventListener("resize", dinle);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", dinle);
      window.removeEventListener("resize", dinle);
    };
  }, []);

  return null;
}
