import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []); 

  const updateUser = (newUser) => {
    setUser(newUser);
    if (user) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  const addToWishlist = (productId) => {
    setUser((prevUser) => {
      const updatedWishlist = [...prevUser.wishlist, productId];
      const updatedUser = { ...prevUser, wishlist: updatedWishlist };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  const addToCart = (productId) => {
    setUser((prevUser) => {
      const updatedCart = [...prevUser.cart, productId];
      const updatedUser = { ...prevUser, cart: updatedCart };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  }

  const removeFromWishlist = (productId) => {
    setUser((prevUser) => {
      const updatedWishlist = prevUser.wishlist.filter(
        (id) => id !== productId
      );
      const updatedUser = { ...prevUser, wishlist: updatedWishlist };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  };
 const removeFromCart = (productId) => {
    setUser((prevUser) => {
      const updatedCart = prevUser.cart.filter(
        (id) => id !== productId
      );
      const updatedUser = { ...prevUser, cart: updatedCart };
      localStorage.setItem("user", JSON.stringify(updatedUser));
      return updatedUser;
    });
  }


  return (
    <UserContext.Provider
      value={{
        user,
        updateUser,
        addToWishlist,
        addToCart,
        removeFromWishlist,
        removeFromCart,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
