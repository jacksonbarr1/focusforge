import TitleScreen from "../titlescreen/TitleScreen.jsx";
import Footer from "../footer/Footer.jsx";
import "./startuplayout.css";

const StartupLayout = ({ children, className }) => {
    return (
        <div className={`startup-container ${className}`}>
            <TitleScreen className="title-container" />
            <div className="content-container">
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default StartupLayout;