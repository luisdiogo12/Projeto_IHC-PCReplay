import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocalStorageViewer from "./pages/LocalStorageViewer.jsx";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage.jsx";
import ApiViewer from "./pages/ApiViewer.jsx";
import CalculatorPage from "./pages/CalculatorPage";
import ProfilePage from "./pages/MyProfilePage.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";
import MyChats from "./pages/MyChats.jsx";
import MyProducts from "./pages/MyProducts.jsx";

function App() {

  if(0){
    return(
      <>
      <CalculatorPage />
      </>
    );
  }else{
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/storageviewer" element={<LocalStorageViewer />} />
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="/apiviewer" element={<ApiViewer />} />
          <Route path="/calculadora" element={<CalculatorPage />} />
          <Route path="/myprofile" element={<ProfilePage />} />
          <Route path="/myappointments" element={<MyAppointments />} />
          <Route path="/mychats" element={<MyChats />} />
          <Route path="/myproducts" element={<MyProducts />} />
        </Routes>
      </Router>
    );

  }
 
}

export default App;
