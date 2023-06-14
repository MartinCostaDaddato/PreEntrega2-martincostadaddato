import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ id, name, price, category, img, stock, description, cantidad}) => {

  const { cart, totalQuantity, total, removeItem } = useContext(CartContext);

  return (
    <div className="flex items-center  justify-between w-full md:w-1/2  border border-neutral-300 shadow md:text-2xl mt-6">
      <div className="flex items-center">
        <img
          src={img}
          alt={name}
          className="w-16 md:w-32 max-h-40 m-5 object-cover"
        />
        <div>
          <p className="text-3xl">{name}</p>
          <p className="text-sm md:text-base">Precio Unitario: {price}</p>
          <p className="text-sm md:text-base">Cantidad: {cantidad}</p>
          <p className="text-sm md:text-base">Subtotal: <b>{price * cantidad}</b></p>
        </div>
      </div>
      <FaTrashAlt className="m-5 border-neutral-800 hover:cursor-pointer" onClick={() => removeItem(id, price, cantidad)} />
    </div>
  );
};

export default CartItem;
