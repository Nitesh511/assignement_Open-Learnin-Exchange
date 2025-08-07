import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const authRole = localStorage.getItem("authRole");

   if (authRole !== "true") {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
