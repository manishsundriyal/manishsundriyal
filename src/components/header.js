import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import { navigate, useLocation } from "@reach/router"  
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

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
    }
  `);

  const isActiveTab = path => {
    return path === currentPath ? "active" : "";
  }
  const getTabs = (tabList = []) => {
    return tabList.map(tab => {
      return (
        <Nav.Link onClick={() => navigate(tab.path)} className={isActiveTab(tab.path)}>{tab.content}</Nav.Link>
      )
    })
  };

  return (
    <Navbar bg="dark" expand="lg" sticky="top" variant="dark">
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
          <FormControl type="text" placeholder="Search" className="mr-sm-2" size="sm" />
          <Button variant="outline-success" size="sm">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default Header
