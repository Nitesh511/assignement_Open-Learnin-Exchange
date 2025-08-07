import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ProtectedRoute from "./ProtectedRoute.jsx";

const Navbar = lazy(() => import("../pages/Navbar/navbar.jsx"));
const Loader = lazy(() => import("../../utils/loader.jsx"));
const LoginPage = lazy(() => import("../pages/auth/loginPage.jsx"));
const RegisterPage = lazy(() => import("../pages/auth/registerPage.jsx"));
const HomePage = lazy(() => import("../pages/HeroSection/heroSection.jsx"));
const NotFoundPage = lazy(() =>
  import("../pages/HomePage/404ErrorPage/errorPage.jsx")
);
const BlogPage = lazy(() =>
  import("../../components/pages/BlogPage/blogPage.jsx")
);

const Footer = lazy(() => import("../pages/Footer/footer.jsx"));

const AdminDash = lazy(() => import("../pages/Admin/adminDash/dashbord.jsx"));
const Chart = lazy(() => import("../pages/Admin/adminDash/chart.jsx"));

const ViewUsers = lazy(() =>
  import("../pages/Admin/usersData/viewAllUsers.jsx")
);

const UserProfile = lazy(() =>
  import("../pages/Admin/usersData/profile_page.jsx")
);

function AppRoute() {
  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route
          path="/admin-dash"
          element={
            <ProtectedRoute>
              <AdminDash />
            </ProtectedRoute>
          }
        >
          <Route index element={<Chart />} />
          <Route path="viewallusers" element={<ViewUsers />} />
          <Route path="profile" element={<UserProfile />} />
        </Route>
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default AppRoute;
