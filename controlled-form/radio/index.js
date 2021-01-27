import { StrictMode, useCallback, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [size, setSize] = useState("large");

  const handleChange = useCallback(
    (e) => {
      setSize(e.target.value);
    },
    [setSize]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(size);
    },
    [size]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          id="radio-small"
          type="radio"
          value="small"
          onChange={handleChange}
          checked={size === "small"}
        />
        <label htmlFor="radio-small">Pequena</label>
        <br />

        <input
          id="radio-medium"
          type="radio"
          value="medium"
          onChange={handleChange}
          checked={size === "medium"}
        />
        <label htmlFor="radio-medium">Média</label>
        <br />

        <input
          id="radio-large"
          type="radio"
          value="large"
          onChange={handleChange}
          checked={size === "large"}
        />
        <label htmlFor="radio-large">Grande</label>
        <br />
        <br />

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
