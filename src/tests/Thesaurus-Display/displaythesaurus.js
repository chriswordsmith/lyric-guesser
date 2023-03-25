import React from 'react';
import { useState, useEffect } from 'react';
import { getSynonym } from '../../services/synonymFetch';



const DisplaySynonym = () => { 
    const [synonymResponse, setResponse] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
     fetchSynonym()
      }, [])
   

    const fetchSynonym = async () => {
    try{
        const responses = await getSynonym()
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