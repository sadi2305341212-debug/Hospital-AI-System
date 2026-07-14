import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../features/auth/LoginPage";
import RegisterPage from "../features/auth/RegisterPage";
import ForgotPasswordPage from "../features/auth/ForgotPasswordPage";

import DashboardPage from "../features/dashboard/DashboardPage";
import DoctorsPage from "../features/doctors/DoctorsPage";


function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        {/* Default Page */}
        <Route 
          path="/" 
          element={<DashboardPage />} 
        />


        {/* Authentication */}
        <Route 
          path="/login" 
          element={<LoginPage />} 
        />

        <Route 
          path="/register" 
          element={<RegisterPage />} 
        />

        <Route 
          path="/forgot-password" 
          element={<ForgotPasswordPage />} 
        />


        {/* Dashboard */}
        <Route 
          path="/dashboard" 
          element={<DashboardPage />} 
        />


        {/* Doctors */}
        <Route 
          path="/doctors" 
          element={<DoctorsPage />} 
        />


      </Routes>

    </BrowserRouter>
  );
}


export default AppRoutes;