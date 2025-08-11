import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AdminDashboard } from "./pages/AdminDashboard";
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";
import { ProjectForm } from "./components/project/ProjectForm";

import { PrivateRoute } from "./components/common/PrivateRoute";
import { PublicLayout } from "./layout/PublicLayout";
import { AdminLayout } from "./layout/AdminLayout";

import { CreateProject } from "./pages/CreateProject"; 
import { ProjectsPage } from "./pages/Projects";
import { About } from './sections/About'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/resume", element: <Resume /> },
      { path: "/projects", element: <ProjectsPage /> },
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

      // Use CreateProject wrapper
      { path: "projects/new", element: <CreateProject /> },

      // Keep ProjectForm for editing
      { path: "projects/edit/:id", element: <ProjectForm /> },
    ],
  },
]);

