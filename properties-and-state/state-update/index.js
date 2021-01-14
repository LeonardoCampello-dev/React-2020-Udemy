import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import Square from "./Square/Square";
import Button from "./Button/Button";

function App() {
    const [visibility, setVisibility] = useState(true);

    const handleClick = useCallback(() => {
        setVisibility((prev) => {
            return !prev;
        });
    }, [setVisibility]);

    return (
        <div>
            <Button title="Mostrar/Esconder" clicked={handleClick} />
            <Square show={visibility} />
        </div>
    );
}

const rootElement = document.querySelector("#root");

ReactDOM.render(<App />, rootElement);
