import { FaShoppingCart } from "react-icons/fa";


const CartWidget = () => {
    return (
        <div className="cart">
            <FaShoppingCart/>
            <span>0</span>
        </div>
    )
}

export default CartWidget;