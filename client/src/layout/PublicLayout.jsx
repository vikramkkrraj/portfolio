// src/layout/PublicLayout.jsx
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/common/Footer";

export const PublicLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
