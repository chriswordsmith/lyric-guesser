import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import CallQuote from './services/callQuote';
import CallRhyme from './services/callRhyme';
import CallSynonym from './services/callThesaurus';
import DisplayScore from './tests/Test-Scoreboard/scoreboardDisplay';
import UserAnswer from './components/UserAnswer/UserAnswer';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap';
import Footer from './components/Footer/Footer'
import GameContainer from './components/Game/GameContainer';


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
          <CallQuote />
        </main>
        <Footer />

      </header>
    </div>
  );
}

export default App;
