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

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const { cart, total, clearCart } = useContext(CartContext);

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
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center w-full">
      <div className="flex flex-col w-full md:w-2/5">
        <p className="text-3xl my-5 border-b border-black text-center">Tus productos </p>
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
          </div>
        ))}
        
        </div>
        <div className="flex md:self-start">
          <CheckoutForm onConfirm={generarOrden} />
        </div>
      </div>
  );
};

export default Checkout;

// Insertar un Documento en Firestore
// const db = getFirestore();
// const OrdersCollection = collection(db, "orders");
// addDoc(OrdersCollection, order).then(resultado => {
//     setOrderId(resultado.id);
// })
// .catch(resultado => {
//     console.log("Error! No se pudo completar la compra!");
// });

// try {
//     const objOrder = {
//         buyer: {
//             name, phone, email
//         },
//         items: cart,
//         total: total,

//     }

//     const batch = writeBatch(db)

//     const outOfStock = []

//     const ids = cart.map(prod => prod.id)

//     const productsRef = collection(db, 'productos-bagues')

//     const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', )))

//     const { docs } = productsAddedFromFirestore

//     docs.forEach(doc => {
//         const dataDoc = doc.data()
//         const stockDb = dataDoc.stock

//         const productAddedToCart = cart.find(prod => prod.id === doc.id)
//         const prodQuantity = productAddedToCart?.quantity

//         if(stockDb >= prodQuantity){
//             batch.update(doc.ref, {stock: stockDb - prodQuantity})
//         } else {
//             outOfStock.push({id: doc.id, ...dataDoc})
//         }
//     })

//     if(outOfStock.length === 0){
//         await batch.commit()

//         const orderRef = collection(db, 'orders')

//         const orderAdded = await addDoc(orderRef, objOrder)

//         setOrderId(orderAdded.id)
//         clearCart()
//     }else{
//         console.error("Producto sin stock")
//     }

// } catch (error){
//     console.log(error)
// } finally{
//     setLoading(false)
// }
