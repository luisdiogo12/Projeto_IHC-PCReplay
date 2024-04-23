import React from "react";

const Hmenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav
      className={`fixed top-12 bottom-0 left-0 bg-gray-800 w-64 transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-20`}
    >
      <ul className="flex flex-col space-y-4 p-4 mt-10">
        <li>
          <a
            href="/produtos/computadores"
            className="text-white text-lg font-bold"
          >
            Computadores
          </a>
          <ul className=" pl-4 text-gray-300">
            <li className="py-2 font-bold">
              <a href="/produtos/desktops">Desktops</a>
            </li>
            <li className="py-2 font-bold">
              <a href="/produtos/laptops">Laptops</a>
            </li>
            <ul className=" pl-4 text-gray-300">
              <li className="">
                <a href="/produtos/portateis">Portáteis</a>
              </li>
              <li className="">
                <a href="/produtos/macbooks">MacBooks</a>
              </li>
            </ul>
          </ul>
        </li>
        <li>
          <a
            href="/produtos/ferramentas"
            className="text-white text-lg font-bold"
          >
            Ferramentas
          </a>
          <ul className="pl-4 text-gray-300">
            <li className="py-2 font-bold">
              <a href="/calculadora">Calculadora</a>
            </li>
            <li className="py-2 font-bold">
              <a href="/guiao">Guião</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Hmenu;