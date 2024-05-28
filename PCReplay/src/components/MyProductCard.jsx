import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { useUser } from "../mocks/UserContext";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { user, addToCart, addToWishlist } = useUser();
  const navigate = useNavigate();
  const handleCardClick = () => {
    console.log("Card clicked:", product.id);
     navigate(`/product/${product.id}`);
   };

  if (!product) return null; 
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full"
        src={product.imageUrl}
        alt={product.name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          €{product.price}
        </span>
        <div>
          <button
            className="px-3 py-0 text-blue-500 hover:text-blue-700"
            onClick={handleCardClick}
          >
            <FaRegEye size="1.5em" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
