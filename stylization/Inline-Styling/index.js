import React from "react";
import ReactDOM from "react-dom";

import Square from "./Square/Square";

function App() {
  return <Square color="#85DEF2" />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
