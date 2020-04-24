import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby";
import { navigate, useLocation } from "@reach/router"  
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from "../context";

const tabs = [
  {
    content: "Home",
    path: "/",
  },
  {
    content: "Snippets",
    path: "/snippets",
  },
  {
    content: "Blogs",
    path: "/blogs",
  },
  {
    content: "About",
    path: "/about",
  },
  {
    content: "Contact",
    path: "/contact",
  }
];

const Header = props => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log("--theme---", theme);
  const location = useLocation();
  const currentPath = location.pathname;

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            template
            slug
            title
          }
        }
      }
    }
  `);

  const searchConfig = data.allMarkdownRemark.nodes.map(node => {
    const { slug, type, title } = node.frontmatter;
    return {
      slug,
      type,
      title,
    };
  });

  const isActiveTab = path => {
    return path === currentPath ? "active" : "";
  }
  const getTabs = (tabList = []) => {
    return tabList.map(tab => {
      return (
        <Nav.Link onClick={() => navigate(tab.path)} key={tab.content} className={isActiveTab(tab.path)}>{tab.content}</Nav.Link>
      )
    })
  };

  const onSearch = event => {
    // console.log("--value---", event.target.value);
  };

  const onThemeChange = () => {
    toggleTheme();
  };

  return (
    <Navbar bg="dark" expand="md" sticky="top" variant="dark">
      <Navbar.Brand href="#home">
        <img
          src={data.placeholderImage.childImageSharp.fluid.src}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {getTabs(tabs)}
        </Nav>
        <Form inline>
        <FormControl type="search" placeholder="Search" className="searchbar mr-sm-2" />
        </Form>
        <div className="switch-wrapper">
          <div className="toggle-wrapper">
            <input id="switch" type="checkbox" checked={theme !== "light"} onChange={onThemeChange} />
            <label for="switch" id="toggle">Toggle</label>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;