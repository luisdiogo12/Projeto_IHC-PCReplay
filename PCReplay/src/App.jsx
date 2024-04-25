import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LocalStorageViewer from "./pages/LocalStorageViewer.jsx";
// Importe outros componentes de página conforme necessário

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/storageviewer" element={<LocalStorageViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
