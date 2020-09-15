import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Router from './Router.js';
import { GlobalStyle } from './components/styles/HomePageStyles.js';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
        <h1>CharacterKeeper</h1>
        <p>support your reading comprehension</p>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </div>
  );
}

export default App;
