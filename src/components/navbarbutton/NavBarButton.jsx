import React from "react";
import "./navbarbutton.css";

const NavBarButton = ({ onClick, iconSrc }) => {
    return (
        <button className="button-container" onClick={onClick}>
            <img src={iconSrc} alt="icon" className="button-icon" />
        </button>

    )
}

export default NavBarButton;