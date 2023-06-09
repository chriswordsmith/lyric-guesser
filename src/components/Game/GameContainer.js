import React from "react";
import { QuoteHashWord } from "../../services/wordHash";
import { useState, useEffect } from 'react';
import { getQuotes } from "../../services/APIs/quotesFetch";
import UserAnswer from "../UserAnswer/UserAnswer";


function GameContainer() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [quoteResponse, setQuoteResponse] = useState([]);

  const [loading, setLoading] = useState(true);

  // quotes API call
  useEffect(() => {
   fetchQuotes()
    }, [])
 

  const fetchQuotes = async () => {
    try{
      const responses = await getQuotes()
      setLoading(false)
      setQuoteResponse(responses.data)
    }
    catch(e){
      console.error(e)
    }
  }
  
  function handleGameOver() {
    setGameOver(true);
    // any other logic needed to end the game
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const handleAnswerOption = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < 4 ) {
			setCurrentQuestion(nextQuestion);
		} else {
			setGameOver(true);
		}
	};

  return (
    <div className="game-container">
    {gameOver ? (
      <div className='score-section'>
        You scored {score} out of 10  
      </div>
    ) : (
      <>
      {!loading &&
        ( <> <div className='question-section'>
          <div className='question-count'>
            <span>Guess The Quote!</span>
          </div>
          <div className='question-text'>     
          {!loading && <QuoteHashWord quote = {quoteResponse[0]}/>}
          </div>
        </div>
        <div className='answer-section'>
          {!loading && <UserAnswer quote = {quoteResponse[0]}/>}
        </div> 
        <div className="reset-button">
          <button onClick={refreshPage}>New Question</button>
        </div>
        </>)
    }
      </>
    )}
      <h1>Score: {score}</h1>
      <button onClick={() => setScore(score + 1)}>Increase Score</button>
      <button onClick={handleGameOver}>End Game</button>
      {gameOver && <h2>Game Over!</h2>}
    </div>
    

  );
}

export default GameContainer;
