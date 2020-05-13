import React from 'react'
import { Card } from "react-bootstrap";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialMediaWidget = () => {
    return (
        <Card className="my-4">
            <Card.Header>Stay Connected</Card.Header>
            <Card.Body className="instagram-widget">
                <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                        <OutboundLink className="instagram" aria-label="Instagram" rel="noopener" target="_blank" href="https://www.instagram.com/manish_sundriyal/"><FontAwesomeIcon size="2x" icon={faInstagram} className="align-middle" /><span className="ml-2">@manish_sundriyal</span></OutboundLink>
                    </li>
                    <li className="mb-2">
                        <OutboundLink className="twitter" aria-label="Instagram" rel="noopener" target="_blank" href="https://twitter.com/sundriyalManish"><FontAwesomeIcon size="2x" icon={faTwitter} className="align-middle" /><span className="ml-2">@sundriyalManish</span></OutboundLink>
                    </li>
                </ul>
            </Card.Body>
        </Card>
    )
}

export default SocialMediaWidget;
