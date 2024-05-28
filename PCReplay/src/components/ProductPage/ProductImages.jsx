import React, { useEffect, useState } from "react";

const ProductImages = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  
  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  
  if (!images || images.length === 0) {
    return (
      <div className="flex justify-center items-center border-2 border-gray-300 w-2/3 h-36 mx-auto">
        Undefined
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <button onClick={handlePrev}>&lt;</button>
      <img
        src={`https://fastly.picsum.photos/id/9/5000/3269.jpg?hmac=cZKbaLeduq7rNB8X-bigYO8bvPIWtT-mh8GRXtU3vPc`}
        alt={`Produto ${currentImageIndex + 1}`}
        className="w-2/3 h-auto"
      />
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ProductImages;
