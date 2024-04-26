import React, { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]); //!: Inicializa o estado com um array vazio para nao dar erros no map

  useEffect(() => {
    // Carregar os produtos do localStorage na inicialização
    const savedProducts = localStorage.getItem("products");
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
      console.log("Products loaded from localStorage");
    }
  }, []);
  // Sincronizar com localStorage sempre que os produtos forem atualizados
  /* useEffect(() => {
    console.log("Updating localStorage with:", products);
    if (products.length > 0) {
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      // Se o array de produtos estiver vazio, remove o item do localStorage
      localStorage.removeItem("products");
    }
  }, [products]); // Garante que este efeito só dispare quando products realmente mudar
 */
  // Método para atualizar produtos e sincronizar com localStorage, apenas quando chamado
  const updateProducts = (newProducts) => {
    setProducts(newProducts); // Atualiza o estado
    console.log("Updating localStorage with:", newProducts);
    if (newProducts.length > 0) {
      localStorage.setItem("products", JSON.stringify(newProducts)); // Sincroniza com localStorage
      console.log("Products saved to localStorage");
    } else {
      localStorage.removeItem("products"); // Limpa se o array estiver vazio
    }
  };
  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
