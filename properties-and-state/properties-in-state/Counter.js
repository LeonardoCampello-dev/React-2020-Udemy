import React, { useState } from "react";

function Counter({ initialValue }) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default Counter;
