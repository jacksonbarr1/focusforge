import React from 'react'
import { Input, Button } from "nes-ui-react"
import GoogleButton from 'react-google-button'
import StartupLayout from "../../../components/startuplayout/StartupLayout.jsx"
import BackButton from '../../../components/backbutton/BackButton.jsx'
import './Register.css'


// TODO: If user is logged in, redirect to home screen
// TODO: Add Google login button

const RegisterPage = () => {
    return (
        <StartupLayout className="register-page">
            <form>
                <div className="password-container">
                    <Input type="email" autocomplete="on" id="email" label="Email"></Input>
                    <Input type="password" autocomplete="on" id="password" label="Password"></Input>
                    <Input type="password" autocomplete="on" id="password-confirm" label="Confirm Password"></Input>
                </div>
                <div className="button-container">
                    <BackButton to="/">
                        Back
                    </BackButton>
                    <Button color="primary" borderInverted>
                        Register
                    </Button>
                </div>
            </form>
        </StartupLayout>
    )
}

export default RegisterPage