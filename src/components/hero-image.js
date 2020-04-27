import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Container, Jumbotron, Button, Col, Row } from "react-bootstrap";
import BackgroundImage from 'gatsby-background-image';

const HeroImage = props => {
    const data = useStaticQuery(graphql`
    query {
      jumbotronImageXl: file(relativePath: { eq: "light-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2800, maxHeight: 580, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageLg: file(relativePath: { eq: "light-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 2500, maxHeight: 580, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageMd: file(relativePath: { eq: "light-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1450, maxHeight: 400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageSm: file(relativePath: { eq: "light-hero-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 719, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jumbotronImageXs: file(relativePath: { eq: "light-hero-sm.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 631, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
    const images = [
        {
            ...data.jumbotronImageXl.childImageSharp.fluid,
        },
        {
            ...data.jumbotronImageLg.childImageSharp.fluid,
            media: `(max-width: 991px)`
        },
        {
            ...data.jumbotronImageMd.childImageSharp.fluid,
            media: `(max-width: 767px)`
        },
        {
            ...data.jumbotronImageSm.childImageSharp.fluid,
            media: `(max-width: 576px)`
        },
        {
            ...data.jumbotronImageXs.childImageSharp.fluid,
            media: `(max-width: 476px)`
        }
    ];
    return (
        <BackgroundImage
            fluid={images}
        >
            <Jumbotron>
                <Container>
                    <Row>
                        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                            {props.children}
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </BackgroundImage>
    )
}

export default HeroImage;
