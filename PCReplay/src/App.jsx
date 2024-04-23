import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
// Importe outros componentes de página conforme necessário

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
       
      </Routes>
    </Router>
  );
}

export default App;
