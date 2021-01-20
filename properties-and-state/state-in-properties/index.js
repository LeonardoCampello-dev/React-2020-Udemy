import React, { useState } from "react";
import ReactDOM from "react-dom";

import ColoredSquare from "./ColoredSquare";
import ColorizerButton from "./ColorizerButton";

function App() {
  const [color, setColor] = useState("#8357e5");

  return (
    <div>
      <ColoredSquare squareColor={color} />

      <ColorizerButton
        title="red"
        clicked={() => {
          setColor("red");
        }}
      />

      <ColorizerButton
        title="green"
        clicked={() => {
          setColor("green");
        }}
      />

      <ColorizerButton
        title="blue"
        clicked={() => {
          setColor("blue");
        }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
