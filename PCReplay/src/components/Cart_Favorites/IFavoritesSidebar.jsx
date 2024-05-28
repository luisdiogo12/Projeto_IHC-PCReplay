import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useUser } from "../../mocks/UserContext";
import CFProductCard from "./FProductCard";
import { fetchProductsByDescription } from "../../mocks/api";
import { useNavigate } from "react-router-dom";

const IFavoritesSidebar = ({ isOpen, closeSidebar }) => {
  const [filters, setFilters] = useState({ id: [] });
  const [products, setProducts] = useState([]);
  const { user, addToCart, removeFromWishlist } = useUser();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (user && user.wishlist) {
      setFilters({ id: user.wishlist });
    }
  }, [user]);
  useEffect(() => {
    if (!user || !isOpen) return;
    console.log("FILTERS:", filters);
    if (filters.id.length === 0) {
      setProducts([]);
      return;
    }
    fetchProductsByDescription(filters)
      .then((data) => {
        setProducts(data); 
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); 
      });
  }, [filters, user, isOpen]);

  const handleAddToCart = (productId) => {
    console.log("Add to cart:", productId);
    addToCart(productId);
  };

  const handleRemoveFromFavorites = (productId) => {
    console.log("Remove from Favorites:", productId);
    removeFromWishlist(productId);
  };

  if (!user || !isOpen) return null;
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50 flex flex-col justify-between">
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-white"
      >
        <AiOutlineClose size="1.5em" />
      </button>
      <div className="flex flex-col items-center p-4 overflow-y-auto">
        <p className="text-lg font-semibold mb-4">Favoritos</p>
        {products.length === 0 ? (
          <p className="text-gray-500">Sem favoritos</p>
        ) : (
          products.map((product) => (
            <CFProductCard
              key={product.id}
              product={product}
              onRemove={handleRemoveFromFavorites}
              onCart={handleAddToCart}
            />
          ))
        )}
      </div>
      <div className="p-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/favorites")}
        >
          Ver Favoritos
        </button>
      </div>
    </div>
  );
};

export default IFavoritesSidebar;
