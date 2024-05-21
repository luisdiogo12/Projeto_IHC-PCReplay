import React, { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useUser } from "../../mocks/UserContext";
import CProductCard from "./CProductCard";
import { fetchProductsByDescription } from "../../mocks/api";

const IFavoritesSidebar = ({ isOpen, closeSidebar }) => {
  const [filters, setFilters] = useState({ id: [] });
  const [products, setProducts] = useState([]);
  const { user, removeFromCart } = useUser();
  const [error, setError] = useState(null);

  //+: Sempre que o user muda o filtro(local) é atualizado
  useEffect(() => {
    if (user && user.cart) {
      setFilters({ id: user.cart });
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

  const handleRemoveFromCart = (productId) => {
    console.log("Remove from Favorites:", productId);
    removeFromCart(productId);
  };

  if (!user || !isOpen) return null;
  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50 overflow-y-auto">
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-white"
      >
        <AiOutlineClose size="1.5em" />
      </button>
      <div className="flex flex-col items-center p-4">
        <AiOutlineShoppingCart size="2em" />
        <p className="text-lg font-semibold mb-4">Carrinho</p>
        {products.length === 0 ? (
          <p className="text-gray-500">Sem produtos no carrinho</p>
        ) : (
          products.map((product) => (
            <CProductCard
              key={product.id}
              product={product}
              onRemove={handleRemoveFromCart}
            />
          ))
        )}
        <Link to="/pages/CartPage" className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ver Carrinho
          </button>
        </Link>
      </div>
    </div>
  );
};

export default IFavoritesSidebar;
