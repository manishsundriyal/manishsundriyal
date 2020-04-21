/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Header from "./header";
import Footer from "./footer";
import "../styles/global.css";
import { ThemeProvider } from "../context";

config.autoAddCss = false


const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const runOnScroll = () => {
    const returnToTop = window.document.getElementById("return-to-top");
    const scrollPosition = window.document.documentElement.scrollTop
    if (scrollPosition > 500) {
      returnToTop.classList.add("show");
    } else {
      returnToTop.classList.remove("show");
    }
  };

  const scrollToTop = () => {
    window.document.documentElement.scrollTo(0,0);
  };

  useEffect(() => {
    window.addEventListener("scroll", runOnScroll);
  });


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const renderTooltip = props => {
    return (
      <Tooltip {...props}>
        Return to top
      </Tooltip>
    );
  }

  window.document.body.style.background = theme === "light" ? "#fff" : "#222";
  window.document.body.style.color = theme === "light" ? "#444452" : "#fff";
  return (
    <>
      <ThemeProvider value={{
        toggleTheme,
        theme,
      }
      }>
        <OverlayTrigger
          className="trigger"
          placement="top"
          delay={{ hide: 0 }}
          overlay={renderTooltip}
        >
          <span onClick={scrollToTop} id="return-to-top">☝</span>
        </OverlayTrigger>
        <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
