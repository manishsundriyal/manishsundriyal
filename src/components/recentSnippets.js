import React from 'react'
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import CopyToClipboard from "./copyToClipboard";

const RecentSnippets = () => {
    const query = useStaticQuery(graphql`
        query {
            image1: file(relativePath: { eq: "recentImage1.png" }) {
                childImageSharp {
                  fluid(maxWidth: 253, maxHeight:253, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            image2: file(relativePath: { eq: "recentImage2.png" }) {
                childImageSharp {
                    fluid(maxWidth: 253, maxHeight:253, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            image3: file(relativePath: { eq: "recentImage3.png" }) {
                childImageSharp {
                    fluid(maxWidth: 253, maxHeight:253, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            image4: file(relativePath: { eq: "recentImage4.png" }) {
                childImageSharp {
                    fluid(maxWidth: 253, maxHeight:253, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    const snippets = [
        {
            title: "Asymptotic Notations",
            date: "April 04, 2020",
            media: query.image1.childImageSharp.fluid,
        },
        {
            title: "Asymptotic Analysis",
            date: "April 04, 2020",
            media: query.image2.childImageSharp.fluid,
        },
        {
            title: "Practice Problems - III (Recursion)",
            date: "April 04, 2020",
            media: query.image3.childImageSharp.fluid,
        },
        {
            title: "Bubble Sort JS",
            date: "April 04, 2020",
            media: query.image4.childImageSharp.fluid,
        }
    ];
    return (
        <>
            <h1 className="heading">Recent Snippets</h1>
            <Row>
                {
                    snippets.map(snippet => {
                        return (
                            <Col className="col-snippet-md" xs={12} sm={6} md={4} lg={3} xl={3}>
                                <Card className="snippet">
                                    <Img fluid={snippet.media} alt="" className="card-img-top" />
                                    <Card.Body className="snippet-heading">
                                        <OverlayTrigger
                                            placement="bottom-start"
                                            delay={{ show: 1000 }}
                                            overlay={<Tooltip>{snippet.title}</Tooltip>}
                                            >
                                            <span>{snippet.title}</span>
                                        </OverlayTrigger>
                                        <Card.Text>
                                            <small>{snippet.date}</small> <CopyToClipboard />
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    );
}

export default RecentSnippets;
