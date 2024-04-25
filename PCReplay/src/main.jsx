import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import TestPage from "./pages/TestPage.jsx";
import { UserProvider } from "./testmockLocalStorage/userContext.jsx";
import { ProductProvider } from "./testmockLocalStorage/productContext.jsx";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./testmockLocalStorage/browser");

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
            <App />
          </ProductProvider>
        </UserProvider>
      </React.StrictMode>
    );
  } else {
    console.error("Failed to find the root element");
  }
});

