import React, { useState } from "react";
import CallSynonym from "../../services/callThesaurus";
import CallRhyme from "../../services/callRhyme";
import { selectWord } from "../../services/selectWord";
import { getSynonym } from "../../services/APIs/synonymFetch";
import { getRhyme } from "../../services/APIs/rhymeFetch";


function UserAnswer(props) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [synonymResponse, setSynonymResponse] = useState();
  const [rhymeResponse, setRhymeResponse] = useState();
  const [loading, setLoading] = useState(true);
  console.log(props.quote.quote)


  const correctAnswer = selectWord(props.quote.quote);

  // synonym api call
   const fetchSynonym = async () => {
    try{
        const responses = await getSynonym(correctAnswer)
        console.log(responses)
        setLoading(false)
        setSynonymResponse(responses.data.synonyms)
        }catch(e){
        console.error(e)
        }
    }
  
   // rhyme API call
  const fetchRhyme = async () => {
    try{
      const responses = await getRhyme(correctAnswer)
      console.log(responses)
      setLoading(false)
      setRhymeResponse(responses.data)
      console.log(rhymeResponse)
      }catch(e){
      console.error(e)
      }
    }

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
          Incorrect".
        </div>
      )}
        <div className="hint-section">
            <div>
                <button onClick={fetchRhyme}>Rhyme Hint</button>
                <p>{rhymeResponse && JSON.stringify(rhymeResponse[1])}</p>
            </div>
            <div>
                <button onClick={fetchSynonym}>Synonym Hint</button>
                <p>{synonymResponse && JSON.stringify(synonymResponse[1])}</p>
            </div>
        </div>
    </div>
  );
}

export default UserAnswer;
