import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const HSearchBar = () => {
  return (
    <div className="flex bg-white rounded overflow-hidden">
      <input
        type="search"
        placeholder="Search products...."
        className="px-4 py-2 w-80"
      />
      <button className="bg-blue-600 px-4 text-white">
        <AiOutlineSearch size="1.5em" />
      </button>
    </div>
  );
};

export default HSearchBar;
