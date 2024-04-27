//!: Serve para mostrar os dados de uma API em uma página sem usar o mock de produtos
import React, { useState, useEffect } from "react";
import { fetchProductsByDescription } from "../mocks/api";

const ApiViewer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const filters = {
    characteristics: { cpu: "Intel i7" },
    category: "portátil",
  };

 useEffect(() => {
    fetchProductsByDescription(filters)
      .then((data) => {
        setData(data); // Atualiza o estado com os produtos obtidos
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
  }, []); // Dependência no array de useEffect, removida para evitar loop infinito

  return (
    <div>
      <h1>API Viewer</h1>
      {loading && <p>Loading data...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              {item.name} - {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiViewer;
