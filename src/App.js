import "./App.css";

import React from "react";

import {default as MyAppV1} from "./snippets/MyApp-V1/MyApp-clean";
import {default as MyAppV2} from "./snippets/MyApp-V2/MyApp-clean";
import logo from "./logo.svg";

function App() {
  const apps = [<MyAppV1 />, <MyAppV2 />];
  return apps[0];
}

export default App;
