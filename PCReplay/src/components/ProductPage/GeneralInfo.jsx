import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai"; 
import { useUser } from "../../mocks/UserContext";

const GeneralInfo = ({ product }) => {
  const { user, addToCart, addToWishlist } = useUser();
  const handleAddToCart = () => {
    console.log("Add to cart:", product.id);
    addToCart(product.id);
  };
  const handleAddToFavorites = () => {
    console.log("Add to cart:", product.id);
    addToWishlist(product.id);
  };
  console.log("GeneralInfo:", product);
  return (
    <div className="bg-gray-800 p-4">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p className="text-lg font-semibold">Preço: {product.price}</p>
      <p className="text-md">Vendedor: {product.seller}</p>
      <div className="flex space-x-4 mt-4">
        <button
          className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddToFavorites}
        >
          <AiOutlineShoppingCart />
          <span>Adicionar ao Carrinho</span>
        </button>
        <button
          className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleAddToCart}
        >
          <AiOutlineHeart />
          <span>Adicionar aos Favoritos</span>
        </button>
      </div>
    </div>
  );
};

export default GeneralInfo;
