import React from 'react';
import {
    BrowserRouter,
    Routes, // instead of "Switch"
    Route,
} from "react-router-dom";

import './App.css';
import MainMenu from "./navbar";
import {HomePage} from "./components/pages/home_page";

function App() {
  return (
    <div className="App">
      <MainMenu/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export default App;
