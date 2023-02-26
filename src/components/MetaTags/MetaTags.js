import { dataConfig } from "@/data/global";

export function MetaTags({ seoValues }) {
  const { seoGlobal } = dataConfig;
  const seo = { ...seoGlobal, seoValues };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="icon" href="/favicon.png" />

      <link rel="canonical" href="https://lillymed.com.br" />

      {/* Primary Meta Tags */}
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="referrer" content="always" />

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large" />

      {/* Associate this page to Lilly brand */}
      <link href="https://www.lillyestetica.com.br" rel="author" />
      <link href="https://www.lillyestetica.com.br" rel="publisher" />

      {/* Open Graph / Facebook */}
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Lilly Med" />
      <meta property="og:url" content="https://lillymed.com.br" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta
        property="og:image"
        content="https://lillyestetica.com.br/images/tratamentos/cover-criofrequencia.jpg"
      />
      <meta property="og:image:alt" content="Lilly Med" />
      <meta property="og:image:width" content="828" />
      <meta property="og:image:height" content="500" />

      {/* Twitter */}
      <meta name="twitter:site" content="@lilly_estetica" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="lillyestetica.com.br" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="twitter:url" content="https://lillymed.com.br" />
      <meta
        name="twitter:image"
        content="https://lillyestetica.com.br/images/tratamentos/cover-criofrequencia.jpg"
      />

      {/* Apps */}
      <meta name="apple-itunes-app" content="app-id=1607382354" />
      <meta name="google-play-app" content="app-id=br.com.lillyestetica.app" />
    </>
  );
}
