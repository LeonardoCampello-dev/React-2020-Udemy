import React from "react";
import ReactDOM from "react-dom";

import Counter from "./Counter";

function App() {
    return <Counter initialValue={999} />;
}

ReactDOM.render(<App />, document.querySelector("#root"));
