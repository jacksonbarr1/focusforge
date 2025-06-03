import React from "react";
import { Container, Heading } from "nes-ui-react";
import "./wip.css";

const WIP = () => {
    return (
        <Container className="wip">
            <Heading className="wip-heading">Work In Progress</Heading>
            <p>This page is currently under construction. Please check back later.</p>
        </Container>
    )
}

export default WIP;