import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import FavoritesSidebar from "./IfavoritesSidebar";
import CartSidebar from "./IcartSidebar";
import ProfileSidebar from "./IprofileSideBar";

const HuserIcons = () => {
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
      <FavoritesSidebar
        isOpen={showFavorites}
        closeSidebar={() => setShowFavorites(false)}
      />

      <AiOutlineShoppingCart
        size="1.5em"
        className="cursor-pointer"
        onClick={() => setShowCart(true)}
      />
      <CartSidebar isOpen={showCart} closeSidebar={() => setShowCart(false)} />

      <AiOutlineUser
        size="1.5em"
        className="cursor-pointer"
        onClick={() => setShowProfile(true)}
      />
      <ProfileSidebar
        isOpen={showProfile}
        closeSidebar={() => setShowProfile(false)}
      />
    </div>
  );
};

export default HuserIcons;
