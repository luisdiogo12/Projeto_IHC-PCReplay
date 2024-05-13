import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai"; 

const GeneralInfo = ({ product }) => {
  return (
    <div className="bg-gray-800 p-4">
      <h1 className="text-xl font-bold">{product.title}</h1>
      <p className="text-lg font-semibold">Preço: {product.price}</p>
      <p className="text-md">Vendedor: {product.vendor}</p>
      <div className="flex space-x-4 mt-4">
        <button className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded">
          <AiOutlineShoppingCart />
          <span>Adicionar ao Carrinho</span>
        </button>
        <button className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded">
          <AiOutlineHeart />
          <span>Adicionar aos Favoritos</span>
        </button>
      </div>
    </div>
  );
};

export default GeneralInfo;
