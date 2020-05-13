import React, { useState } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Img from "gatsby-image";
// import NewsLetter from '../templates/components/newsLetter';
import Categories from '../templates/components/categories';
// import SideWidget from '../templates/components/sideWidget';
import CopyToClipboard from './copyToClipboard';
import RecentPosts from '../templates/components/recentPosts';

const SnippetsListing = props => {
    const { snippets = [], selectedTag = "" } = props;
    const [tag, setTag] = useState(selectedTag);
    const query = useStaticQuery(graphql`
        query {
            allFiles: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                  node {
                    name
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 253, maxHeight:253, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                  }
                }
            }
        }
    `);


    let snippetsList = snippets.map(snippet => {
        const image = query.allFiles.edges.find(edge => edge.node.name === snippet.media);
        return { ...snippet, media: image && image.node.childImageSharp.fluid };
    });

    if (tag) {
        snippetsList = snippetsList.filter(snippet => snippet.tags.includes(tag));
    }


    const handleClick = slug => {
        navigate(`/${slug}`);
    };

    return (
        <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                <Row>
                    {
                        snippetsList.map(snippet => {
                            return (
                                <Col className="col-snippet-md" xs={12} sm={6} md={6} lg={4} xl={4} key={snippet.title}>
                                    <Card className="snippet">
                                        <div onClick={() => handleClick(snippet.slug)}>
                                            <Img fluid={snippet.media} alt="" className="card-img-top" />
                                        </div>
                                        <Card.Body className="snippet-heading">
                                        <OverlayTrigger
                                            placement="bottom-start"
                                            delay={{ show: 1000 }}
                                            overlay={<Tooltip>{snippet.title}</Tooltip>}
                                            >
                                            <span onClick={() => handleClick(snippet.slug)}>{snippet.title}</span>
                                        </OverlayTrigger>
                                            <Card.Text>
                                                <small>{snippet.date}</small> <CopyToClipboard slug={snippet.slug}/>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                {/* <NewsLetter /> */}
                <RecentPosts />
                <Categories type="snippet" onSelect={setTag} />
                {/* <SideWidget /> */}
            </Col>
        </Row>
    );
}

export default SnippetsListing;
