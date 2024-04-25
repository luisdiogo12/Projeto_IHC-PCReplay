import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  // Sincronizar com localStorage sempre que os produtos forem atualizados
   useEffect(() => {
    if (products){
      localStorage.setItem("products", JSON.stringify(products));
    }else{
      localStorage.removeItem("user");
    }
  }, [products]);


  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
