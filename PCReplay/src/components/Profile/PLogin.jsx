import React, { useState } from "react";
import { useUser } from "../../mocks/UserContext";
import {loginUser} from "../../mocks/api";

const PLogin = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { user, updateUser } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(email, password);
      if (data.message === "Login Successful") {
        updateUser({
          name: data.name,
          email: data.email,
          id: data.id,
          token: data.token,
        }); // Atualiza o contexto com todos os dados do usuário
        setMessage(data.message);
        onLoginSuccess(data);  // Chama a função de sucesso com os dados do usuário
      } else {
        // Quando o login falha { message: "Credenciais Inválidas" }
        setMessage(data.message);
      }
    } catch (error) {
      setMessage(error.message || "Ocorreu um erro");
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
      {message && <div className="mt-2 text-red-500">{message}</div>}
    </div>
  );
};

export default PLogin;
