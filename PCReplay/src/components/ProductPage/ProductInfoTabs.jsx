import React, { useState } from "react";

const ProductInfoTabs = ({ description, technicalInfo, reviews }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return <div>{description}</div>;
      case "technicalInfo":
        return <div>{technicalInfo}</div>;
      case "reviews":
        return <div>{reviews}</div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 ${
            activeTab === "description" ? "bg-gray-900" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Descrição
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "technicalInfo" ? "bg-gray-900" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("technicalInfo")}
        >
          Informação Técnica
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "reviews" ? "bg-gray-900" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Avaliação
        </button>
      </div>
      <div className="bg-gray-900 p-4">{renderContent()}</div>
    </div>
  );
};

export default ProductInfoTabs;
