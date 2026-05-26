import React from "react";

const ProductDetail = ({ isOpenDetail, onCloseDetail, product, handleAddToCart }) => {

  if (!isOpenDetail || !product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="absolute inset-0" onClick={onCloseDetail}></div>

      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-xl overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh]">
        <button
          onClick={onCloseDetail}
          className="absolute top-3 right-3 z-20 px-3 py-1 cursor-pointer bg-white/80 hover:bg-gray-100 text-gray-500 hover:text-gray-800 rounded-lg transition-colors border border-gray-200"
        >
          X
        </button>

        <div className="w-full md:w-1/2 bg-gray-50 flex items-center justify-center p-6 h-64 md:h-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain max-h-60"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between overflow-y-auto">
          <div>
            {product.brand && (
              <span className="text-xs font-semibold uppercase text-indigo-600 tracking-wider block mb-1">
                {product.brand}
              </span>
            )}
            <h2 className="text-xl font-bold text-gray-800 leading-snug mb-2 uppercase">
              {product.name}
            </h2>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-xl font-bold text-red-500">
                {product.price?.toLocaleString("vi-VN")} USD
              </span>
              {product.oldPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {product.oldPrice?.toLocaleString("vi-VN")}đ
                </span>
              )}
            </div>
            <hr className="my-3 border-gray-100" />
            <p className="text-sm text-gray-600 leading-relaxed max-h-40 overflow-y-auto pr-1">
              {product.description || "Chưa có mô tả cho sản phẩm này."}
            </p>
          </div>
          <div className="mt-6">
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium text-sm rounded-lg transition-colors cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
