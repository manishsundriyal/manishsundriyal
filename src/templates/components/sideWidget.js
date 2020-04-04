import React from 'react'
import { Card } from "react-bootstrap";

const SideWidget = () => {
    return (
        <Card className="my-4">
            <Card.Header>Side Widget</Card.Header>
            <Card.Body>
                This is a wider card with supporting text below as a natural lead-in to
                additional content.
            </Card.Body>
        </Card>
    )
}

export default SideWidget;
