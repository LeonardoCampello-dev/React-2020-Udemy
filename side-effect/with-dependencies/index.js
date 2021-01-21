import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const numberList = [1, 2, 3, 4, 5];
const letterList = ["A", "B", "C", "D", "E"];

function App() {
  const [numberIndex, setNumberIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const number = numberList[numberIndex];
  const letter = letterList[letterIndex];

  useEffect(() => {
    console.info(number);
  }, [number]);

  useEffect(() => {
    console.info(letter);
  }, [letter]);

  return (
    <>
      <h2>O número atual é {number}!</h2>

      <button
        onClick={() => {
          setNumberIndex(numberIndex + 1);
        }}
      >
        Mudar número
      </button>

      <h2>A letra atual é {letter}!</h2>

      <button
        onClick={() => {
          setLetterIndex(letterIndex + 1);
        }}
      >
        Mudar letra
      </button>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
