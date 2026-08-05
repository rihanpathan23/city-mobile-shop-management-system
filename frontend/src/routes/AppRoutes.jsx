import { createBrowserRouter } from "react-router-dom";
import CustomerLayout from "../layout/CustomerLayout";
import Home from "../pages/customer/Home";
import Login from "../pages/admin/Login";
import ProductList from "../pages/admin/ProductList";
import Sales from "../pages/admin/Sales";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomerLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/sales", element: <Sales /> },
]);