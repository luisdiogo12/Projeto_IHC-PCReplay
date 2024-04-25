import React, { useState, useEffect } from "react";
import { useUser } from "../testmockLocalStorage/userContext.jsx"; //+: onde vai buscar o contexto de usuário
import { useProducts } from "../testmockLocalStorage/productContext.jsx"; //+: onde vai buscar o contexto de produtos
import { Link } from "react-router-dom";
import { loginUser, signupUser } from "../testmockLocalStorage/api.js"; //+: Importando as funções da API

function TestPage() {
  const { user, setUser } = useUser(); // Acessando o contexto de usuário
  const { products, setProducts } = useProducts(); // Acessando o contexto de produtos
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Não é mais necessário buscar usuários ou produtos aqui, pois já estão sendo gerenciados pelos contextos
  }, []);

  const handleLogin = async (e) => {
     e.preventDefault();
     try {
       const data = await loginUser(username, password);
       if (data.message === "Login Successful") {
         setUser({name: data.name,username: data.username,email: data.email,id: data.id,token: data.token, }); // Atualiza o contexto com todos os dados do usuário
         setMessage(data.message);
       } else {
         setMessage(data.message);
       }
     } catch (error) {
       setMessage(error.message || "An error occurred");
     }
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const data = await signupUser(username, password, name);
    setMessage(data.message);
  };

  return (
    <div>
      <h1>Login / Signup Page</h1>
      {/*<a href="/testpage2">Go to Test Page 2</a>*/}
      <Link to="/testpage2">Go to Test Page 2</Link>{" "}
      {/* Utilizando o componente Link do react-router-dom para gaurdar o valores, mas como agora etsa a fazer localstorage já nem é preciso*/}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Log In</button>
      </form>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <button type="submit">Sign Up</button>
      </form>
      <h2>Users List</h2>
      {user && (
        <div>{user.name}</div> // Mostrando o usuário logado
      )}
      <h2>Products List</h2>
      {/* {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <img
            src={product.imageUrl}
            alt={`Product ${product.name}`}
            style={{ width: "150px" }}
          />
        </div>
      ))} */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default TestPage;
