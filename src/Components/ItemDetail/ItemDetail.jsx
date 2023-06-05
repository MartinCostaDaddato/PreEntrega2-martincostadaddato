import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

import { CartContext } from "../CartContext/CartContext";

function ItemDetail({ id, name, price, category, img, stock, description }) {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext)

  const handleOnAdd = (cantidad) => {
    setQuantityAdded(cantidad);

    const item = {
      id, name, price
    }

    addItem(item, cantidad)
  };


  return (
    <div className="flex sm:border border-neutral-800 flex-col sm:flex-row max-w-xs sm:max-w-3xl">
      <img
        src={img}
        className=" sm:w-1/2 mb-10 sm:mb-0 object-cover self-center"
      />
      <div className="flex flex-col w-full p-2 md:p-5 justify-between">
        <p className="w-full text-2xl md:text-3xl text-center mb-5 sm:mb-0">
          {name}
        </p>
        <h4 className="text-sm sm:text-xl">
          Category: <b>{category}</b>
        </h4>
        <p className="text-sm sm:text-xl">{description}</p>
        <h3 className="self-center text-lg md:text-3xl my-5 sm:my-0">
          $<b>{price}</b>
        </h3>
        <div className="flex flex-col justify-center">
          <p className="text-center mb-5">Stock: {stock}</p>
          {
            quantityAdded > 0 ?(
            <>
              
              <Link to="/cart" className='border border-neutral-800 rounded-md w-1/2 p-5 self-center'>
                Terminar compra
              </Link>
            </>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )
          }
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
