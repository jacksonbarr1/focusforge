import { useNavigate } from "react-router-dom";
import { Button } from "nes-ui-react";


const BackButton = ({ to, color="warning", borderInverted = true, children }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        } else {
            navigate(-1);
        }
    }

    return (
        <Button color={color} borderInverted={borderInverted} onClick={handleClick}>
            {children}
        </Button>
    )
}

export default BackButton;