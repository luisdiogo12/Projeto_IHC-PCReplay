import { http, HttpResponse } from "msw";

// Simulando um banco de dados de usuários
const usersDB = [
  { id: 1, username: "user1", password: "pass1", name: "User One" },
  { id: 2, username: "user2", password: "pass2", name: "User Two" },
  { id: 3, username: "user3", password: "pass3", name: "User Three" },
];

export const handlers = [
  http.get("/api/users", (resolver) => {
    return HttpResponse.json(usersDB);
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
