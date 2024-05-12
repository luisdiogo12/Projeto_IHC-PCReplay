import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { useUser } from "../mocks/UserContext";
import MainLayout from "./LayoutPage";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <AiOutlineUser size="2em" />
        <p className="text-lg font-semibold mb-4">Você não está logado</p>
        <p>Por favor, faça login para ver o seu perfil.</p>
      </div>
    );
  }

  return (
    <MainLayout>
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center">
          <AiOutlineUser size="2em" className="mb-4" />
          <h1 className="text-2xl font-semibold mb-4">Olá, {user.name}</h1>
          <div className="bg-white text-black p-4 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-lg font-bold mb-2">Informações do Usuário</h2>
            <p>
              <strong>Nome:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Telefone:</strong> {user.phone}
            </p>
            <p>
              <strong>Endereço:</strong> {user.address.street},{" "}
              {user.address.city}, {user.address.state}, {user.address.zip}
            </p>
            <p>
              <strong>Data de Registro:</strong> {user.registrationDate}
            </p>
          </div>
          <div className="mt-4">
            <button
              className="bg-blue-500 text-white p-2 rounded mr-2"
              onClick={() => navigate("/myproducts")}
            >
              Meus Produtos
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded mr-2"
              onClick={() => alert("Ir para atividade")}
            >
              Atividade
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded mr-2"
              onClick={() => navigate("/myappointments")}
            >
              Minhas Marcações
            </button>
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={() => navigate("/mychats")}
            >
              Meus Chats
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
