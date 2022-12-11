import React, { } from 'react'
import styles from '../styles/dice.css'
import { useState } from 'react';
import { render } from '@testing-library/react';

export default function Dice() {

    const [diceSide, setDiceSide] = useState("show-"+4) 
    const [diceRoll, setDiceRoll] = useState(0)
    function rollDice() {
    let diceOne = Math.floor((Math.random() * (6 - 1 + 1 )) + 1);
    setDiceSide(`show-${diceOne}`);
    setDiceRoll(diceOne);
    let prevNumber = diceRoll;
    
    if (prevNumber === diceOne)
    {
        //Rerolls values if its the same number as before
        let diceOne = Math.floor((Math.random() * (6 - 1 + 1 )) + 1);
        setDiceSide(`show-${diceOne}`);
        setDiceRoll(diceOne);
    }
  }

    return (
        <div>
            <div className="game">
                <div className="container">
                    <div id='dice1' className={`dice dice-one ${diceSide}`}>
                        <div id="dice-one-side-one" className='side one'>
                            <div className="dot one-1"></div>
                        </div>
                        <div id="dice-one-side-two" className='side two'>
                            <div className="dot two-1"></div>
                            <div className="dot two-2"></div>
                        </div>
                        <div id="dice-one-side-three" className='side three'>
                            <div className="dot three-1"></div>
                            <div className="dot three-2"></div>
                            <div className="dot three-3"></div>
                        </div>
                        <div id="dice-one-side-four" className='side four'>
                            <div className="dot four-1"></div>
                            <div className="dot four-2"></div>
                            <div className="dot four-3"></div>
                            <div className="dot four-4"></div>
                        </div>
                        <div id="dice-one-side-five" className='side five'>
                            <div className="dot five-1"></div>
                            <div className="dot five-2"></div>
                            <div className="dot five-3"></div>
                            <div className="dot five-4"></div>
                            <div className="dot five-5"></div>
                        </div>
                        <div id="dice-one-side-six" className='side six'>
                            <div className="dot six-1"></div>
                            <div className="dot six-2"></div>
                            <div className="dot six-3"></div>
                            <div className="dot six-4"></div>
                            <div className="dot six-5"></div>
                            <div className="dot six-6"></div>
                        </div>
                    </div>
                </div>
               
                <div id='roll' onClick={rollDice} className=''><button className='roll-dice-button'>RUL FOR SATAN</button></div>
            </div>

        </div>
    )
}
