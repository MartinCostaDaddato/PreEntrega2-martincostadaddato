import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
    return (
        <div className="cart text-neutral-800">
            <FaShoppingCart/>
            <span>0</span>
        </div>
    )
}

export default CartWidget;