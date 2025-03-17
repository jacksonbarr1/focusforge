import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";
import StartupPage from "./routes/startup/Startup.jsx";
import HomeScreen from "./routes/homescreen/HomeScreen.jsx";
import LoginPage from "./routes/login/Login.jsx";
import RegisterPage from "./routes/register/Register.jsx";

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
            </Routes>
        </BrowserRouter>
    );
};

export default Router;