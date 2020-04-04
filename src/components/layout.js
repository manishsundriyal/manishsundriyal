/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import Footer from "./footer";
import "../styles/global.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Layout = ({ children }) => {

  // useEffectgh n
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

  window.addEventListener("scroll", runOnScroll);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const renderTooltip = props => {
    return (
      <Tooltip id="button-tooltip" {...props}>
        Return to top
      </Tooltip>
    );
  }

  return (
    <>
      <OverlayTrigger
        placement="top"
        delay={{ show: 250, hide: 0 }}
        overlay={renderTooltip}
      >
        <span href="javascript:" onClick={scrollToTop} id="return-to-top">☝</span>
      </OverlayTrigger>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      {/* <div> */}
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      {/* </div> */}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
