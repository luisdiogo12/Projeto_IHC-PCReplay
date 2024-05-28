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
        updateProducts(data); 
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); 
      });
  }, [filters]); 

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
