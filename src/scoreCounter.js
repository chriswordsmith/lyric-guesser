import React from 'react';
import { useState } from 'react';
var score = 0

export function scoreIncrease() {
          score++
          console.log(score)

            }



export function scoreReset(){

    score=0
              console.log(score)

}

export function RenderScore(){
    //const [score, scoreIncrease] = useState(0)
    
    return (

        <div>
    <h2>Score : {score}</h2>
    <button onClick={scoreIncrease}>Increase score</button>
    <button onClick={scoreReset}>Reset score</button>
    </div>
    )
}

