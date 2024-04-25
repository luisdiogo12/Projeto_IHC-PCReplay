import React, { useState, useEffect } from "react";
import { useUser } from "../testmockLocalStorage/userContext";
import { useProducts } from "../testmockLocalStorage/productContext";

const LocalStorageViewer = () => {
  const { user, updateUser } = useUser();
  const { products, updateProducts } = useProducts();
  const [localStorageData, setLocalStorageData] = useState({});

  useEffect(() => {
    //!: Carrega todos os dados do localStorage
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      data[key] = localStorage.getItem(key);
    }
    setLocalStorageData(data);
  }, []);

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
