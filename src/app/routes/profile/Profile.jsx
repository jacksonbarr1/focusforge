import React from "react";
import HomeLayout from "../../../components/homelayout/HomeLayout.jsx";
import WIP from "../../../components/WIP/WIP.jsx";

const ProfilePage = () => {
    return (
        <HomeLayout className="wip-page">
            <WIP className="wip"/>
        </HomeLayout>
    );
} 

export default ProfilePage;