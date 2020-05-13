import React from 'react'
import { graphql, navigate } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";
import Categories from '../components/categories';
// import SideWidget from '../components/sideWidget';
import RecentPosts from "../components/recentPosts";
// import NewsLetter from '../components/newsLetter';
import Layout from "../../components/layout";
import SEO from '../../components/seo';
import SocialMediaWidget from '../components/socialMediaWidget';

const Template1 = ({ data }) => {
    const post = data.markdownRemark;
    const { title, tags = [], description } = post.frontmatter;
    const handleTagChange = tag => {
        navigate("/snippets", { state: { tag }});
    }
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
                        {/* <NewsLetter /> */}
                        <RecentPosts />
                        <Categories type="snippet" onSelect={handleTagChange} />
                        <SocialMediaWidget />
                        {/* <SideWidget /> */}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Template1;

export const query = graphql`
query SnippetBySlug($slug: String!) {
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