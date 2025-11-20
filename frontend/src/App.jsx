import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import Logout from "./pages/Logout";
import ProtectedRoute from "./components/ProtectedRoute";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignupForm from "./pages/SignupForm";
import Home from "./pages/Home";
import CustomerList from "./pages/CustomerList";
import CustomerForm from "./pages/CustomerForm";


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
        <Route
        path="/customers"
        element={
          <ProtectedRoute allowedRoles={["admin", "manager"]}>
            <CustomerList />
          </ProtectedRoute>
        }
        />

        <Route
        path="/customers/add"
        element={
          <ProtectedRoute allowedRoles={["admin", "manager"]}>
            <CustomerForm />
          </ProtectedRoute>
        }
        />

        <Route
        path="/customers/edit/:id"
        element={
          <ProtectedRoute allowedRoles={["admin", "manager"]}>
            <CustomerForm />
          </ProtectedRoute>
        }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/home" element={<Home />} />

        <Route path="/" element={<Login />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        
        {/* <Route path="/" element={<Login />} /> */}

      </Routes>
      <Footer />
      </div>
      </div>
    </BrowserRouter>
  );
}
