import { Container, Heading } from "nes-ui-react";
import "./titlescreen.css";

const TitleScreen = () => {
    return (
        <Container className="title-container">
            <Heading centered="true">Focus Forge</Heading>
        </Container>
    );
};

export default TitleScreen;