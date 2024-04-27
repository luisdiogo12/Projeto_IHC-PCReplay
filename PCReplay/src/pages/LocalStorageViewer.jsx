import React, { useState, useEffect } from "react";
import { useUser } from "../mocks/UserContext";
import { useProducts } from "../mocks/ProductContext";
import { fetchProductsByDescription } from "../mocks/api";

const LocalStorageViewer = () => {
  const { user } = useUser();
  const { products } = useProducts();
  const [localStorageData, setLocalStorageData] = useState({});
  const filters = {
    category: "portátil",
  };

  useEffect(() => {
    //!: Carrega todos os dados do localStorage
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    setLocalStorageData(data);
  }, []);
  useEffect(() => {
    fetchProductsByDescription(filters)
      .then((data) => {
        updateProducts(data); // Atualiza o contexto com os produtos obtidos
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
  }, []); // Dependência no array de useEffect, removida para evitar loop infinito

  return (
    <div>
      <h1>Local Storage and User Context Viewer</h1>
      <h2>User Context Data:</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h2>Products Context Data:</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <h2>Local Storage Data:</h2>
      <pre>{JSON.stringify(localStorageData, null, 2)}</pre>
    </div>
  );
};

export default LocalStorageViewer;
