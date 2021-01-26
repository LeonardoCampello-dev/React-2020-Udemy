import React, { useCallback, useRef } from "react";
import ReactDOM from "react-dom";

function App() {
  const inputName = useRef(null);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    console.info(inputName.current.value);
    inputName.current.value = "";
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nome: </label>
        <input id="name" type="text" ref={inputName} />
        <button type="submit">Mostrar</button>
      </form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
