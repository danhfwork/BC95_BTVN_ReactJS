import React, { useState } from "react";
import ProductCart from "./ProductCart";
import ProductList from "./ProductList";
import dataShoes from "./data.json";
import ProductDetail from "./ProductDetail";

const BTShoes = () => {
  // State
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  // Hàm
  const handleOpenDetail = (prd) => {
    setSelectedProduct(prd);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedProduct(null);
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

  const handleDeleteCart = (prdID) => {
    setCart(cart.filter((item) => item.id !== prdID));
  };
  const handlePayment = () => {
    setCart([]);
    setIsCartOpen(false);
  };
  const handleIncreaseInCart = (prd) => {
    const newCart = cart.map((item) => {
      if (item.id === prd.id) {
        return { ...item, cartQuantity: item.cartQuantity + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const handleDecreaseInCart = (prd) => {
    const newCart = cart.map((item) => {
      if (item.id === prd.id) {
        const newQty = item.cartQuantity - 1;
        return { ...item, cartQuantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const countCartItem = () =>
    cart.reduce((total, item) => total + item.cartQuantity, 0);

  return (
    <div className="container mx-auto w-full min-h-screen mb-20 px-4">
      <div className="flex justify-between items-center py-4">
        <h1 className="font-bold italic text-3xl">
          Shoes<span className="text-blue-500">Store</span>
        </h1>
        <ProductCart
          isOpenCart={isCartOpen}
          cart={cart}
          handleOpenCart={handleOpenCart}
          handleCloseCart={handleCloseCart}
          handleDeleteCart={handleDeleteCart}
          countCartItem={countCartItem}
          handlePayment={handlePayment}
          handleIncreaseInCart={handleIncreaseInCart}
          handleDecreaseInCart={handleDecreaseInCart}
        />
      </div>

      <h1 className="uppercase text-center text-3xl font-bold my-20">
        Danh sách sản phẩm
      </h1>

      <ProductList
        data={dataShoes}
        handleAddToCart={handleAddToCart}
        handleOpenDetail={handleOpenDetail}
      />
      <ProductDetail
        isOpenDetail={isDetailOpen}
        onCloseDetail={handleCloseDetail}
        product={selectedProduct}
        handleAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default BTShoes;
