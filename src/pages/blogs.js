import React from 'react'

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Jumbotron, Button, Row, Col } from "react-bootstrap";
import BlogsListing from '../components/blogsListing';

const Blogs = () => {
    return (
        <Layout>
            <SEO title="Blogs" />
            <Jumbotron fluid>
                <Container>
                    <Row>
                        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                            <h1>We've got some real cool Blogs</h1>
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
                <BlogsListing />
            </Container>
        </Layout>
    )
}

export default Blogs;
