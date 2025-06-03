import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "nes-ui-react";
import NavBarButton from "../navbarbutton/NavBarButton.jsx";
import configIcon from "../../assets/navbar/config_icon.png"
import profileIcon from "../../assets/navbar/profile_icon.png"
import storeIcon from "../../assets/navbar/store_icon.png"
import socialIcon from "../../assets/navbar/social_icon.png"
import homeIcon from "../../assets/navbar/home_icon.png"
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleButtonClick = (path) => {
        navigate(path);
    }
    
    return (
        <Container className="navbar-container">
            <NavBarButton content="Store" onClick={() =>handleButtonClick("/store")} iconSrc={storeIcon}/>
            <NavBarButton content="Social" onClick={() => handleButtonClick("/social")} iconSrc={socialIcon}/>
            <NavBarButton content="Home" onClick={() =>handleButtonClick("/")} iconSrc={homeIcon}/>
            <NavBarButton content="Profile" onClick={() =>handleButtonClick("/profile")} iconSrc={profileIcon}/>
            <NavBarButton content="Settings" onClick={() => handleButtonClick("/settings")} iconSrc={configIcon}/>
        </Container>
    )
}

export default Navbar;