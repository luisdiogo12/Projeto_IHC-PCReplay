import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocalStorageViewer from "./pages/LocalStorageViewer.jsx";
import MainPage from "./pages/MainPage";
import ComputadoresProductPage from "./pages/ComputadoresProductPage.jsx";
import DesktopsProductPage from "./pages/DesktopsProductPage.jsx";
import PortateisProductPage from "./pages/PortateisProductPage.jsx";
import LaptopsProductPage from "./pages/LaptopsProductPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ApiViewer from "./pages/ApiViewer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/storageviewer" element={<LocalStorageViewer />} />
        <Route path="/computadores" element={<ComputadoresProductPage />} />
        <Route path="/desktops" element={<DesktopsProductPage />} />
        <Route path="/portateis" element={<PortateisProductPage />} />
        <Route path="/laptops" element={<LaptopsProductPage />} />
        <Route path="/productsPage" element={<ProductsPage />} />
        <Route path="/apiviewer" element={<ApiViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
