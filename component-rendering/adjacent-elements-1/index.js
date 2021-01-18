import React from "react";
import ReactDOM from "react-dom";

function App() {
    return [
        <h1 key="title">Título</h1>,
        <h2 key="caption">Subtítulo</h2>,
        <p key="paragraph">Texto</p>
    ];
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
