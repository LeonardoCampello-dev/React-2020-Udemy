import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      console.info(name);
    },
    [name]
  );

  const handleChange = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome: </label>
        <input
          id="name"
          type="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
        <input type="submit" value="Mostrar" />
      </form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
