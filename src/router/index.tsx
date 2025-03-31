import OrderDetails from "@/components/common/Order/OrderDetails";
import ProductDetailsPage from "@/components/common/Product/Details";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import CustomerLayout from "../components/layouts/CustomerLayout";
import HomePage from "../pages";
import DashboardPage from "../pages/admin/Dashboard";
import ManageOrdersPage from "../pages/admin/ManageOrders";
import ManageProductsPage from "../pages/admin/ManageProducts";
import ManageUsersPage from "../pages/admin/ManageUsers";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import CartPage from "../pages/customer/Cart";
import CheckoutPage from "../pages/customer/Checkout";
import OrdersPage from "../pages/customer/Orders";
import ProfilePage from "../pages/customer/Profile";
import NotFoundPage from "../pages/NotFound";

const routes = createRoutesFromElements(
    <>
        {/* Customer Routes */}
        <Route path="/" element={<CustomerLayout />}>
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="customer/order" element={<OrdersPage />} />
            <Route path="customer/order/details/:id" element={<OrderDetails />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="product/:id" element={<ProductDetailsPage />} />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="orders" element={<ManageOrdersPage />} />
            <Route path="products" element={<ManageProductsPage />} />
            <Route path="users" element={<ManageUsersPage />} />
        </Route>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>

        {/* Not found Routes */}
        <Route path="*" element={<NotFoundPage />} />
    </>
);

const router = createBrowserRouter(routes);

export default router;
