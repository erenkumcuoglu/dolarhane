/**
 * AMBLEM — vektör sürüm.
 *
 * Neden var: elimizdeki tek varlık `public/logo/amblem.png`, kitin kendi
 * ikonunun 150×150 merkez kırpımı. Alfa kanalı yok, vektör yok, altın
 * gradyan ve dış parıltı piksele gömülü (public/logo/KAYNAK.txt). 28–30
 * pikselde bu dosya bulanık, koyu bir çip olarak oturuyordu — başlıktaki
 * "kesim" şikâyeti tam olarak bu.
 *
 * Bu bileşen aynı siluetin DÜZ yeniden çizimi: lacivert yuvarlak plaka +
 * altın "D", sayacının içinde beşik çatılı ev. Gradyan ve parıltı yok —
 * marka kitinin kendi §07 kuralı zaten onları yasaklıyor, teslim edilen
 * amblem kuralı çiğniyordu.
 *
 * DİKKAT: bu bir YENİDEN ÇİZİMDİR, kitin dosyası değil. Kalıcı çözüm,
 * kit sahibinden şeffaf zeminli SVG istemek (KAYNAK.txt "EKSİK" listesi).
 *
 * Plaka ve işaret renkleri CSS'ten: `.v3-amblem` sınıfı `fill`/`color`
 * verir, böylece açık zeminde lacivert plaka, koyu zeminde plakasız
 * altın işaret kullanılabiliyor.
 */
export function Amblem3({ className }: { className?: string }) {
  return (
    <svg
      className={`v3-amblem${className ? " " + className : ""}`}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
    >
      <rect className="v3-amblem__plaka" width="32" height="32" rx="9" />
      <g className="v3-amblem__isaret" fill="currentColor">
        {/* "D" — kalın halka; sayaç evenodd ile oyuluyor. Halka
            kalınlığı sapta ve kavisde eşit: 3,1. */}
        <path
          fillRule="evenodd"
          d="M7.3 5.5h7.3a10.5 10.5 0 0 1 0 21H7.3zm3.1 3.1v14.8h4.2a7.4 7.4 0 0 0 0-14.8z"
        />
        {/* Ev — sayacın içinde. Sayaç dikdörtgen DEĞİL, sağa şişen bir
            D: ev bu yüzden dar tutuldu, yoksa alt-sağ köşesi halkaya
            değiyor ve iki şekil birbirine yapışıyor. */}
        <path
          fillRule="evenodd"
          d="M15.6 11.2 19.2 15.2v6h-7.2v-6zm-1.2 5.8v2.6h2.4V17z"
        />
      </g>
    </svg>
  );
}
