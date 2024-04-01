import { Layout } from "@/components";
import Head from "next/head";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/globals.scss";

config.autoAddCss = false;

const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <title>Manish Sundriyal - Software Artisan</title>
        <meta name="description" content="description content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/animated_image.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
