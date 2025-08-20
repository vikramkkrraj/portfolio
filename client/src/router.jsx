// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ProjectForm } from "./components/project/ProjectForm";
import { PrivateRoute } from "./components/common/PrivateRoute";
import { PublicLayout } from "./layout/PublicLayout";
import { AdminLayout } from "./layout/AdminLayout";
import { CreateProject } from "./pages/CreateProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> }, // ✅ everything inside Home now
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "projects/new", element: <CreateProject /> },
      { path: "projects/edit/:id", element: <ProjectForm /> },
    ],
  },
]);
