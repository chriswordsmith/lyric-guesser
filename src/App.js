import logo from './logo.svg';
import React from 'react';
import './App.css';
import { fetchData } from './services/quotesFetch';
import { useState, useEffect } from 'react';
import { getQuotes } from './services/quotesFetch'
import { getRoles } from '@testing-library/react';
import DisplayQuote from './tests/Quote-Display/displayQuote';
import DisplayRhyme from './tests/Rhyme-Display/displayRhyme';
import DisplaySynonym from './tests/Thesaurus-Display/displayThesaurus';


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
