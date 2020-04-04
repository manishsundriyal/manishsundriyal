import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const SnippetsListing = () => {
    const snippetsList = [
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
    const snippets = [];
    const colSize = 4;
    while(snippetsList.length) snippets.push(snippetsList.splice(0, colSize));
    return (
        <>
            {/* <h1 className="heading">Snippets</h1> */}
            {
                snippets.map(snippetRow => {
                    const row = snippetRow.map(snippet => {
                        return (
                            <Col xs={12} sm={6} md={6} lg={3} xl={3}>
                                <Card>
                                    <Card.Header>{snippet.header}</Card.Header>
                                    <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                                    <Card.Body>
                                        <Card.Text>{snippet.title}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <small className="text-muted">{snippet.footer}</small>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    });
                    return <Row>{row}</Row>;
                })
            }
        </>
    );
}

export default SnippetsListing;
