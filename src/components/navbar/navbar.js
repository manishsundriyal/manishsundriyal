import Link from "next/link";
import React, { useState } from "react";
import { Red_Hat_Text, Lato } from "next/font/google";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.scss";

const links = [
  {
    label: "Blogs",
    path: "/blogs",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Mentorship",
    path: "/mentorship",
  },
];

const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: "500" });
const latoText = Lato({ subsets: ["latin"], weight: "900" });

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useIsSideNavOpenAtom();
  return (
    <nav className={styles.nav}>
      <ul className={styles.horizontalNav}>
        <li>
          <Link className={`${styles.logo} ${latoText.className}`} href="/">
            CODE
            <br />
            MASHEEN.
          </Link>
        </li>
        {links.map((link) => (
          <li key={link.label} className={styles.desktopNavItem}>
            <Link
              href={link.path}
              className={`${redHatText.className} ${styles.underline}`}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <div
          role="button"
          className={styles.menuButton}
          onClick={() => setIsSideNavOpen(!isSideNavOpen)}
        >
          {isSideNavOpen ? (
            // <FontAwesomeIcon icon={faXmark} />
            "Close"
          ) : (
            // <FontAwesomeIcon icon={faBars} />
            "Open"
          )}
        </div>
      </ul>
      <div className={`${styles.sideNav} ${isSideNavOpen && styles.open}`}>
        <ul className={styles.verticalNav}>
          {links.map((link) => (
            <li key={link.label} className={styles.desktopNavItem}>
              <Link
                href={link.path}
                className={`${redHatText.className} ${styles.underline}`}
                >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;