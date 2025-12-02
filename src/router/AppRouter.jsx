import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout.jsx";

import HomePage from "../pages/HomePage.jsx";
import AboutPage from "../pages/AboutPage.jsx";
import AcademicsPage from "../pages/AcademicsPage.jsx";
import InfrastructurePage from "../pages/InfrastructurePage.jsx";
import AdmissionsPage from "../pages/AdmissionsPage.jsx";
import GalleryPage from "../pages/GalleryPage.jsx";
import CareersPage from "../pages/CareersPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/infrastructure" element={<InfrastructurePage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default AppRouter;
