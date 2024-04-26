import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { UserProvider } from "./mocks/UserContext.jsx";
import { ProductProvider } from "./mocks/ProductContext.jsx";
import Initializer from "./mocks/Initializer";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}
enableMocking().then(() => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <UserProvider>
          <ProductProvider>
            <Initializer />
          </ProductProvider>
        </UserProvider>
      </React.StrictMode>
    );
  } else {
    console.error("Failed to find the root element");
  }
});

