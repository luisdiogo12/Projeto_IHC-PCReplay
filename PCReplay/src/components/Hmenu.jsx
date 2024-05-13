import React from "react";
import { useFilters } from "../mocks/FilterContext";
import { useNavigate } from "react-router-dom"; // Importe useNavigate para navegação programática

const HMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const { updateFilter } = useFilters(); // Importando updateFilters do seu FilterContext

  const handleCategoryClick = (categories, path) => {
    // Atualiza diretamente as categorias no filtro 
       updateFilter({
         id: [],
         name: [],
         price: [],
         category: categories,
         characteristics: { cpu: [], ram: [], memoria: [], bateria: [] },
       });

    console.log("FILTERS Updated with Categories:", categories);
    // Redireciona para a rota especificada
    navigate(path);
  };

  return (
    <nav
      className={`fixed top-12 bottom-0 left-0 bg-gray-800 w-64 transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-20`}
    >
      <ul className="flex flex-col space-y-4 p-4 mt-10">
        <li>
          <button
            className="text-white text-lg font-bold"
            onClick={() => handleCategoryClick([], "/productsPage")}
          >
            Computadores
          </button>
          <ul className="pl-4 text-gray-300">
            <li className="py-2 font-bold">
              <button
                onClick={() =>
                  handleCategoryClick(["desktop"], "/productsPage")
                }
              >
                Desktops
              </button>
            </li>
            <li className="py-2 font-bold">
              <button
                onClick={() =>
                  handleCategoryClick(["portátil", "macbook"], "/productsPage")
                }
              >
                Laptops
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  handleCategoryClick(["portátil"], "/productsPage")
                }
              >
                Portáteis
              </button>
            </li>
            <li>
              <button
                onClick={() =>
                  handleCategoryClick(["macbook"], "/productsPage")
                }
              >
                MacBooks
              </button>
            </li>
          </ul>
        </li>
        <li>
          <button
            className="text-white text-lg font-bold"
            onClick={() => navigate("/produtos/ferramentas")}
          >
            Ferramentas
          </button>
          <ul className="pl-4 text-gray-300">
            <li className="py-2 font-bold">
              <button onClick={() => navigate("/calculadora")}>
                Calculadora
              </button>
            </li>
            <li className="py-2 font-bold">
              <button onClick={() => navigate("/guide")}>Guia</button>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default HMenu;
