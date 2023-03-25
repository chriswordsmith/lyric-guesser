import logo from './logo.svg';
import React from 'react';
import './App.css';
import { fetchData } from './services/quotes-fetch';
import { useState, useEffect } from 'react';
import { getQuotes } from './services/quotes-fetch'
import { getRoles } from '@testing-library/react';
import DisplayQuote from './tests/Quote-Display/displayquote';
import DisplayRhyme from './tests/Rhyme-Display/displayrhyme';
import DisplaySynonym from './tests/Thesaurus-Display/displaythesaurus';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <main>
        <DisplayQuote />
        <DisplayRhyme />
        <DisplaySynonym />
      </main>
      </header>
    </div>


  );
  }
export default App;
