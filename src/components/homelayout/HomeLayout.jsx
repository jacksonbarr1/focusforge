import React from "react";
import NavBar from "../navbar/Navbar.jsx";
import "./homelayout.css";

const HomeLayout = ({ children, className }) => {
    return (
        <div className={`home-container ${className}`}>
            <div className="content-container">
                {children}
            </div>
            <NavBar />
        </div>
    )
}

export default HomeLayout;