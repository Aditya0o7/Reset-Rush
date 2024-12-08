import React from 'react';

const ResetButton = ({ handleHover, handleReset, isFrozen, resetPosition }) => (
  <div
    className={`reset-button ${isFrozen ? 'frozen' : ''}`}
    style={{
      top: `${resetPosition.top}px`,
      left: `${resetPosition.left}px`,
      transition: `top 0.3s ease, left 0.3s ease`,
    }}
    onMouseEnter={handleHover}
    onClick={handleReset}
  >
    Reset
  </div>
);

export default ResetButton;
