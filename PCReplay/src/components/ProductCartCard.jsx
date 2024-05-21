import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
// <RiDeleteBin6Line />
import { MdOutlineSell } from "react-icons/md";
import { useUser } from "../mocks/UserContext";
import { useNavigate, Link } from "react-router-dom";

const ProductCartCard = ({ product, onRemove }) => {
  const { user, addToCart, addToWishlist } = useUser();
  const navigate = useNavigate();

  
  if (!product) return null; // Garante que não tentaremos renderizar sem produto
  return (
    <div className="flex m-4 shadow-lg rounded overflow-hidden ">
      <Link to={`/product/${product.id}`} className="no-underline block">
        <img
          className="w-1/3"
          src={product.imageUrl}
          alt={product.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
      </Link>
      <div className="px-6 py-4 w-2/3">
        <Link to={`/product/${product.id}`} className="no-underline block">
          <div className="font-bold text-xl mb-2">{product.name}</div>
          <p className="text-gray-700 text-base">{product.description}</p>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            ${product.price}
          </span>
          <div>
            <button
              className="px-1 py-0 text-red-500 hover:text-red-700"
              onClick={() => onRemove(product.id)}
            >
              <RiDeleteBin6Line size="1.5em" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartCard;
