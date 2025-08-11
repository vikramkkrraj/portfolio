// src/layout/AdminLayout.jsx
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../services/authService";

export const AdminLayout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
        <Link to="/admin" className="text-xl font-bold">
          Admin Panel
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
