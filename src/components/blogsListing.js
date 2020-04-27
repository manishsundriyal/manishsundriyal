import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt } from '@fortawesome/free-solid-svg-icons';
import Categories from '../templates/components/categories';
import NewsLetter from '../templates/components/newsLetter';
import SideWidget from '../templates/components/sideWidget';

const BlogsListing = () => {
    const blogsList = [
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
    ];
    const blogs = [...blogsList];
    return (
        <div className="row justify-content-md-center">
            <Row>
                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                    {
                        blogs.map(blog => (
                            <Card className="mt-4">
                                <Card.Img variant="top" src={blog.media} alt="" />
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Text className="text-secondary">
                                        {blog.highlight}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small>{blog.date}</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                                </Card.Footer>
                            </Card>
                        ))
                    }
                </Col>
                <Col lg={4} xl={4}>
                    <NewsLetter />
                    <Categories />
                    <SideWidget />
                </Col>
            </Row>
        </div>
    );
}

export default BlogsListing;
