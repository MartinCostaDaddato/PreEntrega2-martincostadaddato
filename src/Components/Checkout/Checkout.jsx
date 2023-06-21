import { useState, useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import {
  collection,
  documentId,
  getDocs,
  getFirestore,
  writeBatch,
  addDoc,
} from "firebase/firestore";
import CheckoutForm from "./CheckoutForm";
import { FaHome, FaTrashAlt } from "react-icons/fa";
import { Navigate, useParams, Link } from "react-router-dom";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart, removeItem } = useContext(CartContext);

  const generarOrden = ({ name, phone, email }) => {
    const buyer = { name: name, phone: phone, email: email };
    const items = cart.map((item) => ({
      id: item.id,
      title: item.name,
      price: item.price,
      cantidad: item.cantidad,
    }));
    const fecha = new Date();
    const date = `${fecha.getFullYear()}-${
      fecha.getMonth() + 1
    }-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
    const totalOrden = total;
    const order = { buyer: buyer, items: items, date: date, total: totalOrden };
    console.log(order);

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order)
      .then((resultado) => {
        setOrderId(resultado.id);
      })
      .catch((resultado) => {
        console.error("Error! No se pudo completar la compra!");
      });
  };
  if(cart.length > 0){
  return (
    <div className="flex w-full justify-center">
      {orderId ? (
        <div className="flex flex-col mt-5 border border-neutral-800 p-7 rounded-lg shadow-xl  bg-slate-200">
          <p className="text-4xl bg-slate-200">
            La compra se realizó con Exito!
          </p>
          <p className="text-xl mt-5 bg-slate-200">Id: {orderId}</p>
          <p className="text-xl mt-5 bg-slate-200">Gracias!</p>
          
          <p className="text-3xl my-7 bg-slate-200">Tus productos:</p>
          {cart.map((item) => (
              <div className="flex items-center my-1 justify-between border border-neutral-300 shadow shadow-md md:text-2xl bg-slate-200">
                <div className="flex items-center bg-slate-200">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 md:w-32 max-h-40 m-5 object-cover"
                  />
                  <div>
                    <p className="text-3xl bg-slate-200">{item.name}</p>
                    <p className="text-sm md:text-base bg-slate-200">
                      Precio Unitario: {item.price}
                    </p>
                    <p className="text-sm md:text-base bg-slate-200">
                      Cantidad: {item.cantidad}
                    </p>
                    <p className="text-sm md:text-base bg-slate-200">
                      Subtotal: <b className="bg-slate-200">{item.price * item.cantidad}</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          <p className="text-3xl mt-4 text-center bg-slate-200">Total de la compra: ${total}</p>
          <Link to="/" className="self-end mt-6 underline underline-offset-4 text-md border " onClick={clearCart}>Volver a la tienda</Link>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-evenly items-start w-full">
          <div className="flex flex-col w-full md:w-2/5">
            <p className="text-3xl my-5 border-b border-black text-center">
              Tus productos{" "}
            </p>
            {cart.map((item) => (
              <div className="flex items-center my-1 justify-between border border-neutral-300 shadow md:text-2xl">
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 md:w-32 max-h-40 m-5 object-cover"
                  />
                  <div>
                    <p className="text-3xl">{item.name}</p>
                    <p className="text-sm md:text-base">
                      Precio Unitario: {item.price}
                    </p>
                    <p className="text-sm md:text-base">
                      Cantidad: {item.cantidad}
                    </p>
                    <p className="text-sm md:text-base">
                      Subtotal: <b>{item.price * item.cantidad}</b>
                    </p>
                  </div>
                </div>

                <FaTrashAlt
                  className="m-5 border-neutral-800 hover:cursor-pointer"
                  onClick={() => {
                    removeItem(item.id, item.price, item.cantidad)
                    }
                  }
                />
              </div>
            ))}
          </div>
          <div className="flex md:self-start">
            <CheckoutForm onConfirm={generarOrden} />
          </div>
        </div>
      )}
    </div>
  );
  }else{
    return(
      <div className="flex flex-col items-center mt-52">
          <p className="text-2xl md:text-3xl mb-5">No hay items en el carrito</p>
          <Link to='/' className="border border-neutral-800 rounded-md p-4 text-xl">Agregar productos</Link>
      </div>
  )
  }
};

export default Checkout;