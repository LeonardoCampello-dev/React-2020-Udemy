import React from "react";
import ReactDOM from "react-dom";

import Order from "./Order";

const order = {
    food: "Pizza",
    flavor: "4 queijos"
};

const order02 = {
    food: "Pizza",
    flavor: "Calabresa"
};

function App() {
    return (
        <div>
            <Order {...order} />
            <Order {...order02} />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector("#root"));
