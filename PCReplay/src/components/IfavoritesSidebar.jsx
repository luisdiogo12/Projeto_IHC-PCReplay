import React from "react";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";

const FavoritesSidebar = ({ isOpen, closeSidebar }) => {
  return isOpen ? (
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50">
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-white"
      >
        <AiOutlineClose size="1.5em" />
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <AiOutlineHeart size="2em" />
        <p>Favoritos</p>
      </div>
    </div>
  ) : null;
};

export default FavoritesSidebar;
