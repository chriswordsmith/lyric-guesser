import React, { useState } from "react";

function GameContainer(props) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function handleGameOver() {
    setGameOver(true);
    // any other logic needed to end the game
  }

  return (
    <div className="game-container">
      <h1>Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
      <button onClick={handleGameOver}>End Game</button>
      {gameOver && <h2>Game Over!</h2>}
    </div>
  );
}

export default GameContainer;
