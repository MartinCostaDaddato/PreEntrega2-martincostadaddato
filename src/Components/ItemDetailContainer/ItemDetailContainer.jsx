import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import {getDoc, doc} from 'firebase/firestore';
import { db } from "../../main";
import { PulseLoader } from "react-spinners";


function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true)

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true)

    const docRef = doc(db, 'productos-bagues', itemId)

    getDoc(docRef)
      .then(response => {
        const data = response.data()
        const productsAdapted = { id: response.id, ...data}
        setProducts(productsAdapted)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [itemId])

  return (
    <div className="flex justify-center items-center mt-5 mx-2 sm:m-20">
      {
        loading 
        ? <PulseLoader color="#202020" className="p-72"/>
        : <ItemDetail {...products} />
      }
    </div>
  );
}

export default ItemDetailContainer;
