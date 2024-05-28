import React from "react";

const CalculatorCard = ({ product }) => {
    if (!product) return null; 

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img
                className="w-full"
                src={product.imageUrl}
                alt={product.name}
                style={{ height: "400px", objectFit: "cover" }}
            />
        </div>
    );
};

export default CalculatorCard;