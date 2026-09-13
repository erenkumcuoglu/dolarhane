/**
 * JSON-LD'yi sayfaya basar.
 *
 * `dangerouslySetInnerHTML` burada doğru araç: React, script içeriğini
 * aksi halde metin olarak kaçırır ve şema geçersiz olur. Girdi bizim
 * ürettiğimiz nesne, kullanıcı girdisi değil; yine de `<` kaçırılıyor
 * (JSON içine gömülü bir "</script>" sayfayı kırardı).
 */
export function Jsonld({ veri }: { veri: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(veri).replace(/</g, "\\u003c"),
      }}
    />
  );
}
