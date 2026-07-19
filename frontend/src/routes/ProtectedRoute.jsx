import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  // Replace this with your actual authentication state/context logic
  const isAuthenticated = !!localStorage.getItem("admin_token");

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}