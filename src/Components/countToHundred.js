import React, { useState } from "react";
import "./countToHundred.css";
import Button from "./button.js";

const WIN_NUMBER = 10;

function CountToHundred(){
    const [number, setNumber] = useState(0);
    const [player, setPlayer] = useState(1);
    var isGameOver = false;
    var value = 0;
    var inputNumber;

    function getData(val){
        if(!isGameOver){
            inputNumber = Number(val.target.value);
            console.log(inputNumber);
            value = number + inputNumber;
        }
    }

    function handleClick(events){
        getData(events.target.name);
        console.log(events.target.name);
        if(value !== 0)
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

    let buttons = [];
    for(var i = 1; i < 10; i++){
        buttons.push(<Button id={i} data={i} onClick={handleClick}/>);
        if(i % 3 === 0)
            buttons.push(<br />);
    }
    return (
        <div>
            <h1>Count To Fifty</h1>
            <h2>Player {player}</h2>
            <p className="number">{number}</p>

            {/* <input type="text" onChange={getData}/> */}
            {buttons}

            {/* <button onClick={handleClick}>OK</button> */}

            <br />
            <br />

            {isGameOver && <p>Player {player} won</p>}
        </div>
    );
}

export default CountToHundred;