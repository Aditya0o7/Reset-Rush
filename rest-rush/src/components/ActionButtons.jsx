import React from 'react';

const ActionButtons = ({ handleIncrement, handleDecrement, showShop, toggleShop, shopShowed}) => (
  <div className="buttons">
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={toggleShop}
    style={{display: shopShowed ? "inline-block":"none"}}>
      {showShop ? "Close Shop" : "Open Shop"}
    </button>
  </div>
);

export default ActionButtons;
