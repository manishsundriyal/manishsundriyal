import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';

const BlogsListing = () => {
    const blogsList = [
        [{
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        }],
        [{
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        }],
        [{
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        }],
        [{
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "April 04, 2020",
        }],
    ];
    const blogs = [...blogsList];
    return (
        <div className="row justify-content-md-center">
            {/* <h1 className="heading">Blogs</h1> */}
            {
                blogs.map(blog => {
                    const [first, second] = blog;
                    return (
                        <>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Card>
                                        <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                                        <Card.Body>
                                            <Card.Text>{first.title}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted"><FontAwesomeIcon icon={faCalendarAlt} className="mr-1" /> {first.footer} <FontAwesomeIcon icon={faClock} className="mr-1 ml-2" />3 min read</small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Card>
                                        <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                                        <Card.Body>
                                            <Card.Text>{second.title}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted"><FontAwesomeIcon icon={faCalendarAlt} className="mr-1" /> {second.footer} <FontAwesomeIcon icon={faClock} className="mr-1 ml-2" />3 min read</small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </>
                    );
                })
            }
        </div>
    );
}

export default BlogsListing;
