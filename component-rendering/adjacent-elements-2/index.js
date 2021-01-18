import React from "react";
import ReactDOM from "react-dom";

import Page from "./Page";

import "./styles.css";

function App() {
    return <Page />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
