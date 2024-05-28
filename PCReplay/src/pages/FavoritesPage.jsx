import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useUser } from "../mocks/UserContext";
import MainLayout from "./LayoutPage";
import { useNavigate } from "react-router-dom";
import { fetchProductsByDescription } from "../mocks/api";
import ProductFavoritesCard from "../components/ProductFavoritesCard";

const FavoritesPage = () => {
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
    if (!user) return;
    console.log("FILTERS:", filters);
    if (filters.id.length === 0) {
      setProducts([]);
      return;
    }
    fetchProductsByDescription(filters)
      .then((data) => {
        setProducts(data); // Atualiza o Products(local) com os produtos obtidos
        console.log("Products:", data);
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
  }, [filters, user]);

  const totalItems = products.length;
  const totalPrice = products.reduce(
    (sum, product) => sum + parseFloat(product.price),
    0
  );

  const handleAddToCart = (productId) => {
    console.log("Add to cart:", productId);
    addToCart(productId);
  };

  const handleRemoveFromFavorites = (productId) => {
    console.log("Remove from Favorites:", productId);
    removeFromWishlist(productId);
  };

  if (!user) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-full">
          <AiOutlineUser size="2em" />
          <p className="text-lg font-semibold mb-4">Você não está logado</p>
          <p>Por favor, faça login para ver o seu carrinho.</p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="flex flex-grow">
        <div className="w-2/3">
          <div className="container mx-auto px-4 sm:px-8 pt-16">
            <div className="py-8">
              <div className="flex flex-col">
                {products.map((product) => (
                  <ProductFavoritesCard
                    key={product.id}
                    product={product}
                    onRemove={handleRemoveFromFavorites}
                    onAdd={handleAddToCart}
                  />
                ))}
                {error && <p>Error: {error}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 sticky top-0">
          <div className="bg-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4">Resumo dos Favoritos</h2>
            <p className="mb-2">Número de produtos: {totalItems}</p>
            <p className="mb-2">Preço total: €{totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FavoritesPage;
