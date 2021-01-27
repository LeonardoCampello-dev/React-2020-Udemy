import { StrictMode, useCallback, useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [tech, setTech] = useState("typescript");

  const handleChange = useCallback(
    (e) => {
      setTech(e.target.value);
    },
    [setTech]
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(tech);
    },
    [tech]
  );

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select value={tech} onChange={handleChange}>
          <option value="react">React</option>
          <option value="node">Node</option>
          <option value="reactnative">React Native</option>
          <option value="typescript">TypeScript</option>
        </select>
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
