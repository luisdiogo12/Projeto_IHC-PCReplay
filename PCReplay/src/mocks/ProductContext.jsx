import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      console.log("Products loaded from localStorage");
    }
  }, []); //!:vazia-feito será executado apenas uma vez: após a primeira renderização do componente

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    console.log("Updating localStorage with:", newProducts);
    if (newProducts.length > 0) {
      localStorage.setItem("products", JSON.stringify(newProducts));
      console.log("Products saved to localStorage");
    } else {
      localStorage.removeItem("products");
    }
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
