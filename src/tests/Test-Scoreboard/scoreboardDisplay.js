import React from 'react';
import { useState } from 'react';
// import { RenderScore } from '../../scoreCounter';
// import { scoreIncrease } from '../../scoreCounter';
// import { scoreReset } from '../../scoreCounter';

const DisplayScore = () => { 

    const [score, scorePlus] = useState(0)
    
    const increase = () => {
        scorePlus(score + 1);
    }
    const reset = () => {
        scorePlus(0)
    }
    return (

        <div>
    <h2>Score : {score}</h2>
    <button onClick={increase}>Increase score</button>
    <button onClick={reset}>Reset score</button>
    </div>
    )
}
export default DisplayScore