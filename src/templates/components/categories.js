import React from 'react'
import { Card, Row, Col } from "react-bootstrap";

const Categories = () => {
    return (
        <Card className="my-4">
                        <Card.Header>Categories</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#">Web Design</a>
                                        </li>
                                        <li>
                                            <a href="#">HTML</a>
                                        </li>
                                        <li>
                                            <a href="#">Freebies</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <ul className="list-unstyled mb-0">
                                        <li>
                                            <a href="#">JavaScript</a>
                                        </li>
                                        <li>
                                            <a href="#">CSS</a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorials</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                            <Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content.
                        </Card.Text>
                        </Card.Body>
                    </Card>
    )
}

export default Categories;
