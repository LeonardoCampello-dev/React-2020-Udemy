import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import PostalCodeTable from "./PostalCodeTable";

function App() {
  const [data, setData] = useState({});
  async function fetchData(cep) {
    const response = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`);
    const data = await response.json();

    setData(data);
  }

  useEffect(() => {
    fetchData("93534520");
  }, []);

  return <PostalCodeTable {...data} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
