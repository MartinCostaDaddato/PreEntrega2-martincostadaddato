import React from "react";
import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className="flex justify-center flex-wrap">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};
export default ItemList;
