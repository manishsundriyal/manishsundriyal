import React from 'react'
import { CardDeck, Card, Row, Col } from 'react-bootstrap'

const RecentSnippets = () => {
    return (
        <>
            <h1 className="heading">Recent Snippets</h1>
            <CardDeck>
                <Row>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                        <Card>
                            <Card.Header>This is header</Card.Header>
                            <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                        <Card>
                            <Card.Header>This is header</Card.Header>
                            <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                        <Card>
                            <Card.Header>This is header</Card.Header>
                            <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={4} xl={3}>
                        <Card>
                            <Card.Header>This is header</Card.Header>
                            <Card.Img variant="top" src="https://blog-assets.hootsuite.com/wp-content/uploads/2019/07/Best-time-to-post-on-Facebook-Twitter-LinkedIn-Instagram-and-Pinterest.png" />
                            <Card.Body>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content.
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </CardDeck>
        </>
    );
}

export default RecentSnippets;
