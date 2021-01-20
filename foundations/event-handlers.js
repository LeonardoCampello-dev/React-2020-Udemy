import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <button
      // onSubmit || onChange ..
      onClick={(e) => {
        window.alert("WOOOOW!");
        console.info(e);
      }}
    >
      Click here
    </button>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
