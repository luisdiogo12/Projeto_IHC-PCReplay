import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Hmenu from "./Hmenu"; // Importe o componente Hmenu
import HsearchBar from "./HsearchBar"; // Importe o componente SearchBar
import HuserIcons from "./HuserIcons"; // Importe o componente UserIcons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <h1 className="font-bold mr-4">PCReplay</h1>
        </div>
        <Hmenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <HsearchBar /> {/* Utilização do componente SearchBar */}
        <HuserIcons /> {/* Utilização do componente UserIcons */}
      </div>
    </header>
  );
};

export default Header;
