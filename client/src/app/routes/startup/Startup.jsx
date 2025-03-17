// contains title screen
import React from "react";
import { Button } from "nes-ui-react";
import StartupLayout from "../../../components/startuplayout/StartupLayout.jsx";
import "./startup.css";

export const StartupPage = () => {
  return (
    <StartupLayout>
        <div>
            <Button className="bigger-button" color="primary" borderInverted>
                Sign in
            </Button>
            <Button className="bigger-button" color="warning" borderInverted>
                Sign up
            </Button>
        </div>

    </StartupLayout>
  )
}

export default StartupPage;