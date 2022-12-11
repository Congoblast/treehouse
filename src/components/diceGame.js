import styles from '../styles/styles.css'
import { useState } from 'react';
import Dice from './dice';
import { useEffect } from 'react';
import baseDrop from "../sound/base.mp3"
function DiceGame() {

    const [startMusic, setStartMusic] = useState(false);
    const [gameEnded, setGameEnded] = useState(false);
    const audio = new Audio(baseDrop);
    audio.loop = false;


    const duration = 0;
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
        if(time > 0)
         setTime(time - 1)
         console.log(time)
         if(time === 1)
         gameEnd()
      }, 1000);

    }, [time]);

   
    function gameEnd() {
        console.log("ended")
        setGameEnded(true)
    }

    function startGameFunction() {
        if(!startMusic){
            setTime(66)
            audio.play()
        }
        setStartMusic(true)
        
    };

    function restartGame(){
        window.location.reload(false); 
       }



  return (
    <div className="DiceGame">
    
        <div className="dice-container" onClick={startGameFunction}>
      

        <Dice ></Dice>
        </div>

        {gameEnded && <div className="game-ended"><div className="loose-text-container"><p className='loose-text-one'>Du tabte</p> <p className='loose-text-two'>Du er officielt en taber</p></div><div onClick={restartGame} className='restartBtn'> Restart </div> </div>}
    </div>
  );
}

export default DiceGame;
