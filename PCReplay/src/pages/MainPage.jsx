import React from "react";
import Header from "../components/Header"; 
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const MainPage = () => {
  // Gerando 22 produtos de exemplo
  const products = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    imageUrl: `https://via.placeholder.com/400x300?text=Product+${index + 1}`,
    name: `Product ${index + 1}`,
    description: `Description for Product ${
      index + 1
    }. It has some unique features.`,
    price: `${(Math.random() * 50 + 15).toFixed(2)}`, // Preço aleatório entre 15 e 65
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto px-4 sm:px-8 pt-16">
        {" "}
        {/* Adicionado pt-16 para adicionar padding ao topo */}
        <div className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;