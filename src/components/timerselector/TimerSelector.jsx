import React, { useState } from "react";
import { Button, Container } from "nes-ui-react";
import "./timerselector.css";

const TimerSelector = () => {
    const [selectedTime, setSelectedTime] = useState(25);

    const handleStartTimer = () => {
        console.log(`Starting timer for ${selectedTime} minutes`);
        // Timer logic
        // Transition to work session page
    }

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    }

    return (
        <Container className="timer-selector">
            <p>Ready to Forge?</p>
            <div className="selector-bar">
                <input
                    type="range"
                    min="5"
                    max="120"
                    step="5"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                />
                <p>{selectedTime} minutes</p>
            </div>

            <Button className="bigger-button" color="primary" borderInverted onClick={handleStartTimer}>Forge</Button>
        </Container>
    )
}

export default TimerSelector;