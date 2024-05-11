import React, { useState } from "react";
import { useUser } from "../../mocks/UserContext";
import { signupUser } from "../../mocks/api";

const PSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { user, updateUser } = useUser();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }
    try {
      const data = await signupUser(email, password, name);
      setMessage(data.message);
      if (data.message === "User created successfully") {
        updateUser({
          name: data.name,
          email: data.email,
          id: data.id,
          token: data.token,
        });
        onSignupSuccess(data);
      } else {
        // Exibe mensagem de erro recebida do servidor
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error.message || "An error occurred");
    }
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
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-2 p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-2 p-2"
      />
      <input
        type="password"
        placeholder="Confirm Password" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="mt-2 p-2"
      />
      <button
        onClick={handleSignup}
        className="mt-2 text-white bg-green-500 p-2 rounded"
      >
        Sign Up
      </button>
      {message && <div className="mt-2 text-red-500">{message}</div>}
    </div>
  );
};

export default PSignUp;
