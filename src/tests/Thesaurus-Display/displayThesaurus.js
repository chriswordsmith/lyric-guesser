import React from 'react';
import { useState, useEffect } from 'react';
import { selectWord } from '../../selectWord';
import { getSynonym } from '../../services/synonymFetch';



const DisplaySynonym = (response) => { 
    const [synonymResponse, setResponse] = useState();
    const [loading, setLoading] = useState(true);
    let synonymQuote = response.quote
    let synonymWord = selectWord(synonymQuote)
    console.log(synonymWord)
    useEffect(() => {
     fetchSynonym()
      }, [])
   

    const fetchSynonym = async () => {
    try{
        const responses = await getSynonym(synonymWord)
        console.log(responses)
        setLoading(false)
        setResponse(responses.data.synonyms)
        }catch(e){
        console.error(e)
        }
    }
    return (
    
    <div>
      <header>
      <h1>API CALL</h1>
      <p>{loading? "loading" : "done"}</p>
       {!loading && <h2>{JSON.stringify(synonymResponse[1]) }</h2>}
      </header>
    </div>
  );
}

export default DisplaySynonym
