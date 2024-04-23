import React from "react";
const PNotLogged = ({ setView }) => {
  return (
    <div>
      <button
        onClick={() => setView("login")}
        className="mt-2 text-white bg-blue-500 p-2 rounded"
      >
        Login
      </button>
      <button
        onClick={() => setView("signup")}
        className="mt-2 text-white bg-green-500 p-2 rounded"
      >
        Sign Up
      </button>
    </div>
  );
};

export default PNotLogged;
