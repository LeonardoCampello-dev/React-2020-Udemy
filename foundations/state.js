import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  // By convention the function name always starts with "set" = setColor || setName ..
  const [status, setStatus] = useState("Não");

  return (
    <>
      <p>O botão foi clicado? {status}</p>

      {/* Function to change state */}
      <button
        onClick={() => {
          setStatus("Sim");
        }}
      >
        Clique
      </button>
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
