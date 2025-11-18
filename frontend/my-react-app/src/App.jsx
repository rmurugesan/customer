import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <BrowserRouter>
    <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
    <Header />
      <Routes>

        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/manager"
          element={
            <ProtectedRoute allowedRoles={["manager", "admin"]}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}
