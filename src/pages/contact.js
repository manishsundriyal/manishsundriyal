import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <Container>
                <Row className="mt-5 justify-content-md-center">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h1>Hello there <span className="wave">👋</span></h1>
                        <p className="lead">
                            Looks like you'd like to connect with me.
                            You might want to connect with me because
                                <ul className="mt-4 mb-4">
                                    <li>You need my mentorship</li>
                                    <li>You need my help with some project</li>
                                    <li>You would like to invite me</li>
                                    <li>You would like to suggest me something</li>
                                    <li>You would like to give some feedback</li>
                                </ul>
                            Alright, always feel free to connect with me at <span className="emoji">👉</span><span className="contact-email"><a href="mailto:msundriyal27@gmail.com" target="_blank">msundriyal27@gmail.com</a></span>
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Contact;
