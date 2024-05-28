
import React, { useEffect, useState } from "react";
import App from "../App";
import generateProducts from "./generatorProducts"; 
const Initializer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadOrGenerateProducts = async () => {
      let savedProducts = localStorage.getItem("productsDB");
      if (!savedProducts) {
        const newProducts = generateProducts(); 
        localStorage.setItem("productsDB", JSON.stringify(newProducts)); 
      }
      setLoading(false);
    };
	 const loadFixedUsers = async () => {
		const initialUsers = [
      {
        id: 1,
        name: "John",
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
     if (!savedUsers) {
       localStorage.setItem("usersDB", JSON.stringify(initialUsers)); 
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
