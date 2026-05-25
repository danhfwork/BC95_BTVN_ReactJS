import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data, handleAddToCart }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
      {data.map((shoe) => (
        <ProductCard key={shoe.id} product={shoe} handleAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
