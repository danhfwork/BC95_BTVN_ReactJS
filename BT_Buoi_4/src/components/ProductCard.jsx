import React from "react";

const ProductCard = ({ product, handleAddToCart, handleOpenDetail }) => {
  return (
    <div className="border border-gray-300 w-full rounded-lg">
      <img className="w-full px-2  " src={product.image} alt={product.name} />
      <div className="p-4">
        <h2 className="font-semibold text-lg uppercase text-gray-800">
          {product.name}
        </h2>
        <p className="font-bold italic">
          {product.price.toLocaleString() + " USD"}
        </p>
        <div className="flex justify-between items-center italic font-light">
          <button className="cursor-pointer" onClick={() => handleOpenDetail(product)}>
            Xem chi tiết
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
