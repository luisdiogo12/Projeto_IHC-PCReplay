import { setupWorker } from "msw";
import { handlers } from "./handlers"; // Importando handlers do arquivo handlers.js

export const worker = setupWorker(...handlers);
