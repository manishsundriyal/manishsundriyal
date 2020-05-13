import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Button } from "react-bootstrap";
import SnippetsListing from '../components/snippetsListing';
import HeroImage from '../components/hero-image';
import { getDateDESCSort } from '../lib/helper';

const Snippets = props => {
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
    const snippets = contentList.filter(content => content.frontmatter.template === "snippet");
    const mappedSnippets = snippets.map(snippet => {
            const { date, media, slug, tags, title, description } = snippet.frontmatter;
            return { date, media, slug, tags, title, description };
        });
    const sortedSnippets = getDateDESCSort(mappedSnippets);

    const scrollToSnippets = () => {
        const row = window.document.getElementById("snippets-listing-container");
        row.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    return (
        <div>
            <Layout>
                <SEO title="Snippets" />
                <HeroImage>
                    <h1>Hello, Snippets!</h1>
                    <p>
                        Some more detail on my instagram posts
                    </p>
                    <p>
                        <Button variant="light" onClick={scrollToSnippets} >Check it out below!</Button>
                    </p>
                </HeroImage>
                <Container id="snippets-listing-container">
                    <SnippetsListing snippets={sortedSnippets} selectedTag={props.location.state.tag} />
                </Container>
            </Layout>
        </div>
    )
}

export default Snippets;
