import React from "react";
import { Container, Heading, Text } from "nes-ui-react";
import "./titlescreen.css";

const TitleScreen = () => {
    return (
        <Container className="title-container">
            <Heading centered="true" className="heading">Focus Forge</Heading>
        </Container>
    );
};

export default TitleScreen;