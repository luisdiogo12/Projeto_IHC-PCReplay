import React from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";

const ICartSidebar = ({ isOpen, closeSidebar }) => {
  return isOpen ? (
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50">
      <button
        onClick={closeSidebar}
        className="absolute top-4 right-4 text-white"
      >
        <AiOutlineClose size="1.5em" />
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <AiOutlineShoppingCart size="2em" />
        <p>Carrinho</p>
      </div>
    </div>
  ) : null;
};

export default ICartSidebar;
