import Link from "next/link";
import React, { useEffect } from "react";
import { Poppins } from "next/font/google";
import styles from "./navbar.module.scss";
import useIsSideNavOpenAtom from "@/states/sideNavOpen";
import clsx from "clsx";

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

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useIsSideNavOpenAtom();

  useEffect(() => {
    let prevScrollPosition = window.scrollY;
    window.onscroll = function() {
    var currentScrollPosition = window.scrollY;
      if (prevScrollPosition > currentScrollPosition) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-51px";
      }
      prevScrollPosition = currentScrollPosition;
    }
  }, [])

  return (
    <header className={styles.header} id="navbar">
      <nav className={styles.nav}>
        <Link className={`${styles.logo} ${poppins.className}`} href="/">
          MS Office
        </Link>
        <ul className={styles.horizontalNav}>
          {links.map((link) => (
            <li key={link.label} className={styles.desktopNavItem}>
              <Link
                href={link.path}
                className={poppins.className}
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
            <div className={clsx(styles.mobileMenuIcon, { [styles.open]: isSideNavOpen})}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </ul>
        <div className={`${styles.sideNav} ${isSideNavOpen && styles.open}`}>
          <ul className={styles.verticalNav}>
            {links.map((link) => (
              <li key={link.label} className={styles.desktopNavItem}>
                <Link
                  href={link.path}
                  className={poppins.className}
                  onClick={() => setIsSideNavOpen(false)}
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
