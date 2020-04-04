import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const BlogsListing = () => {
    const blogsList = [
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
        {
            header: "This is header",
            title: "This is a wider card with supporting text below as a natural lead-in to additional content.",
            footer: "Last updated 3 mins ago",
        },
    ];
    const blogs = [...blogsList];
    return (
        <div className="row justify-content-md-center">
            {/* <h1 className="heading">Blogs</h1> */}
            {
                blogs.map(blog => {
                    return (
                        <>
                            <Row>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Card>
                                        <Card.Header>{blog.header}</Card.Header>
                                        <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                                        <Card.Body>
                                            <Card.Text>{blog.title}</Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">{blog.footer}</small>
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
