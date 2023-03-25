import logo from './logo.svg';
import React from 'react';
import './App.css';
import { fetchData } from './services/quotes-fetch';
import { useState, useEffect } from 'react';
import { getQuotes } from './services/quotes-fetch'
import { getRoles } from '@testing-library/react';
import DisplayQuote from './components/Quote-Display/displayquote';
import DisplayRhyme from './components/Rhyme-Display/displayrhyme';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <main>
        <DisplayQuote />
        <DisplayRhyme />
      </main>
      </header>
    </div>


  );
  }
export default App;
