import React, { useState } from "react";
import { selectWord } from "../../services/selectWord";

function UserAnswer(props) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);

  const correctAnswer = selectWord(props.quote);

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (answer === correctAnswer) {
      setIsCorrect(true);
      setAnswered(true);
    } else {
      setIsCorrect(false);
      setAnswered(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Enter your guess:
          <input type="text" value={answer} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {answered && isCorrect && (
        <div style={{ color: "green" }}>Correct!</div>
      )}
      {answered && !isCorrect && (
        <div style={{ color: "red" }}>
          Incorrect. The correct answer was "{correctAnswer}".
        </div>
      )}
    </div>
  );
}

export default UserAnswer;
