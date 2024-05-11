import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import IFavoritesSidebar from "./Cart_Favorites/IFavoritesSidebar";
import ICartSidebar from "./Cart_Favorites/ICartSidebar";
import IProfileSidebar from "./Profile/IProfileSidebar";

const HUserIcons = () => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="flex items-center space-x-6">
      <AiOutlineHeart
        size="1.5em"
        className="cursor-pointer"
        onClick={() => setShowFavorites(true)}
      />
      <IFavoritesSidebar
        isOpen={showFavorites}
        closeSidebar={() => setShowFavorites(false)}
      />

      <AiOutlineShoppingCart
        size="1.5em"
        className="cursor-pointer"
        onClick={() => setShowCart(true)}
      />
      <ICartSidebar isOpen={showCart} closeSidebar={() => setShowCart(false)} />

      <AiOutlineUser
        size="1.5em"
        className="cursor-pointer"
        onClick={() => setShowProfile(true)}
      />
      <IProfileSidebar
        isOpen={showProfile}
        closeSidebar={() => setShowProfile(false)}
      />
    </div>
  );
};

export default HUserIcons;
