import { cloneElement, useEffect, useState } from "react";
import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../main";
import { setLogLevel } from "firebase/app";
import { PulseLoader } from "react-spinners";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {

    const collectionRef = categoryId
      ? query(
          collection(db, "productos-bagues"),
          where("category", "==", categoryId)
        )
      : collection(db, "productos-bagues");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (loading) {
    <PulseLoader color="#202020" />;
  }

  return (
    <div className="flex justify-center h-full items-center">
      {loading 
      ? <PulseLoader color="#202020" className="p-96"/>
      : <ItemList products={products} />
      }
    </div>
  );
};
export default ItemListContainer;
