import React, { useState } from "react";
import "./Shop.css";

const Shop = ({ currency, setCurrency, setIncomePerClick, setResetSpeed, trapResetButton }) => {
  // Upgrade states
  const [incomeBoostCost, setIncomeBoostCost] = useState(10);
  const [slowMotionCost, setSlowMotionCost] = useState(15);
  const [trapCost, setTrapCost] = useState(20);
  const [decrementBoostCost, setDecrementBoostCost] = useState(10);

  // Purchase logic for Income Boost
  const handleIncomeBoost = () => {
    if (currency >= incomeBoostCost) {
      setCurrency((prev) => prev - incomeBoostCost);
      setIncomeBoostCost((prev) => prev * 2);
      setIncomePerClick((prev) => prev + 1);
    }
  };

  // Purchase logic for Slow Motion
  const handleSlowMotion = () => {
    if (currency >= slowMotionCost) {
      setCurrency((prev) => prev - slowMotionCost);
      setSlowMotionCost((prev) => prev * 2);
      setResetSpeed((prev) => Math.min(prev + 10, 100)); // Reduce speed incrementally, cap at 3s
    }
  };

  // Purchase logic for Trap
  const handleTrap = () => {
    if (currency >= trapCost) {
      setCurrency((prev) => prev - trapCost);
      setTrapCost((prev) => prev * 2);
      trapResetButton();
    }
  };
  const handleDecrementBoost = () => {
    if (currency >= decrementBoostCost) {
      setCurrency((prev) => prev - decrementBoostCost);
      setDecrementBoostCost((prev) => prev * 2);
    }
  };

  return (
    <div className="shop">
      <h2>Shop</h2>
      <div className="upgrade">
        <button onClick={handleIncomeBoost}>
          Income Boost (+1 income/click) - Cost: {incomeBoostCost}
        </button>
      </div>
      <div className="upgrade">
        <button onClick={handleSlowMotion}>
          Slow Motion (slower reset) - Cost: {slowMotionCost}
        </button>
      </div>
      <div className="upgrade">
        <button onClick={handleTrap}>
          Trap (freeze reset) - Cost: {trapCost}
        </button>
      </div>
      <div className="upgrade">
        <button onClick={handleDecrementBoost}>
          Decrement Boost (reduce penalty) - Cost: {decrementBoostCost}
        </button>
      </div>
    </div>
  );
};

export default Shop;
