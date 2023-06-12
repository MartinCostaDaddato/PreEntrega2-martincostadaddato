import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
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
    <div className="flex w-full justify-center items-center flex-col">
      <div className="flex justify-between px-4 md:px-4 py-1 md:py-2 text-3xl w-full sm:w-44 border border-neutral-800 rounded-lg text-nuetral-800">
        {cantidad>1 ? <button onClick={decrementarCantidad} >-</button> : <div className="ml-3"></div>}
        <h4 className="">{cantidad}</h4>
        {cantidad<stock ? <button onClick={incrementarCantidad}>+</button> : <div className="mr-3"></div>}
      </div>
      <button className="mt-3 border border-neutral-800 border-1 py-2 rounded-md text-neutral-800 w-1/2" onClick={() => onAdd(cantidad)}>
        Añadir al Carrito
      </button>
    </div>
  );
}

export default ItemCount;
