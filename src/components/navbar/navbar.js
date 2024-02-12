import Link from "next/link";
import React from "react";
import { Red_Hat_Text, Lato } from "next/font/google";
import styles from "./navbar.module.scss";
import useIsSideNavOpenAtom from "@/states/sideNavOpen";

const links = [
  {
    label: "About",
    path: "#about",
  },
  {
    label: "Experience",
    path: "#experience",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

const redHatText = Red_Hat_Text({ subsets: ["latin"], weight: "500" });
const latoText = Lato({ subsets: ["latin"], weight: "900" });

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useIsSideNavOpenAtom();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link className={`${styles.logo} ${latoText.className}`} href="/">
          MS Office
        </Link>
        <ul className={styles.horizontalNav}>
          {links.map((link) => (
            <li key={link.label} className={styles.desktopNavItem}>
              <Link
                href={link.path}
                className={redHatText.className}
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
            {isSideNavOpen
              ? // <FontAwesomeIcon icon={faXmark} />
                "Close"
              : // <FontAwesomeIcon icon={faBars} />
                "Open"}
          </div>
        </ul>
        <div className={`${styles.sideNav} ${isSideNavOpen && styles.open}`}>
          <ul className={styles.verticalNav}>
            {links.map((link) => (
              <li key={link.label} className={styles.desktopNavItem}>
                <Link
                  href={link.path}
                  className={redHatText.className}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
