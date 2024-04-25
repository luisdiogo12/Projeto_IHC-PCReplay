const apiUrl = "/api";

export const loginUser = async (username, password) => {
  const response = await fetch(`${apiUrl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const data = await response.json(); // Converte a resposta para JSON
  console.log("api-Data:", data); // Log para verificar os dados recebidos
  if (!response.ok) {
    throw new Error(data.message || "Failed to login");
  }
  return data; // Retorna a resposta para ser manipulada pela página de login
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
