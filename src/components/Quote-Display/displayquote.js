import React from 'react';
import { useState, useEffect } from 'react';
import { getQuotes } from '../../services/quotes-fetch';



const DisplayQuote = () => { 
    const [quoteResponse, setResponse] = useState();
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
        }catch(e){
        console.error(e)
        }

    
    }
    return (
    
    <div className="App">
      <header className="App-header">
      <h1>API CALL</h1>
      <p>{loading? "loading" : "done"}</p>
       {!loading && <h2>{JSON.stringify(quoteResponse[0].quote) }</h2>}
       
       
      </header>
    </div>
  );
}

export default DisplayQuote
