import { createBrowserRouter } from "react-router-dom";

// Line 3 aur 4 ko badal kar aisa likhein:
import CustomerLayout from "../layout/CustomerLayout";
import AdminLayout from "../layout/AdminLayout.jsx";

// Guard
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Home from "../pages/customer/Home";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";

export const router = createBrowserRouter([
  // 1. Customer Public Section
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  // 2. Admin Authentication Route
  {
    path: "/login",
    element: <Login />,
  },
  // 3. Authenticated Admin Section
  {
    path: "/admin",
    element: <ProtectedRoute />, // Guards all nested children
    children: [
      {
        element: <AdminLayout />, // Nested layout inside the guard
        children: [
          { path: "dashboard", element: <Dashboard /> },
        ],
      },
    ],
  },
  // 4. Catch-All 404 Route
  {
    path: "*",
    element: <div style={{ padding: "2rem", textAlign: "center" }}><h2>404 - Page Not Found</h2></div>,
  },
]);
