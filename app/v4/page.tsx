import type { Metadata } from "next";

/**
 * /v4 — deneme rotasıydı, 2026-09'da ana sayfa oldu. Gerçek yönlendirme
 * netlify.toml'da (301, force). Bu sayfa yalnız Netlify dışı bir sunucuda
 * eski linki boşa düşürmemek için.
 */
export const metadata: Metadata = {
  title: "Dolarhane",
  robots: { index: false, follow: true },
  other: { refresh: "0;url=/" },
};

export default function V4Yonlendirme() {
  return (
    <p style={{ padding: 24 }}>
      Bu sayfa taşındı: <a href="/">Dolarhane ana sayfa</a>
    </p>
  );
}
