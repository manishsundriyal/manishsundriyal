import React from "react";
import styles from "./layout.module.scss";
import clsx from "clsx";
import { Source_Sans_3 } from "next/font/google";
import { Footer, Navbar, SocialList } from "@/components";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={clsx(styles.mainSection, sourceSans.className)}>
        <div className={styles.container} style={{ height: "100%" }}>
          {children}
        </div>
      </main>
      <SocialList />
      <Footer />
    </>
  );
};

export default Layout;
