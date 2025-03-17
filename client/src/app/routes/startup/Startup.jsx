import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "nes-ui-react";
import StartupLayout from "../../../components/startuplayout/StartupLayout.jsx";
import "./startup.css";

export const StartupPage = () => {
    const navigate = useNavigate();

  return (
    <StartupLayout>
        <div>
            <Button className="bigger-button" color="primary" borderInverted onClick={() => navigate("/login")}>
                Sign in
            </Button>
            <Button className="bigger-button" color="warning" borderInverted onClick={() => navigate("/register")}>
                Sign up
            </Button>
        </div>

    </StartupLayout>
  )
}

export default StartupPage;