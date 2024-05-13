import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow container mx-auto px-4 sm:px-8 pt-16">
        <div className="py-8">
      
            {children}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
