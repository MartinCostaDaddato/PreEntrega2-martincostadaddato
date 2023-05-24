import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex justify-center items-center mt-5 mx-2 sm:m-20">
      <ItemDetail {...products} />
    </div>
  );
}

export default ItemDetailContainer;
