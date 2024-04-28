import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filters, setFilters] = useState({
    id: [],
    name: [],
    price: [],
    category: [],
    characteristics: { cpu: [], ram: [], memoria: [], bateria: [] },
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}
