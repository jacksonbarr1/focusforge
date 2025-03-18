import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input, Button } from "nes-ui-react"
import GoogleButton from 'react-google-button'
import StartupLayout from "../../../components/startuplayout/StartupLayout.jsx"
import BackButton from '../../../components/backbutton/BackButton.jsx'
import { supabase } from '../../../config/supabaseClient.js'
import './register.css'


// TODO: If user is logged in, redirect to home screen
// TODO: Add Google login button
// TODO: Fix back button triggering on ENTER

const RegisterPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        setError(null)
        setLoading(true)

        if (password !== passwordConfirm) {
            setError("Passwords do not match.")
            setLoading(false)
            return
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password
            })

            if (error) throw error
            
            console.log("User registered:", data)
            
            const { data: signin, error: signinError} = await supabase.auth.signInWithPassword({
                email,
                password
            })
            console.log("User signed in:", signin)
            console.log("Error signing in:", signinError)

            navigate('/')
        } catch (err) {
            setError(err.message)
        }

        setLoading(false)
    }


    return (
        <StartupLayout className="form">
            <form onSubmit={handleRegister}>
                <div className="password-container">
                    <Input
                        type="email"
                        autocomplete="on"
                        id="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e)} 
                    />

                    <Input
                        type="password"
                        id="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e)} 
                    />

                    <Input
                        type="password"
                        id="password-confirm"
                        label="Confirm Password"
                        value={passwordConfirm}
                        onChange={(e) => setPasswordConfirm(e)}
                    />
                </div>

                {error && <p className="error">{error}</p>}

                <div className="button-container">
                    <BackButton to="/" type="submit">
                        Back
                    </BackButton>
                    <Button type="submit" color="primary" borderInverted disabled={loading}>
                        {loading ? "Loading..." : "Register"}
                    </Button>
                </div>
            </form>
        </StartupLayout>
    )
}

export default RegisterPage