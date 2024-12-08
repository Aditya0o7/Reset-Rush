import React, { useState } from "react";
import Shop from "./Shop";
import "./Counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(1);
  const [currency, setCurrency] = useState(0);
  const [incomePerClick, setIncomePerClick] = useState(1);
  const [resetSpeed, setResetSpeed] = useState(1);
  const [resetPosition, setResetPosition] = useState({ top: 200, left: 300 });
  const [showShop, setShowShop] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false)

  // Increment logic
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    setCurrency((prev) => prev + incomePerClick);
  };

  const handleReset = () => {
    setCounter(1);
    console.log("Resetting");
  };
  // Decrement logic
  const handleDecrement = () => {
    setCounter((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // Reset button hover movement
  const handleHover = () => {
    if (isFrozen) return;
    const newTop = Math.random() * window.innerHeight * 0.8;
    const newLeft = Math.random() * window.innerWidth * 0.8;
    setResetPosition({ top: newTop, left: newLeft });
  };

  // Trap button functionality
  const trapResetButton = () => {
    setIsFrozen(true); // Freeze movement
    setResetPosition({ top: resetPosition.top, left: resetPosition.left }); // Lock current position

    setTimeout(() => {
      setIsFrozen(false); // Unfreeze after 5 seconds
      setResetPosition({
        top: Math.random() * window.innerHeight * 0.8,
        left: Math.random() * window.innerWidth * 0.8,
      }); // Resume random movement
    }, 2000);
  };

  return (
    <div className="counter">
      <h1>Counter: {counter}</h1>
      <h2>Currency: {currency}</h2>
      <div className="buttons">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => setShowShop((prev) => !prev)}>
          {showShop ? "Close Shop" : "Open Shop"}
        </button>
      </div>
      <div
        className={`reset-button ${isFrozen ? "frozen" : ""}`}
        style={{
          top: `${resetPosition.top}px`,
          left: `${resetPosition.left}px`,
          transition: `top ${resetSpeed}s ease, left ${resetSpeed}s ease`,
        }}
        onMouseEnter={handleHover}
        onClick={handleReset}
      >
        Reset
      </div>
      {showShop && (
        <Shop
          currency={currency}
          setCurrency={setCurrency}
          setIncomePerClick={setIncomePerClick}
          setResetSpeed={setResetSpeed}
          trapResetButton={trapResetButton}
        />
      )}
    </div>
  );
};

export default Counter;
