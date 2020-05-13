import React from 'react'
import { Row, Col, Media } from 'react-bootstrap'
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from "gatsby-image";
import CopyToClipboard from './copyToClipboard';

const RecentBlogs = props => {
    const { blogs } = props;
    const query = useStaticQuery(graphql`
        query {
            allFiles: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
                edges {
                  node {
                    name
                    relativePath
                    childImageSharp {
                        fluid(maxWidth: 350, maxHeight:150, quality: 90) {
                            ...GatsbyImageSharpFluid_withWebp
                          }
                      }
                  }
                }
            }
        }
    `);

    const blogsList = blogs.map(blog => {
        const image = query.allFiles.edges.find(edge => edge.node.name === blog.media);
        return { ...blog, media: image && image.node.childImageSharp.fluid };
    })
  
    const handleClick = slug => {
        navigate(`/${slug}`);
    };

    return (
        <>
            <h1 className="heading mt-5">Recent Blogs</h1>
            <Row>
                {
                    blogsList.map(blog => {
                        return (
                            <Col xs={12} sm={12} md={6} lg={6} xl={6} key={blog.title}>
                                <Media>
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
                            </Col>
                        )
                    })
                }
            </Row>
        </>
    );
}

export default RecentBlogs;
