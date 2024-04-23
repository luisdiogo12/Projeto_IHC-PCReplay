import React, { useState, useEffect } from "react";
import { useUser } from "../testmocks/userContext"; //+: onde vai buscar o contexto de usuário
import { useProducts } from "../testmocks/productContext"; //+: onde vai buscar o contexto de produtos
import { Link } from "react-router-dom";

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

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        if (data.message === "Login Successful") {
          setUser({ name: data.name, id: data.userId }); // Atualiza o usuário logado no contexto
        }
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password, name }),
    })
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  };

  return (
    <div>
      <h1>Login / Signup Page</h1>
      {/*<a href="/testpage2">Go to Test Page 2</a>*/}
      <Link to="/testpage2">Go to Test Page 2</Link>
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
      {products.map((product) => (
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
      ))}
      {message && <p>{message}</p>}
    </div>
  );
}

export default TestPage;
