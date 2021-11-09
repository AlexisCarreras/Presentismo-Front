import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios, { AxiosResponse } from "axios";

import { urlWeather } from "./services/endpoints";

function App() {
  useEffect(() => {
    axios.get(urlWeather).then((res: AxiosResponse<any>) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
