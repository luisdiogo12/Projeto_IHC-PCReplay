//!: Serve para mostrar os dados de uma API em uma página sem usar o mock de produtos
//!: apenas usa os contextos para a visualizacao na LocalStorageViewer
import React, { useState, useEffect } from "react";
import { fetchProductsByDescription } from "../mocks/api";
import { useFilters } from "../mocks/FilterContext";
import { useProducts } from "../mocks/ProductContext";



const ApiViewer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { products, updateProducts } = useProducts();
  const { filters,setFilters,updateFilters, addToFilter } = useFilters();
  const Constfilters = {
    id: [2],
    name: [],
    price: [],
    category: [],
    characteristics: {
      cpu: [],
      ram: [],
      memoria: [],
      bateria: [],
    },
  };

 useEffect(() => {
    updateFilters(Constfilters);
    fetchProductsByDescription(Constfilters)
      .then((data) => {
        setData(data); // Atualiza o estado com os produtos obtidos
        updateProducts(data);
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
              <h3 className="font-bold mb-1">
              {item.name}:
			  </h3>
			  <p>price: {item.price}</p>
			  <p>category: {item.category}</p>
              <ul>
                {Object.keys(item.characteristics).map((key) => (
                  <li key={key}>
                    {key}: {item.characteristics[key]}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ApiViewer;
