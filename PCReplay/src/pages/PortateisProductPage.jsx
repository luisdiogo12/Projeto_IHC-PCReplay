import React, { useState, useEffect } from "react";
import LayoutProductPage from "./LayoutProductPage";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../mocks/ProductContext";
import { fetchProducts } from "../mocks/api";

const PortateisProductPage = () => {
  console.log("PortateisProductPage component mounted");
  const { products, updateProducts } = useProducts();
  const [error, setError] = useState("");
  useEffect(() => {
    fetchProducts()
      .then((data) => {
        updateProducts(data); // Atualiza o contexto com os produtos obtidos
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
  }, []); // Dependência no array de useEffect, removida para evitar loop infinito

  return (
    <LayoutProductPage>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {error && <p>Error: {error}</p>}
    </LayoutProductPage>
  );
};

export default PortateisProductPage;
