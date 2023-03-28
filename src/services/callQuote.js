import React from 'react';
import { useState, useEffect } from 'react';
import { selectWord } from './selectWord';
import { getQuotes } from './APIs/quotesFetch';
import BlankWordDisplay from '../tests/BlankWord-Display/blankwordDisplay';
import { getSynonym } from './APIs/synonymFetch';
import { getRhyme } from './APIs/rhymeFetch';
import DisplayRhyme from './callRhyme';
import DisplaySynonym from './callThesaurus';
import UserAnswer from '../components/UserAnswer/UserAnswer';
import { QuoteHashWord } from './wordHash';


const DisplayQuote = () => { 
    const [quoteResponse, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     fetchQuotes()
      }, [])
   

    const fetchQuotes = async () => {
      try{
        const responses = await getQuotes()
        setLoading(false)
        setResponse(responses.data)
      }
      catch(e){
        console.error(e)
      }
    }
    return (
    <div>
      <h1>API CALL</h1>
      <p>{loading ? "loading" : "done"}</p>
      {!loading && <QuoteHashWord quote = {quoteResponse[0].quote}/>}
      {!loading && <p>{JSON.stringify(quoteResponse[0].author)}</p>}
      {/* Runs quote through the blank word logic to find the longest word and make this the selected word, then pass to APIs */}
      {!loading && <BlankWordDisplay quote = {JSON.stringify(quoteResponse[0].quote)}/>}
      {/* Sending quote data to HINT apis, so that they can find the longest word and then do API call to generate our hints */}
      {!loading && <DisplayRhyme quote = {JSON.stringify(quoteResponse[0].quote)}/>}
      {!loading && <DisplaySynonym quote = {JSON.stringify(quoteResponse[0].quote)}/>}
      {!loading && <UserAnswer quote = {JSON.stringify(quoteResponse[0].quote)}/>}
    </div>
    
  );
}

export default DisplayQuote

