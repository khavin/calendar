import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  /**
   * @type {string}
   */
  let greetings = "Hello !";

  return (
    <>
      <div>{greetings}</div>
    </>
  );
}

export default App;
