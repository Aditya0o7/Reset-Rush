import React from 'react';

const CounterDisplay = ({ counter, currency }) => (
  <div className="counter-display">
    <h1>Counter: {counter}</h1>
    <h2>Currency: {currency}</h2>
  </div>
);

export default CounterDisplay;
