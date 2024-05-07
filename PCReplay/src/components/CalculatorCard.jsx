import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom"; // Supondo que você está usando react-router para roteamento

const CalculatorCard = ({ product }) => {
    if (!product) return null; // Garante que não tentaremos renderizar sem produto

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