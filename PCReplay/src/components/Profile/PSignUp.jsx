import React from "react";

const PSignUp = () => {
  return (
    <div>
      <input type="email" placeholder="Email" className="mt-2 p-2" />
      <input type="password" placeholder="Password" className="mt-2 p-2" />
      <button className="mt-2 text-white bg-green-500 p-2 rounded">
        Sign Up
      </button>
    </div>
  );
};

export default PSignUp;
