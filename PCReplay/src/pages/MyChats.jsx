import React from "react";
import { useUser } from "../mocks/UserContext";
import MainLayout from "./LayoutPage";

const MyChats = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <MainLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <AiOutlineUser size="2em" />
        <p className="text-lg font-semibold mb-4">Você não está logado</p>
        <p>Por favor, faça login para ver o seu perfil.</p>
      </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
    </MainLayout>
  );
};

export default MyChats;
