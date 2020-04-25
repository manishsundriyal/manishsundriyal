import React from 'react'
import { graphql } from "gatsby";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import Categories from '../components/categories';
import SideWidget from '../components/sideWidget';
import NewsLetter from '../components/newsLetter';
import Layout from "../../components/layout";
import { navigate, useLocation } from "@reach/router";  
import SEO from '../../components/seo';

const Template1 = ({ data }) => {
    const post = data.markdownRemark;
    const { title, tags = [], description } = post.frontmatter;
    return (
        <Layout>
            <SEO title={title} description={description} />
            <Container>
                <Row>
                    <Col lg={8} xl={8}>
                        <h1 className="mt-4">{title}</h1>
                        <hr />
                        <div className="mt-4 main-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                        <hr />
                        <div className="tag">
                            {tags.map(tag => <span key={tag}>{tag}</span>) }
                        </div>
                    </Col>
                    <Col lg={4} xl={4}>
                        <NewsLetter />
                        <Categories />
                        <SideWidget />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Template1;

export const query = graphql`
query BlogBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
        html
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
`;