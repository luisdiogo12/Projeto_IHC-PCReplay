import React, { useState } from "react";

const ProductInfoTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return <div>{product.description}</div>;
      case "technicalInfo":
        return (
          <div>
            {Object.entries(product.characteristics).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
          </div>
        );
      case "evaluation":
        return (
          <div>
            <p className=" font-bold">
              Segundo o nosso especialista: {product.expert}
            </p>
            {product.evaluation}
          </div>
        );
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
            activeTab === "evaluation" ? "bg-gray-900" : "bg-gray-700"
          }`}
          onClick={() => setActiveTab("evaluation")}
        >
          Avaliação
        </button>
      </div>

      <div className="bg-gray-900 p-4">{renderContent()}</div>
    </div>
  );
};

export default ProductInfoTabs;
