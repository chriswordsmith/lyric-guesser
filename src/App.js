import logo from './logo.svg';
import React from 'react';
import './App.css';
import { fetchData } from './services/quotes-fetch';
import { useState, useEffect } from 'react';



function App() {
  const [response] = useState([]);

    // useEffect(() => {
    //   let mounted = true;
    //   fetchData()
    //     .then(response => {
    //       if(mounted) {
    //         console.log()
    //       }
    //     })
    //   return () => mounted = false;
    // })


  return (
    <div className="App">
      <header className="App-header">
      <h1>API CALL</h1>
        <p>{response}</p>
      </header>
    </div>
  );
  }
export default App;
