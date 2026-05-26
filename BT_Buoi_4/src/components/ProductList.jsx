import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data, handleAddToCart, handleOpenDetail }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto justify-items-center">
      {data.map((shoe) => (
        <ProductCard key={shoe.id} product={shoe} handleAddToCart={handleAddToCart} handleOpenDetail={handleOpenDetail} />
      ))}
    </div>
  );
};

export default ProductList;
