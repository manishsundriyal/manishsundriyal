import React from 'react'

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Button } from "react-bootstrap";
import BlogsListing from '../components/blogsListing';
import HeroImage from '../components/hero-image';

const Blogs = () => {
    return (
        <Layout>
            <SEO title="Blogs" />
            <HeroImage>
                <h1>We've got some real cool Blogs</h1>
                <p>
                    We've got tutorials and resources geared towards self-taught web developers.
                </p>
                <p>
                    <Button variant="light">Check it out below!</Button>
                </p>
            </HeroImage>
            <Container>
                <BlogsListing />
            </Container>
        </Layout>
    )
}

export default Blogs;
