import { MetaTags } from "@/components/MetaTags/MetaTags";
import { dataConfig } from "@/data/global";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";

const plusJakartaSans = Plus_Jakarta_Sans({
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  const { seoGlobal } = dataConfig;

  return (
    <>
      <Head>
        <MetaTags seoValues={seoGlobal} />
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
