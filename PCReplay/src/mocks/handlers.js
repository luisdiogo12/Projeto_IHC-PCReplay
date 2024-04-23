//+:Guarda as bases de dados(os produtos sao gerados aleatoriamente) e os handlers para as requisições
import { http, HttpResponse } from "msw";
import generateProducts from "./generateProducts";

// Simulando um banco de dados de usuários
const usersDB = [
  {
    id: 1,
    name: "John",
    username: "john123",
    email: "johndoe@example.com",
    address: {
      street: "1234 Fake St",
      city: "Faketown",
      state: "FS",
      zip: "12345",
    },
    phone: "123-456-7890",
    membershipStatus: "Active",
    registrationDate: "2022-01-01",
    password: "pass123",
  },
  {
    id: 2,
    name: "Mary",
    username: "mary123",
    email: "maryt@example.com",
    address: {
      street: "1234 Fake St",
      city: "Faketown",
      state: "FS",
      zip: "12345",
    },
    phone: "123-456-7890",
    membershipStatus: "Active",
    registrationDate: "2022-01-01",
    password: "pass123",
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
    const { username, password } = requestBody;
    const foundUser = usersDB.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      return HttpResponse.json({
        message: "Login Successful",
        token: "fake-jwt-token",
        userId: foundUser.id,
        name: foundUser.name,
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
    const exists = usersDB.some((user) => user.username === username);

    if (!exists) {
      const newUser = {
        id: usersDB.length + 1,
        username,
        password,
        name,
      };
      usersDB.push(newUser);
      return HttpResponse.json(
        { message: "User created successfully", userId: newUser.id },
        { status: 201 }
      );
    } else {
      return HttpResponse.json(
        { message: "Username already exists" },
        { status: 409 }
      );
    }
  }),
];
