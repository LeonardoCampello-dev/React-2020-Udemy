import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 3000);

    return <>{loading ? <h4>Carregando..</h4> : <h1>Bem-vindo!</h1>}</>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
