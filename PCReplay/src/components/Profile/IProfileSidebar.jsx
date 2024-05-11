import React, { useState, useEffect } from "react";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import NotLogged from "./PNotLogged";
import Login from "./PLogin";
import SignUp from "./PSignUp";
import Logged from "./PLogged";
import { useUser } from "../../mocks/UserContext";

const IProfileSidebar = ({ isOpen, closeSidebar }) => {
  const [view, setView] = useState("options"); // 'options', 'login', 'signup', 'profile'
  const { user, updateUser } = useUser(); // quando noa ha user, user = null
  //+: Se user == null, view = 'options', senão view = 'profile'
  useEffect(() => {
    if (user) {
      setView("profile");
    } else {
      setView("options");
    }
  }, [user]);

  const handleLoginSuccess = (userData) => {
    updateUser(userData);
  };
  const handleSignupSuccess = (userData) => {
    updateUser(userData);
  };

  const handleLogout = () => {
    updateUser(null);
  };

  // Modificação aqui
  const handleCloseSidebar = () => {
    closeSidebar();
    if (!user) {
      // Se não houver usuário logado, redefinir para a visão de 'options'
      setView("options");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 w-64 h-full bg-gray-800 text-white z-50">
      <button
        onClick={handleCloseSidebar}
        className="absolute top-4 right-4 text-white"
      >
        <AiOutlineClose size="1.5em" />
      </button>
      <div className="flex flex-col items-center justify-center h-full">
        <AiOutlineUser size="2em" />
        {view === "options" && <NotLogged setView={setView} />}
        {view === "login" && <Login onLoginSuccess={handleLoginSuccess} />}
        {view === "signup" && <SignUp onSignupSuccess={handleSignupSuccess} />}
        {view === "profile" && user && (
          <Logged user={user} onLogout={handleLogout} />
        )}
      </div>
    </div>
  );
};

export default IProfileSidebar;
