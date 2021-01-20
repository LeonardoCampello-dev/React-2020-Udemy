import React from "react";

function ColoredSquare({ squareColor }) {
  const styles = {
    width: "300px",
    height: "300px",
    backgroundColor: squareColor
  };

  return <div style={styles} />;
}

export default ColoredSquare;
