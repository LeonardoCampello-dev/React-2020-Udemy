import { StrictMode, useCallback, useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";

function App() {
  const [message, setMessage] = useState("");

  const handleChange = useCallback(
    (e) => {
      setMessage(e.target.value);
    },
    [setMessage]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(message);
    },
    [message]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          cols="50"
          rows="5"
          autoComplete="off"
          value={message}
          onChange={handleChange}
        />
        <input type="submit" value="Mostrar" />
      </form>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
