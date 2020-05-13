import React, { useState } from 'react'
import { Card, Form, Button, Spinner } from "react-bootstrap";
import addToMailchimp from "gatsby-plugin-mailchimp";

const NewsLetter = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({
        message: "",
        type: "",
    });
    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true);
        addToMailchimp(email)
          .then(data => {
            setLoading(false);
            setStatus({ message: data.msg, type: data.result });
            // console.log(data);
          })
          .catch(err => {
            setLoading(false);
            // console.log(err);
          });
    };

    const buttonContent = () => {
        if (loading) {
            return (
                <>
                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    <span className="sr-only">Loading...</span>
                </>
            );
        }
        return "Submit";
    };

    return (
        <Card className="my-4">
            <Card.Header>Newsletter</Card.Header>
            <Card.Body>
                <Card.Text>
                    Sign up below to receive updates about my upcoming blog posts.
                    <br />
                    It’s good stuff - I don’t spam.
            </Card.Text>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter your email address..." onChange={e => setEmail(e.target.value)} />
                        <small id="passwordHelpInline" className="text-muted">
                            {/* error message here */}
                        </small>
                    </Form.Group>
                    <Button variant="primary" type="submit" disabled={!email}>
                        {buttonContent()}
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default NewsLetter;
