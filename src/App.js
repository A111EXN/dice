import React, { useState } from 'react';
import './App.css';

function App() {
  const [diceRoll, setDiceRoll] = useState(1);
  const [displayMode, setDisplayMode] = useState('dice');

  const rollDice = () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(randomNum);
  }

  const diceFaces = [
    '',
    '⚀',
    '⚁',
    '⚂',
    '⚃',
    '⚄',
    '⚅'
  ];

  const diceFace = diceFaces[diceRoll];

  const toggleDisplayMode = () => {
    setDisplayMode(displayMode === 'dice' ? 'number' : 'dice');
  }

  return (
    <div className="App">
      <h1 className='title'>Dice  App</h1>
      {displayMode === 'dice' ? (
        <p className="dice-face">{diceFace}</p>
      ) : (
        <p className='current-roll'>The current roll is: {diceRoll}</p>
      )}
      <button onClick={rollDice}>Roll the Dice</button>
      <button onClick={toggleDisplayMode}>
        Switch to {displayMode === 'dice' ? 'numbers' : 'dice faces'}
      </button>
    </div>
  );
}

export default App;