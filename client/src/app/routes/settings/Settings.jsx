import React from "react";
import HomeLayout from "../../../components/homelayout/HomeLayout.jsx";
import WIP from "../../../components/wip/WIP.jsx";

const SettingsPage = () => {
    return (
        <HomeLayout className="wip-page">
            <WIP className="wip"/>
        </HomeLayout>
    );
} 

export default SettingsPage;