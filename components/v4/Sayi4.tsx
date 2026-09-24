"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Görüş alanına girince sıfırdan hedefe sayan rakam.
 *
 * Sunucu çıktısı SON değeri basar (arama motoru, JS'siz okuyucu ve ekran
 * okuyucu doğru rakamı görür). Sayma yalnız görsel; `aria-hidden` kopya
 * sayarken erişilebilir metin sabit kalıyor. Hareket kısılmışsa hiç
 * saymaz.
 */
type Bicim = "usd" | "yuzde1" | "adet" | "kat";

const tr0 = new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 });
function bicimle(n: number, b: Bicim) {
  if (b === "usd") return "$" + tr0.format(Math.round(n));
  if (b === "yuzde1") return "%" + n.toFixed(1).replace(".", ",");
  if (b === "kat") return n.toFixed(1).replace(".", ",") + "×";
  return (Number.isInteger(n) ? n.toString() : n.toFixed(1).replace(".", ",")) + " ev";
}

export function Sayi4({ deger, bicim, className }: { deger: number; bicim: Bicim; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [goster, setGoster] = useState<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([g]) => {
        if (!g.isIntersecting) return;
        io.disconnect();
        const bas = performance.now();
        const sure = 1600;
        const adim = (t: number) => {
          const p = Math.min(1, (t - bas) / sure);
          const e = 1 - Math.pow(2, -10 * p);
          setGoster(p >= 1 ? null : deger * e);
          if (p < 1) raf = requestAnimationFrame(adim);
        };
        raf = requestAnimationFrame(adim);
      },
      { threshold: 0.4 },
    );
    setGoster(0);
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [deger]);

  const son = bicimle(deger, bicim);
  return (
    <span ref={ref} className={className}>
      {goster === null ? (
        son
      ) : (
        <>
          <span className="v4-sr">{son}</span>
          <span aria-hidden="true">{bicimle(goster, bicim)}</span>
        </>
      )}
    </span>
  );
}
