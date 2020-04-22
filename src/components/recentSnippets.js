import React from 'react'
import { CardDeck, Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const RecentSnippets = () => {
    return (
        <>
            <h1 className="heading">Recent Snippets</h1>
                <Row className="mt-4">
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <Card>
                            <Card.Img variant="top" src="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87586083_201158331132166_500818753568006045_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=4dDIv3KKHrkAX_JzEgB&oh=fcf7ed3d3d25217093aff73f7edced01&oe=5ECB2BE3" />
                            <Card.Body>
                                Asymptotic Notations
                                <Card.Text>
                                    <small className="text-muted">April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                                </Card.Text>
                                <div className="card-body-overlay" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <Card>
                            <Card.Img variant="top" src="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87397508_101307701446405_196786223229416461_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wjo2otKjd38AX-v9tWG&oh=851acf9f71d5ee260b4b60b0ceaa3339&oe=5EC9F4B0" />
                            <Card.Body>
                                Asymptotic Analysis
                                <Card.Text>
                                    <small className="text-muted">April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <Card>
                            <Card.Img variant="top" src="https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/84326160_2619918904961569_6368327266784627032_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=rrg4dzSKYZQAX-f3YMM&oh=dd963b0c4d56361b0448ce1bb1e08739&oe=5ECAE933" />
                            <Card.Body>
                                Practice Problems - III (Recursion)
                                <Card.Text>
                                    <small className="text-muted">April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                        <Card>
                            <Card.Img variant="top" src="https://instagram.fdel3-1.fna.fbcdn.net/v/t51.2885-15/e35/85065401_933110777105032_1871707767188401048_n.jpg?_nc_ht=instagram.fdel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=qZ-DVMrqIZIAX9vmQDy&oh=b0a1969a4668b96a9962087e4aef2c08&oe=5ECA009B" />
                            <Card.Body>
                                How to calculate?
                                <Card.Text>
                                    <small className="text-muted">April 04, 2020</small> <FontAwesomeIcon className="float-right mt-1" icon={faShareAlt} />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </>
    );
}

export default RecentSnippets;
