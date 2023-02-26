import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const plusJakartaSans = Plus_Jakarta_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" href="/favicon.png" />

        <link rel="canonical" href="https://lillymed.com.br" />

        {/* Primary Meta Tags */}
        <meta name="title" content="Lilly Med - Medicina Estética" />
        <meta
          name="description"
          content="Lilly Med é o maior clube de estética de alta tecnologia do Brasil. Tratamentos estéticos e depilação a laser por preços acessíveis e atendimento personalizado. Conheça nossas clínicas."
        />
        <meta
          name="keywords"
          content="Lilly Med, medicina estética, alta tecnologia, tratamentos estéticos, preços acessíveis, atendimento personalizado, depilação a laser"
        />
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
        <meta property="og:title" content="Lilly Med - Medicina Estética" />
        <meta
          property="og:description"
          content="Lilly Med é o maior clube de estética de alta tecnologia do Brasil. Tratamentos estéticos e depilação a laser por preços acessíveis e atendimento personalizado. Conheça nossas clínicas."
        />
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
        <meta name="twitter:title" content="Lilly Med - Medicina Estética" />
        <meta
          name="twitter:description"
          content="Lilly Med é o maior clube de estética de alta tecnologia do Brasil. Tratamentos estéticos e depilação a laser por preços acessíveis e atendimento personalizado. Conheça nossas clínicas."
        />
        <meta property="twitter:url" content="https://lillymed.com.br" />
        <meta
          name="twitter:image"
          content="https://lillyestetica.com.br/images/tratamentos/cover-criofrequencia.jpg"
        />

        {/* Apps */}
        <meta name="apple-itunes-app" content="app-id=1607382354" />
        <meta
          name="google-play-app"
          content="app-id=br.com.lillyestetica.app"
        />
      </Head>
      <style jsx global>{`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: ${plusJakartaSans.style.fontFamily};
        }

        :root {
          --breakpoint-small: 576px;
          --breakpoint-medium: 768px;
          --breakpoint-large: 992px;
          --breakpoint-xlarge: 1200px;

          --zindex-negative: -1;
          --zindex-neutro: 0;
          --zindex-level1: 10;
          --zindex-level2: 20;
          --zindex-level3: 30;
          --zindex-level4: 40;
          --zindex-level5: 50;
          --zindex-supreme: 100;

          --mobile-aisle-margin: 1.25rem;
        }

        html,
        body,
        #__next {
          display: block;
          height: 100%;
        }

        body {
          background-color: #efefef;
        }

        .container {
          display: block;
          margin: 0 32px;
          max-width: 1456px;
          height: 100%;
        }

        @media (min-width: var(--breakpoint-xlarge)) {
          .container {
            margin: 0;
          }
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
