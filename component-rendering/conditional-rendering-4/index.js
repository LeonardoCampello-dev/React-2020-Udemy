import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

import NavBar from "./NavBar";

function App() {
    const [view, setView] = useState(false);

    const handleClick = useCallback(() => {
        setView(!view);
    }, [view, setView]);

    return (
        <>
            <button onClick={handleClick}>Menu</button>
            {view && <NavBar />}
        </>
    );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
