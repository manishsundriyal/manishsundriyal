import React from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { Card, Row, Col } from "react-bootstrap";
import { getDateDESCSort } from "../../lib/helper";

const RecentPosts = () => {
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
    const recentPosts = contentList.map(content => {
            const { slug, title, date } = content.frontmatter;
            return { slug, title, date };
        });

    const sortedRecentPosts = getDateDESCSort(recentPosts).slice(0, 3);

    return (
        <Card className="my-4">
            <Card.Header>Recent Snippets & Blogs</Card.Header>
            <Card.Body>
                <Row className="mb-0">
                    <Col className="mt-0" xs={12} sm={12} md={12} lg={12} xl={12}>
                        <ul className="list-unstyled mb-0">
                            {
                                sortedRecentPosts.map(post => {
                                    return (
                                        <li className="mb-2" key={post.title}>
                                            <a href="#" onClick={() => navigate(`/${post.slug}`)}>{post.title}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default RecentPosts;
