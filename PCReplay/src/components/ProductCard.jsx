import React from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { MdOutlineSell } from "react-icons/md";
import { useUser } from "../mocks/UserContext";
import { useNavigate, Link } from "react-router-dom";


const ProductCard = ({ product }) => {
  const { user, addToCart, addToWishlist } = useUser();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    console.log("Add to cart:", product.id);
    addToCart(product.id);
  };
  const handleAddToFavorites = () => {
    console.log("Add to cart:", product.id);
    addToWishlist(product.id);
  };
  const handleSellLikeProduct = () => {
     navigate("/calculadora");
  };
  if (!product) return null; // Garante que não tentaremos renderizar sem produto
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <Link to={`/product/${product.id}`} className="no-underline block">
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
      </Link>
      <div className="px-6 py-4 flex justify-between items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          ${product.price}
        </span>
        <div>
          <button
            className="px-1 py-0 text-yellow-500 hover:text-yellow-700"
            onClick={handleSellLikeProduct}
            title="Vender produto semelhante"
          >
            <MdOutlineSell size="1.5em" />
          </button>
          <button
            className="px-1 py-0 text-red-500 hover:text-red-700"
            onClick={handleAddToFavorites}
            title="Adicionar aos favoritos"
          >
            <AiOutlineHeart size="1.5em" />
          </button>
          <button
            className="px-3 py-0 text-blue-500 hover:text-blue-700"
            onClick={handleAddToCart}
            title="Adicionar ao carrinho"
          >
            <AiOutlineShoppingCart size="1.5em" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
