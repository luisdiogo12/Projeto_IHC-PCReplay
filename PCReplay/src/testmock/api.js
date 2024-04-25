const apiUrl = "/api";

// Função para realizar login
export const loginUser = async (username, password) => {
  //!: Faz a requisição para a rota de login e define o método como POST e o corpo da requisição como um objeto JSON com username e password
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (response.message === "Login Successful") {
    //!: Atualizando o contexto de usuário com os dados do usuário logado
    setUser({ name: data.name, id: data.userId, token: data.token });
  }
  return response.json(); //!: Retorna a promessa resolvida para quem chamar
};

// Função para registrar usuário
export const signupUser = async (username, password, name) => {
  const response = await fetch(`${apiUrl}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password, name }),
  });
  return response.json(); // Retorna a promessa resolvida para quem chamar
};

// Função genérica para fazer requisições para rotas protegidas
export const fetchProtectedData = async (endpoint) => {
  const token = localStorage.getItem("token");
  console.log("Sending token:", token); // Log para verificar o token enviado
  const response = await fetch(`${apiUrl}/${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("Response:", response); // Log para verificar a resposta
  if (!response.ok) {
    console.error("Response not OK, status:", response.status); // Log detalhado do erro de resposta
    throw new Error("Failed to fetch the data");
  }

  const data = await response.json(); // Pode ser útil colocar um try/catch aqui
  console.log("fetchProtectedData-Data received:", data); // Ver dados recebidos
  return data;
};
