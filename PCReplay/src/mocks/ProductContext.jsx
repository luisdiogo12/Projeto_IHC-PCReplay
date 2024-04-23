import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then(setProducts);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
