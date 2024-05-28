import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { CiCalculator1 } from "react-icons/ci";
import IFavoritesSidebar from "./Cart_Favorites/IFavoritesSidebar";
import ICartSidebar from "./Cart_Favorites/ICartSidebar";
import IProfileSidebar from "./Profile/IProfileSidebar";
import { useNavigate } from "react-router-dom";

const HUserIcons = ({ cartTotalItems, favoritesTotalItems, isLoggedIn }) => {
  const [showFavorites, setShowFavorites] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-6">
      <CiCalculator1
        size="1.5em"
        className="cursor-pointer"
        onClick={() => navigate("/calculadora")}
        title="Ir para a calculadora"
      />

      <div className="indicator">
        <span className="indicator-item badge badge-primary">
          {favoritesTotalItems}
        </span>
        <AiOutlineHeart
          size="1.5em"
          className="cursor-pointer"
          onClick={() => {
            if (isLoggedIn) {
              setShowFavorites(true);
            } else {
              window.alert("Você precisa estar logado para ver seus favoritos");
            }
          }}
          title="Mostrar favoritos"
        />
      </div>
      <IFavoritesSidebar
        isOpen={showFavorites}
        closeSidebar={() => setShowFavorites(false)}
      />

      <div className="indicator">
        <span className="indicator-item badge badge-primary">
          {cartTotalItems}
        </span>
        <AiOutlineShoppingCart
          size="1.5em"
          className="cursor-pointer"
          onClick={() => {
            if (isLoggedIn) {
              setShowCart(true);
            } else {
              window.alert("Você precisa estar logado para ver seu carrinho");
            }
          }}
          title="Mostrar carrinho"
        />
      </div>
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
