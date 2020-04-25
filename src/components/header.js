import React, { useContext } from "react"
import { useStaticQuery, graphql } from "gatsby";
import { navigate, useLocation } from "@reach/router"  
import { Nav, Navbar, FormControl } from "react-bootstrap";
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
  const location = useLocation();
  const currentPath = location.pathname;

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "web-logo.png" }) {
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
    const { slug, template, title } = node.frontmatter;
    return {
      slug,
      title,
      type: template,
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

  const onBlurSearchBar = event => {
    event.target.value = "";
    closeAllSearchItems();
  };

  const closeAllSearchItems = () => {
    const autocompleteList = window.document.getElementsByClassName("autocomplete-list");
    for (let i = 0; i < autocompleteList.length; ++i) {
      autocompleteList[i].parentNode.removeChild(autocompleteList[i]);
    }
  };

  const onSearch = event => {
    closeAllSearchItems();
    const autocompleteList = window.document.createElement("div");
    autocompleteList.setAttribute("class", "autocomplete-list");
    const autocompleteContainer = window.document.getElementById("autocomplete-container");
    autocompleteContainer.appendChild(autocompleteList);

    autocompleteList.addEventListener("keydown", () => console.log("---key down---"));

    const searchedValue = event.target.value;
    if (!searchedValue) {
      closeAllSearchItems();
      return;
    };
    
    searchConfig.forEach((item, index) => {
      if (item.title.toLowerCase().includes(searchedValue.toLowerCase())) {
        const searchedItem = window.document.createElement("div");
        searchedItem.innerHTML = item.title;
        searchedItem.addEventListener("mousedown", () => {
          navigate(`/${item.slug}`)
        });
        autocompleteList.appendChild(searchedItem);
      }
    });
  };

  const onThemeChange = () => {
    toggleTheme();
  };

  return (
    <Navbar bg="dark" expand="md" sticky="top" variant="dark">
      <Navbar.Brand onClick={() => navigate("/")}>
        <img
          src={data.placeholderImage.childImageSharp.fluid.src}
          width="35"
          height="35"
          className="d-inline-block align-top"
          alt="Manish Sundriyal logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {getTabs(tabs)}
        </Nav>
        <div id="autocomplete-container" onBlur={onBlurSearchBar}>
          <FormControl type="text" placeholder="Search" className="searchbar mr-sm-2" onChange={onSearch} />
        </div>
        <div className="switch-wrapper">
          <div className="toggle-wrapper">
            <input id="switch" type="checkbox" checked={theme !== "light"} onChange={onThemeChange} />
            <label htmlFor="switch" id="toggle">Toggle</label>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header;