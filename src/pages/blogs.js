import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Button } from "react-bootstrap";
import BlogsListing from '../components/blogsListing';
import HeroImage from '../components/hero-image';
import { getDateDESCSort } from "../lib/helper";

const Blogs = props => {
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
    
    const sortedBlogs = getDateDESCSort(blogs);

    const scrollToBlogs = () => {
        const row = window.document.getElementById("blogs-listing-container");
        row.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <Layout>
            <SEO title="Blogs" />
            <HeroImage>
                <h1>Hello, Blogs!</h1>
                <p>
                    How to's, tips & tricks, new releases, and personal experiences
                </p>
                <p>
                    <Button variant="light" onClick={scrollToBlogs}>Check it out below!</Button>
                </p>
            </HeroImage>
            <Container id="blogs-listing-container">
                <BlogsListing blogs={sortedBlogs} selectedTag={props.location.state && props.location.state.tag} />
            </Container>
        </Layout>
    )
}

export default Blogs;
