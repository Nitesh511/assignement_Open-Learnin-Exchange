import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Navbar = lazy(() => import("../pages/Navbar/navbar.jsx"));
const Loader = lazy(() => import("../../utils/loader.jsx"));
const LoginPage = lazy(() => import("../pages/auth/loginPage.jsx"));
const RegisterPage = lazy(() => import("../pages/auth/registerPage.jsx"));
const HomePage = lazy(() => import("../pages/HeroSection/heroSection.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/HomePage/404ErrorPage/errorPage.jsx")
);

function AppRoute() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoute;
