import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial }) {
  const [cantidad, setCantidad] = useState(initial);

  const incrementarCantidad = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  return (
      <div className="flex w-full justify-center">
        <div className="flex items-center justify-between mt-10 px-4 text-5xl w-44 h-20 border text-white">
          <button onClick={decrementarCantidad}>-</button>
          <h4 className="">{cantidad}</h4>
          <button onClick={incrementarCantidad}>+</button>
        </div>
      </div>
  );
}

export default ItemCount;
