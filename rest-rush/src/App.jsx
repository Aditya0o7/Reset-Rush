import React, { useState, useEffect } from 'react';
import Shop from './components/Shop';
import CounterDisplay from './components/CounterDisplay';
import DialogueBox from './components/DialogueBox';
import ActionButtons from './components/ActionButtons';
import ResetButton from './components/ResetButton';
import './components/Counter.css';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [currency, setCurrency] = useState(0);
  const [incomePerClick, setIncomePerClick] = useState(1);
  const [resetSpeed, setResetSpeed] = useState(1);
  const [resetPosition, setResetPosition] = useState({ top: 200, left: 300 });
  const [showShop, setShowShop] = useState(false);
  const [isFrozen, setIsFrozen] = useState(false);
  const [dialogue, setDialogue] = useState("Welcome! Just a boring ol' counter app...");
  const [showDialogue, setShowDialogue] = useState(true);

  const [clickStates, setClickStates] = useState({
    0: false,
    5: false,
    10: false,
    decrement: false,
    shopShowed: false,
  });

  // Increment logic
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
    setCurrency((prev) => prev + incomePerClick);

    if (counter === 1 && !clickStates[0]) {
      setClickStates((prevState) => ({ ...prevState, 0: true }));
      setDialogue("Ohhh, you clicked! Nice start!");
    } else if (counter === 5 && !clickStates[5]) {
      setClickStates((prevState) => ({ ...prevState, 5: true }));
      setDialogue("Hmmm... something might happen soon...");
    } else if (counter === 10 && !showShop && !clickStates[10]) {
      setClickStates((prevState) => ({ ...prevState, 10: true, shopShowed: true }));
      setDialogue("Wait... is that a *Shop* I see?");
    }
  };

  // Decrement logic
  const handleDecrement = () => {
    setCounter((prev) => (prev > 1 ? prev - 1 : prev));
    if (counter > 1 && !clickStates['decrement']) {
      setClickStates((prevState) => ({ ...prevState, decrement: true }));
      setDialogue("Woah, taking it down a notch?");
    }
  };

  // Reset button hover movement
  const handleHover = () => {
    if (isFrozen) return;
    const newTop = Math.random() * window.innerHeight * 0.8;
    const newLeft = Math.random() * window.innerWidth * 0.8;
    setResetPosition({ top: newTop, left: newLeft });
    setDialogue("Trying to reset, are you?");
  };

  const handleReset = () => {
    setCounter(0);
    setDialogue("Resetting the counter! Back to square one...");
  
    // Optional: You can also add a delay to ensure the reset happens after the dialogue shows
    setTimeout(() => {
      setDialogue("Reset complete!");
    }, 1000); // Adjust timing if needed
  };

  // Freeze reset button temporarily
  const trapResetButton = () => {
    setIsFrozen(true); // Freeze movement
    setResetPosition({ top: resetPosition.top, left: resetPosition.left }); // Lock current position
    setDialogue("Gotcha! Reset is frozen for now.");
  
    setTimeout(() => {
      setIsFrozen(false); // Unfreeze after 5 seconds
      setResetPosition({
        top: Math.random() * window.innerHeight * 0.8,
        left: Math.random() * window.innerWidth * 0.8,
      }); // Resume random movement
      setDialogue("Back in action!");
    }, 2000);
  };
  
  // Special dialogues based on counter value
  useEffect(() => {
    if (counter === 50) {
      setDialogue("Woah, 50?! You’re unstoppable!");
    }
  }, [counter]);

  return (
    <div className="counter">
      {/* Dialogue Box */}
      <DialogueBox dialogue={dialogue}  />

      {/* Counter and Currency */}
      <CounterDisplay counter={counter} currency={currency} />

      {/* Action Buttons */}
      <ActionButtons
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
        showShop={showShop}
        shopShowed={clickStates.shopShowed}
        toggleShop={() => setShowShop((prev) => !prev)}
      />

      {/* Reset Button */}
      <ResetButton
        handleHover={handleHover}
        handleReset={handleReset}
        isFrozen={isFrozen}
        resetPosition={resetPosition}
      />

      {/* Shop Section */}
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

export default App;
