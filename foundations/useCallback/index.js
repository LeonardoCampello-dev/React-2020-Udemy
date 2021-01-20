import React, { useCallback } from "react";
import ReactDOM from "react-dom";

import Button from "./Button";

function App() {
  const message = "Hello useCallback!";

  const handleClick = useCallback((text) => {
    window.alert(text);
  }, []);

  return (
    <>
      <Button
        clicked={() => {
          handleClick(message);
        }}
      />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
