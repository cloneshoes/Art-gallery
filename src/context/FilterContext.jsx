import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [medium, setMedium] = useState("all");
  const [maxPrice, setMaxPrice] = useState(10000);

  return (
    <FilterContext.Provider
      value={{ medium, setMedium, maxPrice, setMaxPrice }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilter = () => useContext(FilterContext);
