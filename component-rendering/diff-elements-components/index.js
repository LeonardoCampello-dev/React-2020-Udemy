import React from "react";
import ReactDOM from "react-dom";

import Txt2 from "./Txt2";

const txt1 = <p>Texto 1</p>;

function App() {
    return (
        <>
            {txt1}
            <Txt2 />
        </>
    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
