import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";
import StartupPage from "./routes/startup/Startup.jsx";
import HomeScreen from "./routes/homescreen/HomeScreen.jsx";
import LoginPage from "./routes/login/Login.jsx";
import RegisterPage from "./routes/register/Register.jsx";
import StorePage from "./routes/store/Store.jsx";
import SocialPage from "./routes/social/Social.jsx";
import ProfilePage from "./routes/profile/Profile.jsx";
import SettingsPage from "./routes/settings/Settings.jsx";

const Router = () => {
    const { user } = useAuth();
    console.log("Auth state in Router: ", user)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={user ? <HomeScreen/> : <StartupPage />}
                />
                <Route 
                    path="/login"
                    element={<LoginPage />}
                />
                <Route 
                    path="/register"
                    element={<RegisterPage />}
                />
                <Route 
                    path="/store"
                    element={<StorePage />}
                />
                <Route 
                    path="/social"
                    element={<SocialPage />}    
                />
                <Route 
                    path="/profile"
                    element={<ProfilePage />}
                />
                <Route 
                    path="/settings"
                    element={<SettingsPage />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;