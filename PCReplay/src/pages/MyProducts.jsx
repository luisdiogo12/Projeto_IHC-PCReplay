import React, { useState, useEffect } from "react";
import { useUser } from "../mocks/UserContext";
import MainLayout from "./LayoutPage";
import { fetchProductsByDescription } from "../mocks/api";
import MyProductCard from "../components/MyProductCard";
import { AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const MyProducts = () => {
 const [filters, setFilters] = useState({ id: [] });
 const [products, setProducts] = useState([]);
 const { user  } = useUser();
 const [error, setError] = useState(null);
 const navigate = useNavigate();

 useEffect(() => {
   if (user && user.myproducts) {
     setFilters({ id: user.myproducts });
   }
 }, [user]);

 useEffect(() => {
  if (user){
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
  }
 }, [filters, user]);

 const goToCalculator = () => {
    navigate("/calculadora");
  };

  if (!user) {
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-full">
          <AiOutlineUser size="2em" />
          <p className="text-lg font-semibold mb-4">Você não está logado</p>
          <p>Por favor, faça login para ver os seus computadores à venda.</p>
        </div>
      </MainLayout>
    );
  }

  if(!products || products.length === 0){
    return (
      <MainLayout>
        <div className="flex flex-col items-center justify-center h-full">
          <AiOutlineUser size="2em" />
          <p className="text-lg font-semibold mb-4">
            Você não tem computadores à venda.
          </p>
          <p className="cursor-pointer" onClick={goToCalculator}>
            Se quiser usar os nossos serviços para vender o seu computador
            clique aqui.
          </p>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      {products.map((products) => (
        <MyProductCard key={products.id} product={products} />
      ))}
      {error && <p>Error: {error}</p>}
    </MainLayout>
  );
};

export default MyProducts;
