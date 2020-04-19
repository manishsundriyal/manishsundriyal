import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Post from "../components/post";
import RecentSnippets from "../components/recentSnippets";
import RecentBlogs from "../components/recentBlogs";
import { Container, Jumbotron, Button } from "react-bootstrap";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
        <Jumbotron fluid>
          <Container>
            <h1>Interested in programming?</h1>
            <p>
              We've got tutorials and resources geared towards self-taught web developers.
            </p>
            <p>
              <Button variant="primary">Check it out below!</Button>
            </p>
          </Container>
        </Jumbotron>
      <Container>
        <RecentSnippets />
        <RecentBlogs />
        {/* <div className="row justify-content-md-center">
          <h1>Hi people</h1>
          {
            data.allMarkdownRemark.nodes.map(node => {
              return (
                <Post image={node.frontmatter.image} title={node.frontmatter.title} excerpt={node.excerpt} readMore={node.fields.slug} />
              );
            })
          } */}
          {/* <Link to="/page-2/">Go to page 2</Link> */}
        {/* </div> */}
      </Container>
    </Layout>
  );
}

export default IndexPage

export const query = graphql`
{
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
      excerpt
      html
      fields {
        slug
      }
    }
  }
}
`;