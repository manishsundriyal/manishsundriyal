import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { Container, Row, Col, Image } from "react-bootstrap";

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "web-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
    return (
        <Layout>
            <SEO title="About" />
            <Container>
                <Row className="mt-5 mb-5">
                    <Col md={4} lg={4} xl={4} className="text-center mb-5">
                     <Image src={data.placeholderImage.childImageSharp.fluid.src} roundedCircle />
                    </Col>
                    <Col md={8} lg={8} xl={8} className="lead">
                        <p>
                          <span className="emoji">👋 </span>I'm Manish Kr. Sundriyal, a Full Stack Developer from India. Currently, I work at <a href="https://www.peoplegrove.com/" target="_blank">PeopleGrove</a>.
                        </p>
                          I believe developing good software is an art. Unlike some modern art mystery, it should be <span className="text-highlight">simple</span>, <span className="text-highlight">separated</span>, and <span className="text-highlight">unique</span>.
                          <div><span className="align-middle">📌</span>Simple (KISS)</div>
                          <div><span className="align-middle">📌</span>Separated (SOC)</div>
                          <div><span className="align-middle">📌</span>Unique (DRY/SRP)</div>
                          <div className="mt-3 mb-3 text-secondary">• • •</div>
                          Currently I work with MERN + GQL.<br />
                          I have experience with:
                          <div><span className="align-middle emoji">👉 </span>Java (android development)</div>
                          <div><span className="align-middle emoji">👉 </span>C++ (competitive + teaching)</div>
                          <div><span className="align-middle emoji">👉 </span>Python (pastime)</div>
                          <div><span className="align-middle emoji">👉 </span>Gatsby (used to create this site)</div>
                          <div className="mt-3 mb-3 text-secondary">• • •</div>
                          I believe in the process of: Learn, Apply & Share.<br />So, I contribute to community through  <br />
                          <div><span className="align-middle emoji">✍️ </span>Blogs - <a href="https://medium.com/@manishsundriyal" target="_blank">Medium</a></div>
                          <div><span className="align-middle emoji">👨‍🎨 </span>Snippets - <a href="https://www.instagram.com/manish_sundriyal" target="_blank">Instagram</a>, <a href="https://twitter.com/sundriyalManish" target="_blank">Twitter</a></div>
                          <div><span className="align-middle emoji">💡 </span>Answers & Reviews - <a href="https://stackoverflow.com/users/7672624/manish-sundriyal?tab=profile" target="_blank">Stackoverflow</a></div>
                          <div><span className="align-middle emoji">👨‍💻 </span>Open Source - <a href="https://github.com/manishsundriyal" target="_blank">Github</a></div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default About;
