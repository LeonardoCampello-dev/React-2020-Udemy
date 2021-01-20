import React from "react";
import ReactDOM from "react-dom";

function App() {
  // return React.createElement("h1", null, "Hello World!");
  return (
    <>
      <h1 className="hello">Hello World!</h1>
      <p>React is really cool</p>
    </>
  );
}

// ReactDOM.render(React.createElement(App), document.querySelector("#root"));
ReactDOM.render(<App />, document.querySelector("#root"));
