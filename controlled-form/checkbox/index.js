import { StrictMode, useCallback, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = useCallback(
    (e) => {
      setIsChecked(e.target.checked);
    },
    [setIsChecked]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(isChecked ? "Marcado" : "Não foi marcado");
    },
    [isChecked]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
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
