import React, { useState, useEffect } from 'react';
import "./CountdownLoader.css";

const CountdownLoader = () => {
    const [count, setCount] = useState(10);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(countdownInterval);
                    setIsVisible(false); // Hide the loader
                    return 1; // Stop the countdown at 1
                }
                return prevCount - 1;
            });
        }, 800);

        // Cleanup interval on component unmount
        return () => clearInterval(countdownInterval);
    }, []);

    return (
        <div className={`${isVisible ? "card-container" : "hidden"} `}>
            <div className="card">
                <div className="number">{count < 10 ? `0${count}` : count}</div>
            </div>
        </div>
    );
};

export default CountdownLoader;
