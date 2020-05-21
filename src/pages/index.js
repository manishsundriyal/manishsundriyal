import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import { Container, Button } from "react-bootstrap";

import { getDateDESCSort } from "../lib/helper";
import Layout from "../components/layout";
import SEO from "../components/seo";
import RecentSnippets from "../components/recentSnippets";
import RecentBlogs from "../components/recentBlogs";
import HeroImage from "../components/hero-image";

const IndexPage = () => {
  const query = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
            template
            slug
            tags
            description
            media
          }
        }
      }
    }
  `);

  const contentList = [...query.allMarkdownRemark.nodes];
  const blogs = contentList.filter(content => content.frontmatter.template === "blog")
    .map(content => {
      const { date, media, slug, tags, title, description } = content.frontmatter;
      return { date, media, slug, tags, title, description };
    });

  const snippets = contentList.filter(content => content.frontmatter.template === "snippet")
    .map(content => {
      const { date, media, slug, tags, title, description } = content.frontmatter;
      return { date, media, slug, tags, title, description };
    });

  
  const recentSortedBlogs = getDateDESCSort(blogs).slice(0, 4);
  const recentSortedSnippets = getDateDESCSort(snippets).slice(0, 4);

  console.log("---env---", process.env.NODE_ENV);

  return (
    <Layout>
      <SEO title="Full Stack Developer" />
      <HeroImage>
        <h1>Hello, World!</h1>
        <p>
          I am Manish Sundriyal, I use this space to share my content.
        </p>
        <p>
          <Button variant="light" onClick={() => navigate("/about")}>About me</Button>
        </p>
      </HeroImage>
      <Container>
        <RecentSnippets snippets={recentSortedSnippets} />
        <RecentBlogs blogs={recentSortedBlogs} />
      </Container>
    </Layout>
  );
}

export default IndexPage
