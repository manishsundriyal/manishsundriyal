import React from 'react'
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram, faGithub, faMediumM } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <Container>
                <Row className="mt-5 contact text-center justify-content-md-center">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                        <h1>Hello there</h1>
                        <p className="lead">
                            If you want to contact me, the best way to reach me is on social media 👋.
                        </p>
                    </Col>
                    <Col xs={9} sm={6} md={5} lg={4} xl={3}>
                        <Row className="mt-4">
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <ul className="social-icons">
                                    <li><a className="facebook" href="http://scanfcode.com/about/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a className="twitter" href="http://scanfcode.com/contact/"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                </ul>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <ul className="social-icons">
                                    <li><a className="linkedin" href="http://scanfcode.com/privacy-policy/"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                                    <li><a className="instagram" href="http://scanfcode.com/contribute-at-scanfcode/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </Col>
                            <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                                <ul className="social-icons">
                                    <li><a className="github" href="http://scanfcode.com/contribute-at-scanfcode/"><FontAwesomeIcon icon={faGithub} /></a></li>
                                    <li><a className="medium" href="http://scanfcode.com/contribute-at-scanfcode/"><FontAwesomeIcon icon={faMediumM} /></a></li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Contact;
