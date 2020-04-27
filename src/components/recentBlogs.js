import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";

const RecentBlogs = () => {
    const query = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "recentBlog.png" }) {
                childImageSharp {
                  fluid(quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            }
        }
    `);
    return (
        <>
            <h1 className="heading">Recent Blogs</h1>
            <Row className="mt-4">
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Card>
                        <Img fluid={query.image.childImageSharp.fluid} alt="" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>A quick way for hashing passwords using Bcrypt with Nodejs</Card.Title>
                            <Card.Text className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Card>
                        <Img fluid={query.image.childImageSharp.fluid} alt="" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>A quick way for hashing passwords using Bcrypt with Nodejs</Card.Title>
                            <Card.Text className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={4}>
                    <Card>
                        <Img fluid={query.image.childImageSharp.fluid} alt="" className="card-img-top" />
                        <Card.Body>
                            <Card.Title>A quick way for hashing passwords using Bcrypt with Nodejs</Card.Title>
                            <Card.Text className="text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...
                                </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small>April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default RecentBlogs;
