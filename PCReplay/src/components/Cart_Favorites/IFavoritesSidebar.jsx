import React, { useState, useEffect } from "react";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { useUser } from "../../mocks/UserContext";
import CFProductCard from "./FProductCard";
import { fetchProductsByDescription } from "../../mocks/api";

const IFavoritesSidebar = ({ isOpen, closeSidebar }) => {
  const [filters, setFilters] = useState({ id: [] });
  const [products, setProducts] = useState([]);
  const { user, addToCart, removeFromWishlist } = useUser();
  const [error, setError] = useState(null);

  //+: Sempre que o user muda o filtro(local) é atualizado
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
        setProducts(data); // Atualiza o Products(local) com os produtos obtidos
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
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
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50  overflow-y-auto">
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-white"
      >
        <AiOutlineClose size="1.5em" />
      </button>
      <div className="flex flex-col items-center p-4">
        <AiOutlineHeart size="2em" />
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
    </div>
  );
};

export default IFavoritesSidebar;
