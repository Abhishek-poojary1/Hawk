import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import LoginPage from "./pages/login/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "rsuite/dist/rsuite-no-reset.min.css";
import { AuthProvider } from "./pages/AuthContext";
import Layout from "../src/pages/Layout";
import User from "./pages/User";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserGroup from "./pages/UserGroups";
import Product from "./product/Product";
import ProductDetailPage from "./product/ProductDetailPage";

const ProtectedRoutes = () => {
  const location = useLocation();

  // Check if the current path is "/"
  if (location.pathname === "/") {
    return (
      <div className="flex justify-center items-center self-center h-screen">
        <LoginPage />
      </div>
    );
  }
};

function App() {
  return (
    <div className="flex flex-auto bg-slate-100  justify-center">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<ProtectedRoutes />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Product" element={<Dashboard />} />
            <Route path="/Product/*" element={<Dashboard />} />
            <Route path="/Things" element={<Dashboard />} />
            <Route path="/things/thingsdetails" element={<Dashboard />} />
            <Route path="/OTA/details" element={<Dashboard />} />
            <Route path="/Users" element={<Dashboard />} />
            <Route path="/User/userdetails" element={<Dashboard />} />
            <Route path="/UserGroups" element={<Dashboard />} />
            <Route path="/OTA" element={<Dashboard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
