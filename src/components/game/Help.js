import React, { useState } from 'react';
import "../../css/Help.css";

function Help() {
    const [showHelp, setShowHelp] = useState(false);

    const toggleHelp = () => {
        setShowHelp(!showHelp);
    };

    return (
        <div className="help-container">
            <button onClick={toggleHelp}>Help</button>
            <div className={`help-overlay ${showHelp ? 'active' : ''}`}>
                <div className="help-window">
                    <h2>Game Instructions</h2>
                    <p>Destroy all the bricks by clicking them in groups of the same color.</p>
                    <p>The more you get at once, the higher the score.</p>
                    <p>If you try to remove a single brick you will lose a life!</p>
                    <ul>
                        <li>🟥 1 point</li>
                        <li>🟩 2 points</li>
                        <li>🟦 4 points</li>
                        <li>🟨 8 points</li>
                        <li>🟪 16 points</li>
                        <li>🟧 32 points</li>
                    </ul>
                    <button className="close-button" onClick={toggleHelp}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Help;
