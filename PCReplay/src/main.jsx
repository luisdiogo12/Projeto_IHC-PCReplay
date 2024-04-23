import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import TestPaje from "./pages/TestPaje";

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }

  const { worker } = await import("./testmocks/browser");

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
        <TestPaje />
      </React.StrictMode>
    );
  } else {
    console.error("Failed to find the root element");
  }
});

