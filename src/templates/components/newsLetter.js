import React from 'react'
import { Card, Form, Button } from "react-bootstrap";

const NewsLetter = () => {
    return (
        <Card className="my-4">
            <Card.Header>Newsletter</Card.Header>
            <Card.Body>
                <Card.Text>
                    Sign up below to receive updates about my upcoming blog posts.
                    <br />
                    It’s good stuff - I don’t spam.
            </Card.Text>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email address..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default NewsLetter;
