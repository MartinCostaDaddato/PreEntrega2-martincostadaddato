import { createContext, useState } from "react";
import { Alert } from '@rewind-ui/core';
import { Navigate, redirect } from "react-router-dom";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addItem = (item, cantidad) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, cantidad }]);
      setTotal(total + item.price * cantidad);
      setTotalQuantity(cantidad)
    } else {
      console.log('El producto seleccionado ya se encuentra en el carrito')

      }
  };

  function removeItem(itemId, price, cantidad){
    const cartUpdate = cart.filter((prod) => prod.id !== itemId);
    setTotal(total - price * cantidad)
    setCart(cartUpdate);
    console.log(cart.length)
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, total, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
