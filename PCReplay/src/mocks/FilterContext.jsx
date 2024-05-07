import React, { createContext, useContext, useState, useEffect } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    id: [],
    name: [],
    price: [],
    category: [],
    characteristics: { cpu: [], ram: [], memoria: [], bateria: [] },
  });

  // Carregar filtros do localStorage
  useEffect(() => {
    const savedFilters = localStorage.getItem("filters");
    if (savedFilters) {
      setFilters(JSON.parse(savedFilters));
      console.log("Filters loaded from localStorage");
    }
  }, []); 

  const updateFilter = (newFilters) => {
    setFilters(newFilters);
    localStorage.setItem("filters", JSON.stringify(filters));
  };

  const clearFilter = () => {
    setFilters(() => ({
      id: [],
      name: [],
      price: [],
      category: [],
      characteristics: { cpu: [], ram: [], memoria: [], bateria: [] },
    }));
    localStorage.setItem("filters", JSON.stringify(filters));
  };

  return (
    <FilterContext.Provider
      value={{ filters, setFilters, updateFilter, clearFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}
