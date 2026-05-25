import React, { useState } from "react";
import ProductCart from "./ProductCart";
import ProductList from "./ProductList";
import dataShoes from "./data.json";

const BTShoes = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleOpenCart = () => {
    setIsCartOpen(true);
  };
  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const handleAddToCart = (prd) => {
    const index = cart.findIndex((item) => item.id === prd.id);
    if (index === -1) {
      prd.cartQuantity = 1;
      setCart([...cart, prd]);
    } else {
      const newCart = [...cart];
      newCart[index].cartQuantity += 1;
      setCart(newCart);
    }
  };
  //
  const handleDeleteCart = (prdID) => {
    setCart(cart.filter((item) => item.id !== prdID));
  };
  return (
    <div className="container mx-auto w-full min-h-screen mb-20">
      <div className="flex justify-between items-center py-4">
        <h1 className="font-bold italic text-3xl">
          Shoes<span className="text-blue-500">Store</span>
        </h1>
        <ProductCart
          isOpen={isCartOpen}
          cart={cart}
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
          handleDeleteCart={handleDeleteCart}
        />
      </div>
      <h1 className="uppercase text-center text-3xl font-bold my-20">
        Danh sách sản phẩm
      </h1>
      <ProductList data={dataShoes} handleAddToCart={handleAddToCart} />
    </div>
  );
};

export default BTShoes;
