import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    // Tentar carregar produtos do localStorage inicialmente
    const savedProducts = localStorage.getItem("products");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  useEffect(() => {
    if (products.length === 0) {
      // Se não houver produtos, carrega da API
      fetch("/api/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          localStorage.setItem("products", JSON.stringify(data)); // Salvar no localStorage
        })
        .catch((err) => console.error("Failed to load products", err));
    }
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
