import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./mocks/UserContext.jsx";
import { ProductProvider } from "./mocks/ProductContext.jsx";
import { FilterProvider } from "./mocks/FilterContext";
import Initializer from "./mocks/Initializer";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start({
    quiet: false, // Garanta que isso não está definido como true
    onUnhandledRequest: "warn", // ou 'warn' para avisos no console
  });
}
enableMocking().then(() => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <UserProvider>
          <ProductProvider>
            <FilterProvider>
              <Initializer />
            </FilterProvider>
          </ProductProvider>
        </UserProvider>
      </React.StrictMode>
    );
  } else {
    console.error("Failed to find the root element");
  }
}
);

