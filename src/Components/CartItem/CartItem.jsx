import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ id, name, price, category, img, stock, description }) => {
  const { cart, totalQuantity, total} = useContext(CartContext);
  console.log(cart)

  return (
    <div className="flex items-center  justify-between w-full md:w-1/2  border border-neutral-300 shadow md:text-2xl mt-6">
      <div className="flex items-center">
        <img src={img} alt={name} className="w-16 md:w-32 max-h-32 m-5" />
        <div>
          <p className="text-3xl">{name}</p>
          <p className="text-sm md:text-base">Precio Unitario: {price}</p>
          <p className="text-sm md:text-base">Cantidad: {}</p>
        </div>
      </div>
      <FaTrashAlt className="m-5" />
    </div>
  );
};

export default CartItem;
