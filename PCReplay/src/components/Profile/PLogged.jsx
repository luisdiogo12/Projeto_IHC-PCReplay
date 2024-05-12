import React from "react";
import { useNavigate } from "react-router-dom";

const PLogged = ({ user, onLogout }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <div className="text-center">
        <h1 className="text-lg font-bold text-white mb-4">Olá, {user.name}</h1>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => navigate("/myprofile")}
              className="text-white bg-blue-500 w-full p-2 rounded"
            >
              Perfil
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/myproducts")}
              className="text-white bg-blue-500 w-full p-2 rounded"
            >
              Os meus produtos
            </button>
          </li>
          <li>
            <button
              onClick={() => alert("Ir para atividade")}
              className="text-white bg-blue-500 w-full p-2 rounded"
            >
              Atividade
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/myappointments")}
              className="text-white bg-blue-500 w-full p-2 rounded"
            >
              As minhas marcações
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate("/mychats")}
              className="text-white bg-blue-500 w-full p-2 rounded"
            >
              Os meus chats
            </button>
          </li>
          <li>
            <button
              onClick={onLogout}
              className="text-white bg-red-500 w-full p-2 rounded"
            >
              Terminar sessão
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default PLogged;
