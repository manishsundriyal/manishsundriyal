import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

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
    return (
        <>
            <h1 className="heading">Recent Snippets</h1>
            <Row className="mt-4">
                <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Card>
                        <Img fluid={query.image1.childImageSharp.fluid} alt="" className="card-img-top" />
                        <Card.Body>
                            Asymptotic Notations
                                <Card.Text>
                                <small>April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Card>
                        <Img fluid={query.image2.childImageSharp.fluid} alt="" className="card-img-top" />
                        <Card.Body>
                            Asymptotic Analysis
                                <Card.Text>
                                <small>April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Card>
                        <Img fluid={query.image3.childImageSharp.fluid} alt="" className="card-img-top" />
                        <Card.Body>
                            Practice Problems - III (Recursion)
                                <Card.Text>
                                <small>April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                    <Card>
                        <Img fluid={query.image4.childImageSharp.fluid} alt="" className="card-img-top" />
                        <Card.Body>
                            How to calculate?
                                <Card.Text>
                                <small>April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default RecentSnippets;
