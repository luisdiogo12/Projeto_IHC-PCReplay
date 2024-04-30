import React, { useState, useEffect } from "react";
import LayoutProductPage from "./LayoutProductPage";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../mocks/ProductContext";
import { useFilters } from "../mocks/FilterContext"; 
import { fetchProductsByDescription } from "../mocks/api";

const ProductsPage = () => {
  console.log("ProductPages component mounted");
  const { filters } = useFilters();
  const { products, updateProducts } = useProducts();
  const [error, setError] = useState("");
  useEffect(() => {
    console.log("FILTERS:", filters);
    fetchProductsByDescription(filters)
      .then((data) => {
        updateProducts(data); // Atualiza o contexto com os produtos obtidos
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
  }, [filters]); // Dependência no array de useEffect, removida para evitar loop infinito

  return (
    <LayoutProductPage>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {error && <p>Error: {error}</p>}
    </LayoutProductPage>
  );
};

export default ProductsPage;
