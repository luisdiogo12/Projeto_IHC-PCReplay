import { http } from "msw";
import generateProducts from "./generateProducts";

export const handlers = [
  http.post("/api/login", (req, res, ctx) => {
    const { email } = req.body;
    return res(ctx.json({ email, token: "fake-jwt-token" }));
  }),
  http.post("/api/signup", (req, res, ctx) => {
    const { email } = req.body;
    return res(ctx.json({ email, id: "user-id", name: "John Doe" }));
  }),
  http.get("/api/products", (req, res, ctx) => {
    const products = generateProducts(); // Correção aqui para chamar a função
    return res(ctx.json(products));
  }),
];
