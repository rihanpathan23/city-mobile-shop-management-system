import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import Home from "../pages/customer/Home";
import Login from "../pages/admin/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { index: true, element: <Home /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);