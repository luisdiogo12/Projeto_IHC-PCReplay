import React, { useState, useEffect } from "react";
import { useUser } from "../mocks/UserContext";
import { useProducts } from "../mocks/ProductContext";
import { useFilters } from "../mocks/FilterContext"; 


const LocalStorageViewer = () => {
  const { user } = useUser();
  const { products, setProducst } = useProducts();
  const { filters, setFilters } = useFilters();
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(() => {
    //!: Carrega todos os dados do localStorage a cada x segundos
    const intervalId = setInterval(() => {
      // Código a ser executado a cada intervalo
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data[key] = localStorage.getItem(key);
      }
      setLocalStorageData(data);
      console.log("localStorageData updated ");
    }, 1000); // O código será executado a cada x milissegundos 

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []); // A lista de dependências vazia garante que o intervalo seja configurado apenas uma vez


  return (
    <div>
      <h1>Local Storage and User Context Viewer</h1>
      <h2>User Context Data:</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h2>Filters Context Data:</h2>
      <pre>{JSON.stringify(filters, null, 2)}</pre>
      <h2>Products Context Data:</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>
      <h2>Local Storage Data:</h2>
      <pre>{JSON.stringify(localStorageData, null, 2)}</pre>
    </div>
  );
};

export default LocalStorageViewer;
