import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";


const CartWidget = () => {
    const {cart} = useContext(CartContext)
    return (
        <div className={cart.length > 0 ? 'text-xl flex justify-center items-center' : 'hidden'}>
            <p className="mr-2 text-2xl mt-1.5">{cart.length}</p>
            <FaShoppingCart className="text-xl"/>
        </div>
    )
}

export default CartWidget;