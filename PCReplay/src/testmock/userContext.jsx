import React, { createContext, useContext, useState } from "react";

const UserContext = createContext(null); // Inicializa com null para um estado inicial claro

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Inicializa o estado do usuário como null

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
