import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Post = (props) => {
    return (
        <Card className="p-3">
            <Card.Img variant="top" src={props.image} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.excerpt}
                </Card.Text>
                <Button variant="primary" href={props.readMore}>Read More...</Button>
            </Card.Body>
        </Card>
    )
}

export default Post;
