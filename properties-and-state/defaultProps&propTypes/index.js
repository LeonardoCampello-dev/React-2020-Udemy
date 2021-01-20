import React from "react";
import ReactDOM from "react-dom";

import Congratulation from "./Congratulation";

const rootElement = document.querySelector("#root");

function App() {
  return <Congratulation standing={1} />;
}

ReactDOM.render(<App />, rootElement);
