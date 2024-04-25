import React, { useEffect, useState } from "react";
import { useUser } from "../testmockLocalStorage/userContext.jsx";
import { fetchProtectedData } from "../testmockLocalStorage/api.js";

function TestPage2() {
  const { user } = useUser();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (user && user.token) {
      fetchProtectedData("user-info") // Ajuste o endpoint se necessário
        .then((data) => {
          console.log("TestPage2-Data received:", data);
          setUserInfo(data);
        })
        .catch((error) => {
          console.error("Erro ao recuperar informações do usuário:", error);
        });
    }
  }, [user]); // Dependência no token do usuário para refazer a chamada se necessário

  return (
    <div>
      <h1>Test Page 2</h1>
      <section>
        <h2>User Info</h2>
        {user ? <p>Logged in as: {user.name}</p> : <p>No user is logged in.</p>}
        {userInfo.address && (
          <div>
            <h3>Address</h3>
            <p>
              {userInfo.address.street}, {userInfo.address.city},{" "}
              {userInfo.address.state}, {userInfo.address.zip}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default TestPage2;
