import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Card, Row, Col } from "react-bootstrap";

const Categories = props => {
    const { type, onSelect } = props;
    const query = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                nodes {
                    frontmatter {
                        template
                        tags
                    }
                }
            }
        }
    `);
    
    const tags = [...query.allMarkdownRemark.nodes];
    const typeTags = tags.filter(content => content.frontmatter.template === type)
        .map(content => content.frontmatter.tags);
    const typeTagsFlat = [].concat.apply([], typeTags);
    const uniqueTags = typeTagsFlat.filter((tag, index, list) => list.indexOf(tag) === index);
    const firstHalf = [...uniqueTags];
    const mid = Math.ceil(firstHalf.length / 2);
    const secondHalf = firstHalf.splice(0, mid);

    return (
        <Card className="my-4">
            <Card.Header>Categories</Card.Header>
            <Card.Body>
                <Row className="mb-0">
                    <Col className="mt-0" xs={6} sm={6} md={6} lg={6} xl={6}>
                        <ul className="list-unstyled mb-0">
                            <li className="mb-2">
                                <span className="tag" onClick={() => onSelect("")}>All</span>
                            </li>
                            {
                                firstHalf.map(tag => {
                                    return (
                                        <li className="mb-2" key={tag}>
                                            <span className="tag" onClick={() => onSelect(tag)}>{tag}</span>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </Col>
                    <Col className="mt-0" xs={6} sm={6} md={6} lg={6} xl={6}>
                        <ul className="list-unstyled mb-0">
                            {
                                secondHalf.map(tag => {
                                    return (
                                        <li className="mb-2" key={tag}>
                                            <span className="tag" onClick={() => onSelect(tag)}>{tag}</span>
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

export default Categories;
