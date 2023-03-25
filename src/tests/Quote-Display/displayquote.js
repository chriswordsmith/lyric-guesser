import React from 'react';
import { useState, useEffect } from 'react';
import { selectWord } from '../../services/logic';
import { getQuotes } from '../../services/quotes-fetch';
import BlankWordDisplay from '../BlankWord-Display/blankword-display';



const DisplayQuote = () => { 
    const [quoteResponse, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     fetchQuotes()
      }, [])
   

    const fetchQuotes = async () => {
      try{
        const responses = await getQuotes()
        console.log(responses)
        setLoading(false)
        setResponse(responses.data)
        console.log(JSON.stringify(quoteResponse))
        console.log(responses)
        selectWord(quoteResponse)
      }
      catch(e){
        console.error(e)
      }
    }
    return (
    <div>
      <h1>API CALL</h1>
      <p>{loading ? "loading" : "done"}</p>
      {!loading && <h2>{JSON.stringify(quoteResponse[0].quote)}</h2>}
      {!loading && <p>{JSON.stringify(quoteResponse[0].author)}</p>}
      {!loading && <BlankWordDisplay quote = {JSON.stringify(quoteResponse[0].quote)}/>}
    </div>
    
  );
}

export default DisplayQuote

