import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Hmenu from "./HMenu"; 
import HSearchBar from "./HSearchBar"; 
import HUserIcons from "./HUserIcons"; 
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/");
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
        <HUserIcons />
      </div>
    </header>
  );
};

export default Header;
