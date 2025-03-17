import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthProvider.jsx";
import TitleScreen from "../components/titlescreen/TitleScreen.jsx";
import HomeScreen from "./routes/homescreen/HomeScreen.jsx";

const Router = () => {
    const { user } = useAuth();
    console.log("Auth state in Router: ", user)

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={user ? <HomeScreen/> : <TitleScreen />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;