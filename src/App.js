import "./styles.css";
import React from "react";
import Main from "./main.js";

import "firebase/storage";

export default function App() {
  return (
    <>
      <div className="App">
        <Main />
      </div>
    </>
  );
}
