import React, { useEffect, useState } from "react";
import App from "../App";
import generateProducts from "./generateProducts"; // A função que gera produtos

const Initializer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrGenerateProducts = async () => {
      let savedProducts = localStorage.getItem("productsDB");
	  // se não existirem produtos no localStorage, gera produtos
      if (!savedProducts) {
        const newProducts = generateProducts(); // Gerar produtos se não existirem no localStorage
        localStorage.setItem("productsDB", JSON.stringify(newProducts)); // Salvar no localStorage
      }
      setLoading(false);
    };
	 const loadFixedUsers = async () => {
		const initialUsers = [
      {
        id: 1,
        name: "John",
        username: "john123",
        email: "johndoe@example.com",
        password: "pass123",
        token: "unique_token12345",
        address: {
          street: "123 Main St",
          city: "Springfield",
          state: "IL",
          zip: "62701",
        },
        phone: "555-123-4567",
        registrationDate: "2021-01-01",
        wishlist: [1, 3, 5],
        cart: [3],
        myproducts: [],
      },
      {
        id: 2,
        name: "Mary",
        username: "mary123",
        email: "maryt@example.com",
        password: "pass123",
        token: "unique_token67890",
        address: {
          street: "456 Elm St",
          city: "Springfield",
          state: "IL",
          zip: "62701",
        },
        phone: "555-987-6543",
        registrationDate: "2021-01-15",
        wishlist: [1, 3, 5],
        cart: [1],
        myproducts: [20],
      },
    ];
     let savedUsers = localStorage.getItem("usersDB");
     // se não existirem users no localStorage, gera produtos
     if (!savedUsers) {
       localStorage.setItem("usersDB", JSON.stringify(initialUsers)); // Salvar no localStorage
     }
     setLoading(false);
   };

    loadOrGenerateProducts();
	loadFixedUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <App />;
};

export default Initializer;
