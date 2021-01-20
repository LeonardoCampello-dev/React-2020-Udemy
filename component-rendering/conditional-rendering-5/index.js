import React from "react";
import ReactDOM from "react-dom";

import Input from "./Input";

const styles = {
  resize: "none"
};

function App() {
  return <Input category="textarea" rows="6" cols="10" style={styles} />;
}

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
