import React, { useState } from 'react';
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from "gatsby-image";
import { Row, Col, Media } from 'react-bootstrap';
import Categories from '../templates/components/categories';
// import NewsLetter from '../templates/components/newsLetter';
// import SideWidget from '../templates/components/sideWidget';
import CopyToClipboard from './copyToClipboard';
import RecentPosts from '../templates/components/recentPosts';

const BlogsListing = props => {
    const { blogs = [], selectedTag = "" } = props;
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

    let blogsList = blogs.map(blog => {
        const image = query.allFiles.edges.find(edge => edge.node.name === blog.media);
        return { ...blog, media: image && image.node.childImageSharp.fluid };
    });

    if (tag) {
        blogsList = blogsList.filter(blog => blog.tags.includes(tag));
    }

    const handleClick = slug => {
        navigate(`/${slug}`);
    };

    return (
        <div>
            <Row>
                <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                    {
                        blogsList.map(blog => (
                            <Media className="mt-4" key={blog.title}>
                                <div onClick={() => handleClick(blog.slug)}>
                                    <Img fluid={blog.media} alt="" className="mr-3 media-img" />
                                </div>
                                <Media.Body className="media-blog-body">
                                    <h5 onClick={() => handleClick(blog.slug)}>{blog.title}</h5>
                                    <p className="text-secondary media-blog-summary">
                                        {blog.description}
                                    </p>
                                    <span className="position-absolute media-blog-footer">
                                        <small>{blog.date}</small><CopyToClipboard slug={blog.slug}/>
                                    </span>
                                </Media.Body>
                            </Media>
                        ))
                    }
                </Col>
                <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                    {/* <NewsLetter /> */}
                    <RecentPosts />
                    <Categories type="blog" onSelect={setTag} />
                    {/* <SideWidget /> */}
                </Col>
            </Row>
        </div>
    );
}

export default BlogsListing;
