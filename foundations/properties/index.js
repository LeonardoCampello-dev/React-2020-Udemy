import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./Welcome";

function App() {
  return (
    <>
      {/* Generic component */}
      <Welcome gender="male" name="Leonardo" />
      <Welcome gender="female" name="Bianca" />
      <Welcome />
    </>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
