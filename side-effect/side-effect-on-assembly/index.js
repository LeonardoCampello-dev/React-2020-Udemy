import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";

function randomNumber() {
  return Math.ceil(Math.random() * 10);
}

function App() {
  const [number, setNumber] = useState(null);

  const handleClick = useCallback(() => {
    setNumber(randomNumber());
  }, [setNumber]);

  useEffect(() => {
    document.title = number
      ? `O número sorteado foi ${number}!`
      : "Sorteie um número agora!";
  });

  return (
    <>
      {number && <p>O número sorteado foi {number}!</p>}
      <button onClick={handleClick}>SORTEIO</button>
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
