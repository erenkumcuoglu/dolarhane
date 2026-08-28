/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,

  /* Netlify statik barındırma: sayfanın tamamı zaten önceden oluşturuluyor,
     sunucu tarafı hiçbir özellik kullanılmıyor. `export` ile build `out/`
     dizinine düz HTML/CSS/JS bırakır; Netlify'ın Next runtime eklentisine
     gerek kalmaz, hareketli parça sayısı azalır. */
  output: "export",

  /* Statik dışa aktarımda görüntü optimizasyonu sunucu istiyor; next/image
     kullanmıyoruz ama gerçek ev fotoğrafları geldiğinde bu satır lazım olacak. */
  images: { unoptimized: true },

  /* Netlify her yolu klasör/index.html olarak sunar — trailing slash
     tutarlılığı 404'leri önlüyor. */
  trailingSlash: true,
};
