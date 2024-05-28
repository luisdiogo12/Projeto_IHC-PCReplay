import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductsPage from "./pages/ProductsPage.jsx";
import CalculatorPage from "./pages/CalculatorPage";
import ProfilePage from "./pages/MyProfilePage.jsx";
import MyAppointments from "./pages/MyAppointments.jsx";
import MyChats from "./pages/MyChats.jsx";
import MyProducts from "./pages/MyProducts.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import GuidePage from "./pages/GuidePage.jsx";
import CalendarPage from "./pages/CalendarPage.jsx"
import CheckoutPage from "./pages/CheckoutPage.jsx";
import CartPage  from "./pages/CartPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
function App() {

    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/productsPage" element={<ProductsPage />} />
          <Route path="/calculadora" element={<CalculatorPage />} />
          <Route path="/myprofile" element={<ProfilePage />} />
          <Route path="/myappointments" element={<MyAppointments />} />
          <Route path="/mychats" element={<MyChats />} />
          <Route path="/myproducts" element={<MyProducts />} />
          <Route path="/calendario" element={<CalendarPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/guide" element={<GuidePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    );

  }
 
export default App;
