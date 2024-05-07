import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useProducts } from "../mocks/ProductContext";
//
import { fetchProductsByDescription } from "../mocks/api";

const MainPage = () => {
  console.log("MainPage component mounted");
  const { products, updateProducts } = useProducts();
  const [error, setError] = useState("");
  useEffect(() => {
    //fetchProducts()
    fetchProductsByDescription()
      .then((data) => {
        updateProducts(data); // Atualiza o contexto com os produtos obtidos
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
  }, []); // Dependência no array de useEffect, removida para evitar loop infinito
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="flex-grow">
          <div className="container mx-auto px-4 sm:px-8 pt-16">
            <div className="py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
                {error && <p>Error: {error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;