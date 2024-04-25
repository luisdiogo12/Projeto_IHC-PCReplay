import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TestPage from "./pages/TestPage.jsx";
import TestPage2 from "./pages/TestPage2.jsx";
import LocalStorageViewer from "./pages/LocalStorageViewer.jsx";
// Importe outros componentes de página conforme necessário

function App() {
  return (
    <Router>
      <Routes>
        {/* TestPage como a página inicial*/}
        <Route path="/" element={<TestPage />} />
        {/* Adicione mais rotas para outras páginas conforme necessário */}
        <Route path="/testpage2" element={<TestPage2 />} />
        <Route path="/LocalStorageViewer" element={<LocalStorageViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
