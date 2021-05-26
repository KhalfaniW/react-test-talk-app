import "./App.css";

import React, {useState} from "react";

import logo from "./logo.svg";

function MyApp() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={() => setIsClicked(true)}>Click Me</button>
      <main>
        <p>{isClicked ? "Started" : "Stopped"}</p>
      </main>
    </div>
  );
}

export default MyApp;
