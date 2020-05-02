import React from 'react'
import { Row, Col, Media } from 'react-bootstrap'
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image";
import CopyToClipboard from './copyToClipboard';

const RecentBlogs = () => {
    const query = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "recentBlog.png" }) {
                childImageSharp {
                  fluid(maxWidth: 350, maxHeight: 150, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
            }
        }
    `);
    const blogsList = [
        {
            title: "A quick way for hashing passwords using Bcrypt with Nodejs",
            highlight: 'When I first came across the bcrypt module, I felt that it was fun and easy to use it for hashing passwords. According to Wikipedia “bcrypt is a password hashing function designed by Niels Provos and David Mazières, based on the Blowfish cipher”.',
            media: query.image.childImageSharp.fluid,
            date: "April 04, 2020",
        },
        {
            title: "Bubble sort in JS",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            media: query.image.childImageSharp.fluid,
            date: "April 04, 2020",
        },
        {
            title: "Insertion sort in JS",
            highlight: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",
            media: query.image.childImageSharp.fluid,
            date: "April 04, 2020",
        }
    ];
    return (
        <>
            <h1 className="heading mt-5">Recent Blogs</h1>
            <Row>
                {
                    blogsList.map(blog => {
                        return (
                            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                                <Media>
                                    <Img fluid={blog.media} alt="" className="mr-3" />
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
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    );
}

export default RecentBlogs;
