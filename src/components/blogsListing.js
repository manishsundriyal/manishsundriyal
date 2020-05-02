import React from 'react'
import { Card, Row, Col, Media, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import Categories from '../templates/components/categories';
import NewsLetter from '../templates/components/newsLetter';
import SideWidget from '../templates/components/sideWidget';
import CopyToClipboard from './copyToClipboard';

const BlogsListing = () => {
    const blogsList = [
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: 'When I first came across the bcrypt module, I felt that it was fun and easy to use it for hashing passwords. According to Wikipedia “bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher”.',
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "Bubble sort in JS",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "Insertion sort in JS",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "Selection sort in JS",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "Merge sort in JS",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        },
        {
            title: "Quick sort in JS",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            media: "https://miro.medium.com/max/1400/1*sMVUfKt06jxJIhjPjFaRWQ.png",
            date: "April 04, 2020",
        }
    ];
    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    {
                        blogsList.map(blog => (
                            <Media className="mt-4">
                                <Image
                                    className="mr-3"
                                    src={blog.media}
                                    alt=""
                                />
                                <Media.Body className="media-blog-body">
                                    <h5>{blog.title}</h5>
                                    <p className="text-secondary media-blog-summary">
                                        {blog.highlight}
                                    </p>
                                    <span className="position-absolute media-blog-footer">
                                        <small>{blog.date}</small><CopyToClipboard />
                                    </span>
                                </Media.Body>
                            </Media>
                        ))
                    }
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    <NewsLetter />
                    <Categories />
                    <SideWidget />
                </Col>
            </Row>
        </div>
    );
}

export default BlogsListing;
