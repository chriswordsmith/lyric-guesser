import logo from './logo.svg';
import React from 'react';
import './App.css';
import { fetchData } from './services/quotes-fetch';
import { useState, useEffect } from 'react';
import { getQuotes } from './services/quotes-fetch';
import { getRoles } from '@testing-library/react';



function App() {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true)

    useEffect(() => {
     fetchData()
      }, [])
   

const fetchData = async () => {
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
       {!loading && <h2>{JSON.stringify(response[0].quote) }</h2>}
       
      </header>
    </div>
  );
  }
export default App;
