import React from "react";

import { square, circle, color } from "./Square.module.css";

function Square() {
    const isSquare = true;

    return <div className={[isSquare ? square : circle, color].join(" ")} />;
}

export default Square;
