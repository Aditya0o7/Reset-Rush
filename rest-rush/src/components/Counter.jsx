import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(1); // Counter starts at 1
  const [resetPosition, setResetPosition] = useState({ top: 200, left: 300 }); // Initial position for Reset button

  // Increment handler
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };

  // Decrement handler (doesn't go below 1)
  const handleDecrement = () => {
    setCounter((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Move reset button when hovered
  const handleHover = () => {
    const newTop = Math.random() * window.innerHeight * 0.8; // Keeps within view
    const newLeft = Math.random() * window.innerWidth * 0.8;
    setResetPosition({ top: newTop, left: newLeft });
  };

  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <div
        className="reset-button"
        style={{
          top: `${resetPosition.top}px`,
          left: `${resetPosition.left}px`,
        }}
        onMouseEnter={handleHover} // Trigger hover logic
      >
        Reset
      </div>
    </div>
  );
};

export default Counter;
