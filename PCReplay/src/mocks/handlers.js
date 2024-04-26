import { http, HttpResponse } from "msw";

const usersDB = JSON.parse(localStorage.getItem("usersDB"));
const productsDB = JSON.parse(localStorage.getItem("productsDB"));

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json(usersDB);
  }),
  http.post("/api/login", async ({ request }) => {
    const requestBody = await request.json();
    const { username, password } = requestBody; //extração do username e password do corpo da requisição
    //!: set user to the user that matches the username and password
    const user = usersDB.find(
      (u) => u.username === username && u.password === password
    );
    //!: if user is found, return a successful login message with the user's token
    if (user) {
      return HttpResponse.json({
        message: "Login Successful",
        name: user.name,
        username: user.username,
        email: user.email,
        id: user.id,
        token: user.token, //!: Retornando token específico do usuário
      });
    } else {
      return HttpResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }
  }),
  http.post("/api/signup", async ({ request }) => {
    const requestBody = await request.json();
    const { username, password, name } = requestBody;
    const exists = usersDB.some((u) => u.username === username);
    if (!exists) {
      const newUser = {
        id: usersDB.length + 1,
        username,
        password,
        name,
        token: `new_token${Date.now()}`,
      };
      usersDB.push(newUser);
      localStorage.setItem("usersDB", JSON.stringify(usersDB)); // Atualizando o localStorage
      return HttpResponse.json(
        {
          message: "User created successfully",
          id: newUser.id,
          token: newUser.token,
        },
        { status: 201 }
      );
    } else {
      return HttpResponse.json(
        { message: "Username already exists" },
        { status: 409 }
      );
    }
  }),
  http.get("/api/user-info", ({ request }) => {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader) {
      return HttpResponse.status(401).json({
        message: "No authorization header provided",
      });
    }
    const token = authHeader.split(" ")[1];
    const user = usersDB.find((u) => u.token === token);
    if (!user) {
      return HttpResponse.status(401).json({ message: "Unauthorized" });
    }
    return HttpResponse.json({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      phone: user.phone,
      membershipStatus: user.membershipStatus,
      registrationDate: user.registrationDate,
    });
  }),
  http.get("/api/products", (resolver) => {
    return HttpResponse.json(productsDB);
  }), 
  http.get("/api/products", (resolver, request) => {
    const query = request.url.searchParams;
    let filteredProducts = productsDB;

    // Verifica se existem parâmetros de query e aplica os filtros
    if (query.toString()) {
      // Verifica e aplica filtro por categoria
      const categoryFilter = query.get("category");
      if (categoryFilter) {
        filteredProducts = filteredProducts.filter(
          (product) => product.category === categoryFilter
        );
      }

      // Verifica e aplica filtro por CPU
      const cpuFilter = query.get("cpu");
      if (cpuFilter) {
        filteredProducts = filteredProducts.filter(
          (product) => product.characteristics.cpu === cpuFilter
        );
      }

      // Verifica e aplica filtro por RAM
      const ramFilter = query.get("ram");
      if (ramFilter) {
        filteredProducts = filteredProducts.filter(
          (product) => product.characteristics.ram === ramFilter
        );
      }

      // Repita para outros filtros de características
      // Filtro por Memória
      const memoriaFilter = query.get("memoria");
      if (memoriaFilter) {
        filteredProducts = filteredProducts.filter(
          (product) => product.characteristics.memoria === memoriaFilter
        );
      }

      // Filtro por Bateria
      const bateriaFilter = query.get("bateria");
      if (bateriaFilter) {
        filteredProducts = filteredProducts.filter(
          (product) => product.characteristics.bateria === bateriaFilter
        );
      }
    }

    // Retorna os produtos filtrados ou todos os produtos
    return HttpResponse.json(filteredProducts);
  }),
];
