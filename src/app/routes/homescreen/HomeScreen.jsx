import React from 'react';
import { Button } from "nes-ui-react"
import Navbar from "../../../components/navbar/Navbar.jsx";
import HomeLayout from "../../../components/homelayout/HomeLayout.jsx";
import { signOut } from "../../../../utils/auth.js";
import ForgeAnimation from "../../../components/forgeanimation/ForgeAnimation.jsx";
import TimerSelector from "../../../components/timerselector/TimerSelector.jsx";
import StatusBar from "../../../components/statusbar/StatusBar.jsx";
import "./homescreen.css";

const HomeScreen = () => {
  return (
    <HomeLayout>
      <button onClick={signOut}>Sign Out</button>
      <ForgeAnimation />
      <TimerSelector />
      <StatusBar />
    </HomeLayout>
  );
};

export default HomeScreen;