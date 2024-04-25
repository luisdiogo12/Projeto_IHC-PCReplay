import { http, HttpResponse } from "msw";
import generateProducts from "./generateProducts";

const usersDB = [
  // Usuários pré-definidos com tokens
  {
    id: 1,
    name: "John",
    username: "john123",
    email: "johndoe@example.com",
    password: "pass123",
    token: "unique_token12345", // Simulando token exclusivo
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
    },
    phone: "555-123-4567",
    membershipStatus: "Gold",
    registrationDate: "2021-01-01",
  },
  {
    id: 2,
    name: "Mary",
    username: "mary123",
    email: "maryt@example.com",
    password: "pass123",
    token: "unique_token67890", // Simulando token exclusivo
    address: {
      street: "456 Elm St",
      city: "Springfield",
      state: "IL",
      zip: "62701",
    },
    phone: "555-987-6543",
    membershipStatus: "Silver",
    registrationDate: "2021-01-15",
  },
];

const productsDB = generateProducts();

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json(usersDB);
  }),
  http.get("/api/products", (resolver) => {
    return HttpResponse.json(productsDB);
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
        token: `new_token${Date.now()}`, // Gerando um token fictício novo
      };
      usersDB.push(newUser);
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
];
