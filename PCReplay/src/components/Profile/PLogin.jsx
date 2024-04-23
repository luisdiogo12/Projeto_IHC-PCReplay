import React, { useState } from "react";

const PLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement the login logic or fetch from API
    console.log("Login attempted");
    onLoginSuccess({ name: "User Name", email: email }); // Simulate login success
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-2 p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-2 p-2"
      />
      <button
        onClick={handleLogin}
        className="mt-2 text-white bg-blue-500 p-2 rounded"
      >
        Login
      </button>
    </div>
  );
};

export default PLogin;
