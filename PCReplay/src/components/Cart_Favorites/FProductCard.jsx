import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

const CFProductCard = ({ product, onRemove, onCart }) => {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-md m-2">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-32 object-cover rounded-lg mb-2"
      />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-900 font-bold">€{product.price}</p>
      <button
        onClick={() => onRemove(product.id)}
        title="Remover dos favoritos"
        className="p-2 mt-2 bg-red-500 text-white p-2 rounded"
      >
        <RiDeleteBin6Line size="1.5em" />
      </button>
      <button
        onClick={() => onCart(product.id)}
        title="Adicionar ao carrinho"
        className="p-2 mt-2 bg-blue-500 text-white p-2 rounded"
      >
        <AiOutlineShoppingCart size="1.5em" />
      </button>
    </div>
  );
};

export default CFProductCard;
