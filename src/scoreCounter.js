import React from 'react';
var score = 0


function scoreIncrease() {
          score++
            }



function scoreReset(){

    score=0
}

export function renderScore(){
    return (
        <div>
    <h2>{score}</h2>
    <button onClick={scoreIncrease}>Increase score</button>
    <button onClick={scoreReset}>Reset score</button>
    </div>
    )
}