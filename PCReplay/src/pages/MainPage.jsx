import React from "react";
import Header from "../components/Header"; // Ajuste o caminho conforme necessário
import ProductCard from "../components/ProductCard"; // Ajuste o caminho conforme necessário

const MainPage = () => {
  const products = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/400x300",
      name: "Product 1",
      description: "Description for Product 1. It's really awesome.",
      price: "25.99",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/400x300",
      name: "Product 2",
      description: "Description for Product 2. It's even better!",
      price: "35.99",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Header />
      </div>
      <div className="flex-grow container mx-auto px-4 sm:px-8">
        <div className="py-8 flex flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;