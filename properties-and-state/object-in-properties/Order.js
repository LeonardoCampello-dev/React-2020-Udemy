import React from "react";

function Order({ food, flavor }) {
  return (
    <div>
      <p>
        <strong>Comida: </strong>
        {food}
      </p>
      <p>
        <strong>Sabor: </strong>
        {flavor}
      </p>
    </div>
  );
}

export default Order;
