import React from "react";

function Square({ color }) {
    const styles = {
        width: "300px",
        height: "300px",
        backgroundColor: color
    };

    return <div style={styles} />;
}

export default Square;
