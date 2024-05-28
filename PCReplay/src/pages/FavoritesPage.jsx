import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useUser } from "../mocks/UserContext";
import MainLayout from "./LayoutPage";
import { useNavigate } from "react-router-dom";
import { fetchProductsByDescription } from "../mocks/api";
import ProductCartCard from "../components/ProductCartCard";

const FavoritesPage = () => {
  const [filters, setFilters] = useState({ id: [] });
  const [products, setProducts] = useState([]);
  const { user, removeFromCart } = useUser();
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

  const handleRemoveFromCart = (productId) => {
    console.log("Remove from Favorites:", productId);
    removeFromCart(productId);
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
        <div className="flex-grow">
          <div className="container mx-auto px-4 sm:px-8 pt-16">
            <div className="py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCartCard key={product.id} product={product} />
                ))}
                {error && <p>Error: {error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FavoritesPage;
