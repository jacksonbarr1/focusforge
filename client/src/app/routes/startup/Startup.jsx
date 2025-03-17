// contains title screen
import React from "react";
import { Button, Col } from "nes-ui-react";
import TitleScreen from "../../../components/titlescreen/TitleScreen.jsx";
import "./startup.css";

export const StartupPage = () => {
  return (
    <div className="startup-container">
        <TitleScreen />
        <Button color="primary" borderInverted>Sign in</Button>
        <Button color="primary" borderInverted>Sign up</Button>
    </div>

  )
}

export default StartupPage;