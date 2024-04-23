import React from "react";
import { useUser } from "../testmocks/userContext"; // Certifique-se de que o caminho está correto
import { useProducts } from "../testmocks/productContext";// Certifique-se de ajustar o caminho conforme necessário

function TestPage2() {
  const { user } = useUser();
  const { products } = useProducts();

  return (
    <div>
      <h1>Test Page 2</h1>
      <section>
        <h2>User Info</h2>
        {user ? <p>Logged in as: {user.name}</p> : <p>No user is logged in.</p>}
      </section>
      <section>
        <h2>Products List</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <img
                  src={product.imageUrl}
                  alt={`Product ${product.name}`}
                  style={{ width: "150px" }}
                />
              </li>
            ))}
          </ul>
        ) : (
          <p>No products available.</p>
        )}
      </section>
    </div>
  );
}

export default TestPage2;
