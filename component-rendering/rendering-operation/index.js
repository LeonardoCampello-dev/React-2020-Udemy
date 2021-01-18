import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";

function App() {
    const [weather, setWeather] = useState("ensolarado");

    const handleClick = useCallback(() => {
        setTimeout(() => {
            window.alert(`O clima está ${weather}!`);
        }, 3000);
    }, [weather]);

    return (
        <>
            <p>O clima está {weather}!</p>

            <button
                onClick={() => {
                    setWeather("ensolarado");
                }}
            >
                Ensolarado
      </button>

            <button
                onClick={() => {
                    setWeather("nublado");
                }}
            >
                Nublado
      </button>

            <button
                onClick={() => {
                    setWeather("chuvoso");
                }}
            >
                Chuvoso
      </button>

            <button onClick={handleClick}>Mostrar clima</button>
        </>
    );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
