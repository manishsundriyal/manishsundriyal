import { Layout } from "@/components";
import Head from "next/head";
import React, { useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@/styles/globals.scss";

config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    const path = document.getElementById("tracerPath");
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength + " " + pathLength;
    path.style.strokeDashoffset = pathLength;
    window.addEventListener("scroll", () => {
      const scrollPercentage =
        (document.documentElement.scrollTop + document.body.scrollTop) /
        (document.documentElement.scrollHeight -
          document.documentElement.clientHeight);
      const drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;
    });
  }, []);

  return (
    <>
      <Head>
        <title>Sample app</title>
        <meta name="description" content="description content" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <div className="lineContainer">
        <svg viewBox="0 0 1500 3500" preserveAspectRatio="xMidYMax meet">
          <path d="m 200 0 v 200" stroke="#9091A0" fill="none" />
          <defs>
            <linearGradient id="grad1">
              <stop stop-color="#18CCFC"></stop>
              <stop stop-color="#18CCFC"></stop>
              <stop offset="0.325" stop-color="#6344F5"></stop>
              <stop offset="1" stop-color="#AE48FF"></stop>
            </linearGradient>
          </defs>
          <path
            id="tracerPath"
            // d="m 1100 200 v 450 c 0 0 0 100 -100 100 h -800 c 0 0 -100 0 -100 100 v 700 c 0 0 0 100 100 100 h 800 c 0 0 100 0 100 100 v 1000"
            d="m 200 200 l 0 200 c -100 200 100 200 100 400 c 0 200 -200 200 -200 400 c 0 200 200 200 200 400 c 0 200 -200 200 -200 400 c 47 158 0 200 0 300 a 100 100 90 0 0 200 0 a 100 100 90 0 0 -200 0 v 200 c 0 200 200 200 200 400 c 0 200 -200 200 -200 400 c 0 200 200 200 200 400"
            stroke="url(#grad1)"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
};

export default App;
