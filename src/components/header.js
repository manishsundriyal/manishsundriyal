import React, { useState, useContext, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby";
import { navigate, useLocation } from "@reach/router"
import { Nav, Navbar } from "react-bootstrap";
import Img from "gatsby-image";
import { ThemeContext } from "../context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
  const { theme, toggleTheme, toggleDrawer } = useContext(ThemeContext);
  const [showSearchInput, setShowSearchInput] =  useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "web-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 35, maxHeight: 40, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
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

  useEffect(() => {
    const searchBar = window.document.getElementById("search-bar");
    if (showSearchInput) {
      searchBar.classList.add("open");
      const searchInput = window.document.getElementById("search-input");
      searchInput.focus();
    } else {
      searchBar.classList.remove("open");
    }

  }, [showSearchInput])

  return (
    <Navbar bg="dark" expand="md" sticky="top" variant="dark">
      <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas" onClick={toggleDrawer} style={{ outline: "none"}}>        
        <div id="hamburger-icon" className="hamburger-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <Navbar.Brand onClick={() => navigate("/")}>
        <div style={{ height: "35px", width: "40px" }} className="d-inline-block align-top">
          <Img fluid={data.placeholderImage.childImageSharp.fluid} alt="Manish Sundrial logo"/>
        </div>
      </Navbar.Brand>
      <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <Nav className="mr-auto">
          {getTabs(tabs)}
        </Nav>
      </div>
      <div id="autocomplete-container" onBlur={onBlurSearchBar}>
        <div class="searchbar" id="search-bar">
            <input id="search-input" class="search_input" type="text" name="" placeholder="Search for..." onChange={onSearch} onBlur={() => setShowSearchInput(!showSearchInput)} autocomplete="off"/>
            <i onClick={() => !showSearchInput && setShowSearchInput(true)} className="search_icon"><FontAwesomeIcon icon={faSearch} className="mr-1" /></i>
        </div>
      </div>
    </Navbar>
  )
};

export default Header;