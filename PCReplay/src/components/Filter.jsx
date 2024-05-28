import React, { useEffect, useState } from "react";
import { useFilters } from "../mocks/FilterContext";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = () => {
	const { filters, updateFilter } = useFilters(); 
  const [priceRange, setPriceRange] = useState([0, 10000]);


  const handleCheckboxChange = (event) => {
    const { name,value, checked } = event.target;
	console.log("event.target",event.target);
    updateFilter((prevFilters) => {
      const newFilters = { ...prevFilters };
      if (checked) {
        
        if (newFilters.characteristics[name]) {
          newFilters.characteristics[name].push(value);
        } else {
          newFilters.characteristics[name] = [value];
        }
      } else {
        
        newFilters.characteristics[name] = newFilters.characteristics[
          name
        ].filter((filterValue) => filterValue !== value);
      }
      console.log(newFilters);
      return newFilters;
    });
  };
  useEffect(() => {
    console.log("Filters updated:", filters);

  }, []);
 const handlePriceChange = (range) => {
   setPriceRange(range);
   updateFilter((prevFilters) => ({
     ...prevFilters,
     price: range,
   }));
 };

  return (
    <div className="sidebar w-64 py-20 px-4">
      <h2 className="font-bold text-lg mb-4">Filtros</h2>
      <div className="filter-category mb-4">
        <h3 className="font-semibold mb-2">Preço</h3>
        <div className="flex flex-col mb-4">
          <Slider
            range
            min={0}
            max={10000}
            value={priceRange}
            onChange={handlePriceChange}
            className="mb-4 "
          />
          <div className="flex justify-between">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) =>
                handlePriceChange([Number(e.target.value), priceRange[1]])
              }
              className="w-20"
            />
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) =>
                handlePriceChange([priceRange[0], Number(e.target.value)])
              }
              className="w-20"
            />
          </div>
        </div>
      </div>

      <div className="filter-category mb-4">
        <h3 className="font-semibold mb-2">CPU</h3>
        <div className="flex flex-col">
          <label className="mb-1">
            <input
              type="checkbox"
              name="cpu"
              value="Intel i5"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            Intel i5
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="cpu"
              value="AMD Ryzen 5"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            AMD Ryzen 5
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="cpu"
              value="Intel i7"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            Intel i7
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="cpu"
              value="AMD Ryzen 7"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            AMD Ryzen 7
          </label>
        </div>
      </div>
      <div className="filter-category mb-4">
        <h3 className="font-semibold mb-2">RAM</h3>
        <div className="flex flex-col">
          <label className="mb-1">
            <input
              type="checkbox"
              name="ram"
              value="8GB"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            8GB
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="ram"
              value="16GB"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            16GB
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="ram"
              value="32GB"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            32GB
          </label>
        </div>
      </div>
      <div className="filter-category mb-4">
        <h3 className="font-semibold mb-2">Memória</h3>
        <div className="flex flex-col">
          <label className="mb-1">
            <input
              type="checkbox"
              name="memoria"
              value="256GB SSD"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            256GB SSD
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="memoria"
              value="500GB SSD"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            500GB SSD
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="memoria"
              value="1TB SSD"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            1TB SSD
          </label>
        </div>
      </div>
      <div className="filter-category mb-4">
        <h3 className="font-semibold mb-2">Bateria</h3>
        <div className="flex flex-col">
          <label className="mb-1">
            <input
              type="checkbox"
              name="bateria"
              value="60Wh"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            60Wh
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="bateria"
              value="80Wh"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            80Wh
          </label>
          <label className="mb-1">
            <input
              type="checkbox"
              name="bateria"
              value="99Wh"
              onChange={handleCheckboxChange}
              className="mr-2"
            />{" "}
            99Wh
          </label>
        </div>
      </div>
    </div>
  );
};


export default Filter;
