import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"



const Cart = () => { 
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    if(cart.length === 0){
        return(
            <div className="flex flex-col items-center mt-52">
                <p className="text-2xl md:text-3xl mb-5">No hay items en el carrito</p>
                <Link to='/' className="border border-neutral-800 rounded-md p-4 text-xl">Agregar productos</Link>
            </div>
        )
    }
    return(
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center w-full">
                { cart.map(p => <CartItem key={p.id} {...p}/>) }
                <h3 className="text-xl md:text-5xl mt-10 m-5">Total: ${total}</h3>
                <div className="flex flex-col w-1/2 justify-center items-center">
                    <Link to='/checkout' className="text-2xl w-full md:text-3xl border rounded-md md:w-1/2 text-center p-3 mb-4 border-neutral-800 text-neutral-800 hover:bg-green-800 hover:text-white transition-colors">Checkout</Link>
                    <button onClick={() => clearCart() } className='text-sm md:text-lg p-3 border border-neutral-800 rounded-md hover:bg-red-300 transition-colors' >Limpiar carrito</button>    
                </div>
            </div>
        </div>
    
        )
}

export default Cart;