import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Hmenu from "./Hmenu"; 
import HSearchBar from "./HsearchBar"; 
import HUserIcons from "./HUserIcons"; 
import { useNavigate } from "react-router-dom";
import { fetchProductsByDescription } from "../mocks/api";
import { useUser } from "../mocks/UserContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const [filtersCart, setFiltersCart] = useState({ id: [] });
  const [filtersFavorites, setFiltersFavorites] = useState({ id: [] });
  const [productsCart, setProductsCart] = useState([]);
  const [productsFavorites, setProductsFavorites] = useState([]);
  const { user, removeFromCart } = useUser();

  const isLoggedIn = !!user;
  useEffect(() => {
    if (user && user.cart) {
      setFiltersCart({ id: user.cart });
      setFiltersFavorites({ id: user.wishlist });
    }
  }, [user]);
  useEffect(() => {
    if (!user) return;
    console.log("FILTERS:", filtersCart, filtersFavorites);

    if (filtersCart.id.length === 0) {
      setProductsCart([]);
      return;
    }
    if (filtersFavorites.id.length === 0) {
      setProductsFavorites([]);
      return;
    }

    fetchProductsByDescription(filtersCart)
      .then((data) => {
        setProductsCart(data); // Atualiza o Products(local) com os produtos obtidos
        console.log("Products:", data);
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
    fetchProductsByDescription(filtersFavorites)
      .then((data) => {
        setProductsFavorites(data); // Atualiza o Products(local) com os produtos obtidos
        console.log("Products:", data);
      })
      .catch((error) => {
        console.error("Failed to load products:", error);
        setError(error.message); // Armazena o erro no estado, se houver
      });
  }, [filtersFavorites,filtersCart, user]);

  const cartTotalItems = productsCart.length;
  const favoritesTotalItems = productsFavorites.length;


  const goToHomePage = () => {
    navigate("/");
  };
  const goToMyProducts = () => {
    navigate("/myproducts");
  };

  return (
    <header className="left-0 top-0 bg-gray-800 text-white p-4 fixed w-full z-30">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-xl mr-4"
          >
            <AiOutlineMenu size="1.5em" />
          </button>
          <h1 className="font-bold mr-4 cursor-pointer" onClick={goToHomePage}>
            PCReplay
          </h1>
        </div>
        <Hmenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HSearchBar />
        <h1 className="mr-1 ml-1 cursor-pointer" onClick={goToMyProducts}>
          Os meus Computadores
        </h1>
        <HUserIcons
          cartTotalItems={cartTotalItems}
          favoritesTotalItems={favoritesTotalItems}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </header>
  );
};

export default Header;