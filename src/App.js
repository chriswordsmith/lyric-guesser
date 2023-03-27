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
import UserAnswer from './components/UserAnswer/UserAnswer';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import Footer from './components/Footer/Footer'


function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Navbar className='custom-navbar' color="light" light expand="md">
        <NavbarBrand href="/">Quote Generator</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
            <NavLink href="https://github.com/chriswordsmith">GitHub</NavLink>

            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <header className="App-header">
        <main>
          <DisplayQuote />
          <DisplayRhyme />
          <DisplaySynonym />
          <UserAnswer />
        </main>
        <Footer />
      </header>
    </div>
  );
}

export default App;
