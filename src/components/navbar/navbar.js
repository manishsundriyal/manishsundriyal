import Link from "next/link";
import React, { useEffect } from "react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const SOCIAL_LINKS = [
  {
    icon: faGithub,
    path: "https://github.com/manishsundriyal/",
  },
  {
    icon: faLinkedin,
    path: "https://linkedin.com/in/manish-kumar-sundriyal",
  },
  {
    icon: faMedium,
    path: "https://medium.com/@manishsundriyal",
  },
  {
    icon: faStackOverflow,
    path: "https://stackoverflow.com/users/7672624/manish-sundriyal",
  },
];

const poppins = Poppins({ subsets: ["latin"], weight: "500" });

const Navbar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useIsSideNavOpenAtom();

  useEffect(() => {
    let prevScrollPosition = window.scrollY;
    window.onscroll = function () {
      var currentScrollPosition = window.scrollY;
      if (prevScrollPosition > currentScrollPosition) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-51px";
      }
      prevScrollPosition = currentScrollPosition;
    };
  }, []);

  return (
    <header className={styles.header} id="navbar">
      <div
        className={clsx(styles.overlay, { [styles.visible]: isSideNavOpen })}
      ></div>
      <nav className={styles.nav}>
        <Link className={`${styles.logo} ${poppins.className}`} href="/">
          MS
        </Link>
        <ul className={styles.horizontalNav}>
          {links.map((link) => (
            <li key={link.label} className={styles.desktopNavItem}>
              <Link href={link.path} className={poppins.className}>
                {link.label}
              </Link>
            </li>
          ))}
          <div
            role="button"
            className={styles.menuButton}
            onClick={() => {
              document.body.classList.toggle("lockScroll");
              setIsSideNavOpen(!isSideNavOpen);
            }}
          >
            <div
              className={clsx(styles.mobileMenuIcon, {
                [styles.open]: isSideNavOpen,
              })}
            >
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
                  onClick={() => {
                    setIsSideNavOpen(false);
                    document.body.classList.toggle("lockScroll");
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.socialLinks}>
            {SOCIAL_LINKS.map((link) => (
              <li key={link.path}>
                <Link href={link.path} target="_blank">
                  <FontAwesomeIcon icon={link.icon} />
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
