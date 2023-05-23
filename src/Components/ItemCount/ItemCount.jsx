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
        <div className="flex items-center justify-between px-4 md:px-4 py-1 md:py-2 text-3xl w-full sm:w-1/2 border border-neutral-800 rounded-lg text-nuetral-800">
          <button onClick={decrementarCantidad}>-</button>
          <h4 className="">{cantidad}</h4>
          <button onClick={incrementarCantidad}>+</button>
        </div>
      </div>
  );
}

export default ItemCount;
