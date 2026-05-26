import React from "react";

const ProductCart = ({
  handleOpenCart,
  handleCloseCart,
  isOpenCart,
  cart,
  handleDeleteCart,
  countCartItem,
  handlePayment,
  handleIncreaseInCart,
  handleDecreaseInCart,
}) => {
  return (
    <div>
      <button
        onClick={handleOpenCart}
        className="cursor-pointer text-blue-500 text-2xl relative"
      >
        <i className="fa-solid fa-cart-shopping" />
        {countCartItem() > 0 && (
          <span className="w-3 h-3 p-2 bg-red-500 rounded-full absolute -top-1 -right-1 flex items-center justify-center text-white text-sm">
            {countCartItem()}
          </span>
        )}
      </button>
      {isOpenCart && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div
            onClick={handleCloseCart}
            className="fixed inset-0 bg-black/50"
          />
          <div className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-2xl flex flex-col max-h-[85vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                Giỏ hàng của bạn
              </h2>
              <button
                onClick={handleCloseCart}
                className="text-gray-400 hover:text-gray-600 p-1.5 rounded-full hover:bg-gray-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-gray-500 py-8">
                  Giỏ hàng còn trống!
                </p>
              ) : (
                cart.map((item) => (
                  <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md bg-gray-50 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate uppercase">
                        {item.name}
                      </h3>
                      <p class="text-xs text-gray-500 mt-0.5 italic">
                        Price {item.price.toLocaleString()} USD
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-300 rounded">
                          <button
                            onClick={() => handleDecreaseInCart(item)}
                            className="px-2 py-0.5 text-gray-500 hover:bg-gray-100"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-medium text-gray-700">
                            {item.cartQuantity}{" "}
                          </span>
                          <button
                            onClick={() => handleIncreaseInCart(item)}
                            className="px-2 py-0.5 text-gray-500 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-sm font-bold text-gray-900">
                          {(item.price * item.cartQuantity).toLocaleString()}{" "}
                          USD
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteCart(item.id)}
                      className="text-gray-400 hover:text-red-500 p-1 cursor-pointer"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center text-sm mb-3">
                <span className="font-medium text-gray-700">Tạm tính:</span>
                <span className="text-lg font-bold text-indigo-600">
                  {cart
                    .reduce(
                      (total, item) => total + item.price * item.cartQuantity,
                      0,
                    )
                    .toLocaleString()}{" "}
                  USD
                </span>
              </div>
              <div>
                <button
                  onClick={handlePayment}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg text-sm transition"
                >
                  Tiến hành thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCart;
