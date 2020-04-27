import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Button } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";
import RecentSnippets from "../components/recentSnippets";
import RecentBlogs from "../components/recentBlogs";
import HeroImage from "../components/hero-image";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      jumbotronImageXl: file(relativePath: { eq: "light-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2800, maxHeight: 580, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageLg: file(relativePath: { eq: "light-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500, maxHeight: 580, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageMd: file(relativePath: { eq: "light-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageSm: file(relativePath: { eq: "light-hero-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 719, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageXs: file(relativePath: { eq: "light-hero-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const images = [
    {
      ...data.jumbotronImageXl.childImageSharp.fluid,
    },
    {
      ...data.jumbotronImageLg.childImageSharp.fluid,
      media: `(max-width: 991px)`
    },
    {
      ...data.jumbotronImageMd.childImageSharp.fluid,
      media: `(max-width: 767px)`
    },
    {
      ...data.jumbotronImageSm.childImageSharp.fluid,
      media: `(max-width: 576px)`
    },
    {
      ...data.jumbotronImageXs.childImageSharp.fluid,
      media: `(max-width: 476px)`
    }
  ];
  return (
    <Layout>
      <SEO title="Manish Sundriyal" />
      <HeroImage>
        <h1>Interested in programming?</h1>
        <p>
          We've got tutorials and resources geared towards self-taught web developers.
        </p>
        <p>
          <Button variant="light">Check it out below!</Button>
        </p>
      </HeroImage>
      <Container>
        <RecentSnippets />
        <RecentBlogs />
      </Container>
    </Layout>
  );
}

export default IndexPage
