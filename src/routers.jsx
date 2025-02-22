import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "./admin/layouts/AdminLayout.jsx";
import DashboardPage from "./admin/Dashboard/DashboardPage.jsx";
import ProductListPage from "./admin/Products/ProductListPage.jsx";
import ProductEditPage from "./admin/Products/ProductEditPage.jsx";
import ProductAddPage from "./admin/Products/ProductAddPage.jsx";
import CategoryPage from "./admin/Categories/CategoryPage.jsx";
import CategoryAddPage from "./admin/Categories/CategoryAddPage.jsx";
import CategoryEditPage from "./admin/Categories/CategoryEditPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" /> },
      { path: "dashboard", element: <DashboardPage /> },
      { path: "products", element: <ProductListPage /> },
      { path: "products/add", element: <ProductAddPage /> },
      { path: "products/edit/:id", element: <ProductEditPage /> },
      { path: "categories", element: <CategoryPage /> },
      { path: "categories/add", element: <CategoryAddPage /> },
      { path: "categories/edit/:id", element: <CategoryEditPage /> },
    ],
  },
]);
