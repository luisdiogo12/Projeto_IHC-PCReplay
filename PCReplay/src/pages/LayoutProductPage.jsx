import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Filter from "../components/Filter";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="sticky w-64 top-0 h-auto max-h-screen p-4  overflow-auto">
          <Filter />
        </div>
        <div className="flex-grow">
          <div className="container mx-auto px-4 sm:px-8 pt-16">
            <div className="py-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
