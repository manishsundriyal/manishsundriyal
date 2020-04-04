import React from 'react'

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Jumbotron, Button } from "react-bootstrap";
import BlogsListing from '../components/blogsListing';

const Blogs = () => {
    return (
        <div>
            <Layout>
                <SEO title="Blogs" />
                <Jumbotron fluid>
                    <Container>
                        <h1>We've got some real cool Blogs</h1>
                        <p>
                            We've got tutorials and resources geared towards self-taught web developers.
                        </p>
                    </Container>
                </Jumbotron>
                <Container>
                    <BlogsListing />
                </Container>
            </Layout>
        </div>
    )
}

export default Blogs;
