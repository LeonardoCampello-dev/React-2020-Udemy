import React, { useEffect } from "react";
import ReactDOM from "react-dom";

async function fetchData(cep) {
  const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
  const data = await response.json();

  console.info(data);
}

function App() {
  useEffect(() => {
    fetchData("93534520");
  });

  return <div />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
