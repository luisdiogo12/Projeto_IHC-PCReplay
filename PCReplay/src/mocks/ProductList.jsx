import React, { useContext } from "react";
import { useProducts } from "./ProductContext";

function ProductList() {
  const { products } = useProducts(); // Usando o contexto para acessar os produtos

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.imageUrl} alt={`Product ${product.id}`} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
