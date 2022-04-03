import Head from "next/head";

import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Biniyam Moges</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
