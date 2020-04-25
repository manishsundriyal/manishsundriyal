import React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import RecentSnippets from "../components/recentSnippets";
import RecentBlogs from "../components/recentBlogs";
import { Container, Jumbotron, Button, Col, Row } from "react-bootstrap";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Manish Sundriyal" />
        <Jumbotron fluid>
          <Container>
            <Row>
              <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                <h1>Interested in programming?</h1>
                <p>
                  We've got tutorials and resources geared towards self-taught web developers.
                </p>
                <p>
                  <Button variant="light">Check it out below!</Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      <Container>
        <RecentSnippets />
        <RecentBlogs />
      </Container>
    </Layout>
  );
}

export default IndexPage
