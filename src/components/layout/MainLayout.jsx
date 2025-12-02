import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
