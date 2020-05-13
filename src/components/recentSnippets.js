import React from 'react'
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { useStaticQuery, graphql, navigate } from 'gatsby';
import Img from "gatsby-image";
import CopyToClipboard from "./copyToClipboard";

const RecentSnippets = props => {
    const { snippets } = props;

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

    const snippetsList = snippets.map(snippet => {
        const image = query.allFiles.edges.find(edge => edge.node.name === snippet.media);
        return { ...snippet, media: image && image.node.childImageSharp.fluid };
    });

    const handleClick = slug => {
        navigate(`/${slug}`);
    };

    return (
        <>
            <h1 className="heading">Recent Snippets</h1>
            <Row>
                {
                    snippetsList.map(snippet => {
                        return (
                            <Col className="col-snippet-md" xs={12} sm={6} md={4} lg={3} xl={3} key={snippet.title}>
                                <Card className="snippet">
                                    <div onClick={() => handleClick(snippet.slug)}>
                                        <Img fluid={snippet.media} alt="" className="card-img-top"/>
                                    </div>
                                    <Card.Body className="snippet-heading">
                                        <OverlayTrigger
                                            placement="bottom-start"
                                            delay={{ show: 1000 }}
                                            overlay={<Tooltip>{snippet.title}</Tooltip>}
                                            >
                                            <span onClick={() => handleClick(snippet.slug)}>{snippet.title}</span>
                                        </OverlayTrigger>
                                        <Card.Text>
                                            <small>{snippet.date}</small> <CopyToClipboard slug={snippet.slug}/>
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
