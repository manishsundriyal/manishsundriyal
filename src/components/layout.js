/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // useEffect(() => {
  //   const elem = document.getElementById("terminal");
  //   if (elem.requestFullscreen) {
  //       elem.requestFullscreen();
  //   } else if (elem.mozRequestFullScreen) { /* Firefox */
  //       elem.mozRequestFullScreen();
  //   } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
  //       elem.webkitRequestFullscreen();
  //   } else if (elem.msRequestFullscreen) { /* IE/Edge */
  //       elem.msRequestFullscreen();
  //   }
  // }, []);

  const fullScreen = () => {
    const elem = document.getElementById("terminal");
      if (elem.requestFullscreen) {
          elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
          elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
          elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
          elem.msRequestFullscreen();
      }
  };

  return (
    <div id="terminal">
      <div id="windowheader" class="title-bar">
        <button class="close"></button>
        <button class="minimize"></button>
        <button class="maximize"></button>
      </div>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
