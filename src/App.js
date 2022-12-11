import logo from './logo.svg';
import './App.css';
import styles from './styles/styles.css'
import { useState } from 'react';
import DiceGame from './components/diceGame';
function App() {
  const [startGame, setStartGame] = useState(true);
  function startGameFunction() {
      setStartGame(false)
      console.log(startGame)

  };
  return (
    <div className="App">
        <div className='gameBtnContainer'>
      {startGame &&  <div className="menu__game-btn" onClick={startGameFunction}>
          Terninge spillet
        </div>}</div>
     
        {!startGame &&         <DiceGame></DiceGame>
    }
    </div>
  );
}

export default App;
