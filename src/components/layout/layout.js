import React from "react";
import styles from "./layout.module.scss";
import clsx from "clsx";
import { Poppins } from 'next/font/google';
import { Navbar, SocialList } from "@/components";

const poppins = Poppins({ subsets: ["latin"], weight: "400", display: "swap" });


const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={clsx(styles.mainSection, poppins.className)}>
        <div
          className={styles.container}
          style={{ height: "100%" }}
          >
          {children}
        </div>
      </main>
      <SocialList />
    </>
  );
};

export default Layout;
