import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md"; // <MdOutlineShoppingCartCheckout />
import { useUser } from "../mocks/UserContext";
import MainLayout from "./LayoutPage";
import { useNavigate } from "react-router-dom";
import { fetchProductsByDescription } from "../mocks/api";
import ProductCartCard from "../components/ProductCartCard";

const CartPage = () => {
  const [filters, setFilters] = useState({ id: [] });
  const [products, setProducts] = useState([]);
  const { user, removeFromCart } = useUser();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.cart) {
      setFilters({ id: user.cart });
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
        <div className="w-2/3">
          <div className="container mx-auto px-4 sm:px-8 pt-16">
            <div className="py-8">
              <div className="flex flex-col">
                {products.map((product) => (
                  <ProductCartCard
                    key={product.id}
                    product={product}
                    onRemove={handleRemoveFromCart}
                  />
                ))}
                {error && <p>Error: {error}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 sticky top-0">
          <div className="bg-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4">Resumo do Carrinho</h2>
            <p className="mb-2">Número de produtos: {totalItems}</p>
            <p className="mb-2">Preço total: €{totalPrice.toFixed(2)}</p>
            <button
              onClick={() => navigate("/checkout")}
              className="p-2 mt-2 bg-red-500 text-white p-2 rounded"
            >
              <div className="flex items-center">
                <MdOutlineShoppingCartCheckout />
                <span className="ml-2">Checkout</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CartPage;
