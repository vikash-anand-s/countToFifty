import React, { useState } from "react";
import "./countToHundred.css";
import Button from "./button.js";

const WIN_NUMBER = 50;
var isGameOver = false;

function CountToHundred(){
    const [number, setNumber] = useState(0);
    const [player, setPlayer] = useState(1);
    
    var value = 0;
    var inputNumber;

    function getData(val){
        if(!isGameOver){
            inputNumber = Number(val);
            value = number + inputNumber;
        }
    }

    function handleClick(events){
        getData(events.target.name);
        if(value !== 0  && !isGameOver){
            if(inputNumber < 10){
                setNumber(value);
                
                if(value <= WIN_NUMBER){
                    (player === 1) ? setPlayer(2) : setPlayer(1);
                    console.log(value, WIN_NUMBER);
                }
                else{
                    isGameOver = true;
                    console.log(isGameOver);
                }
            }
            else 
                console.log("Value is double digit");
        }
    }

    function resetGame(){
        isGameOver = false;
        setPlayer(1);
        setNumber(0);
        value = 0;
    }

    let buttons = [];
    for(var i = 1; i < 10; i++){
        buttons.push(<Button data={i} onClick={handleClick}/>);
        if(i % 3 === 0)
            buttons.push(<br />);
    }
    return (
        <div>
            <h1>Count To Fifty</h1>
            <h2>PLAYER {player}</h2>
            <p className="number">{number}</p>
            <br />

            {/* <input type="text" onChange={getData}/> */}
            {buttons}

            {/* <button onClick={handleClick}>OK</button> */}

            <br />
            <br />

            {isGameOver && <div>
                <p>PLAYER {player} WON</p>
                <button onClick={resetGame}>Reset Game</button>
                </div>}

            <br />
            <p style={{color:"white"}}>Developed by Vikash Anand S</p>
        </div>
    );
}

export default CountToHundred;