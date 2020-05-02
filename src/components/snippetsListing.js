import React from 'react'
import { Card, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NewsLetter from '../templates/components/newsLetter';
import Categories from '../templates/components/categories';
import SideWidget from '../templates/components/sideWidget';
import CopyToClipboard from './copyToClipboard';

const SnippetsListing = () => {
    const snippetsList = [
        {
            title: "Asymptotic Notationsa",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87586083_201158331132166_500818753568006045_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=4dDIv3KKHrkAX_JzEgB&oh=fcf7ed3d3d25217093aff73f7edced01&oe=5ECB2BE3",
            date: "April 04, 2020",
        },
        {
            title: "Asymptotic Analysis",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87397508_101307701446405_196786223229416461_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wjo2otKjd38AX-v9tWG&oh=851acf9f71d5ee260b4b60b0ceaa3339&oe=5EC9F4B0",
            date: "April 04, 2020",
        },
        {
            title: "Practice Problems - III (Recursion)",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/84326160_2619918904961569_6368327266784627032_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=rrg4dzSKYZQAX-f3YMM&oh=dd963b0c4d56361b0448ce1bb1e08739&oe=5ECAE933",
            date: "April 04, 2020",
        },
        {
            title: "How to calculate?",
            media: "https://instagram.fdel3-1.fna.fbcdn.net/v/t51.2885-15/e35/85065401_933110777105032_1871707767188401048_n.jpg?_nc_ht=instagram.fdel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=qZ-DVMrqIZIAX9vmQDy&oh=b0a1969a4668b96a9962087e4aef2c08&oe=5ECA009B",
            date: "April 04, 2020",
        },
        {
            title: "Asymptotic Notations",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87586083_201158331132166_500818753568006045_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=4dDIv3KKHrkAX_JzEgB&oh=fcf7ed3d3d25217093aff73f7edced01&oe=5ECB2BE3",
            date: "April 04, 2020",
        },
        {
            title: "Asymptotic Analysis",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87397508_101307701446405_196786223229416461_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wjo2otKjd38AX-v9tWG&oh=851acf9f71d5ee260b4b60b0ceaa3339&oe=5EC9F4B0",
            date: "April 04, 2020",
        },
        {
            title: "Practice Problems - III (Recursion)",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/84326160_2619918904961569_6368327266784627032_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=rrg4dzSKYZQAX-f3YMM&oh=dd963b0c4d56361b0448ce1bb1e08739&oe=5ECAE933",
            date: "April 04, 2020",
        },
        {
            title: "How to calculate?",
            media: "https://instagram.fdel3-1.fna.fbcdn.net/v/t51.2885-15/e35/85065401_933110777105032_1871707767188401048_n.jpg?_nc_ht=instagram.fdel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=qZ-DVMrqIZIAX9vmQDy&oh=b0a1969a4668b96a9962087e4aef2c08&oe=5ECA009B",
            date: "April 04, 2020",
        },
        {
            title: "Asymptotic Notations",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87586083_201158331132166_500818753568006045_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=4dDIv3KKHrkAX_JzEgB&oh=fcf7ed3d3d25217093aff73f7edced01&oe=5ECB2BE3",
            date: "April 04, 2020",
        },
        {
            title: "Asymptotic Analysis",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87397508_101307701446405_196786223229416461_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wjo2otKjd38AX-v9tWG&oh=851acf9f71d5ee260b4b60b0ceaa3339&oe=5EC9F4B0",
            date: "April 04, 2020",
        },
        {
            title: "Practice Problems - III (Recursion)",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/84326160_2619918904961569_6368327266784627032_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=rrg4dzSKYZQAX-f3YMM&oh=dd963b0c4d56361b0448ce1bb1e08739&oe=5ECAE933",
            date: "April 04, 2020",
        },
        {
            title: "How to calculate?",
            media: "https://instagram.fdel3-1.fna.fbcdn.net/v/t51.2885-15/e35/85065401_933110777105032_1871707767188401048_n.jpg?_nc_ht=instagram.fdel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=qZ-DVMrqIZIAX9vmQDy&oh=b0a1969a4668b96a9962087e4aef2c08&oe=5ECA009B",
            date: "April 04, 2020",
        },
        {
            title: "Asymptotic Notations",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87586083_201158331132166_500818753568006045_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=110&_nc_ohc=4dDIv3KKHrkAX_JzEgB&oh=fcf7ed3d3d25217093aff73f7edced01&oe=5ECB2BE3",
            date: "April 04, 2020",
        },
        {
            title: "Asymptotic Analysis",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/87397508_101307701446405_196786223229416461_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wjo2otKjd38AX-v9tWG&oh=851acf9f71d5ee260b4b60b0ceaa3339&oe=5EC9F4B0",
            date: "April 04, 2020",
        },
        {
            title: "Practice Problems - III (Recursion)",
            media: "https://instagram.fdel3-2.fna.fbcdn.net/v/t51.2885-15/e35/84326160_2619918904961569_6368327266784627032_n.jpg?_nc_ht=instagram.fdel3-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=rrg4dzSKYZQAX-f3YMM&oh=dd963b0c4d56361b0448ce1bb1e08739&oe=5ECAE933",
            date: "April 04, 2020",
        },
        {
            title: "How to calculate?",
            media: "https://instagram.fdel3-1.fna.fbcdn.net/v/t51.2885-15/e35/85065401_933110777105032_1871707767188401048_n.jpg?_nc_ht=instagram.fdel3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=qZ-DVMrqIZIAX9vmQDy&oh=b0a1969a4668b96a9962087e4aef2c08&oe=5ECA009B",
            date: "April 04, 2020",
        },
    ];

    return (
        <Row>
            <Col xs={12} sm={12} md={8} lg={8} xl={8}>
                <Row>
                    {
                        snippetsList.map(snippet => {
                            return (
                                <Col className="col-snippet-md" xs={12} sm={6} md={6} lg={4} xl={4}>
                                    <Card className="snippet">
                                        <Card.Img variant="top" src={snippet.media} alt="" />
                                        <Card.Body className="snippet-heading">
                                        <OverlayTrigger
                                            placement="bottom-start"
                                            delay={{ show: 1000 }}
                                            overlay={<Tooltip>{snippet.title}</Tooltip>}
                                            >
                                            <span>{snippet.title}</span>
                                        </OverlayTrigger>
                                            <Card.Text>
                                                <small>{snippet.date}</small> <CopyToClipboard />
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4} xl={4}>
                <NewsLetter />
                <Categories />
                <SideWidget />
            </Col>
        </Row>
    );
}

export default SnippetsListing;
