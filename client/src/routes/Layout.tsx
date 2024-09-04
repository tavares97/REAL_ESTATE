import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import { useAuthStore } from "../store/authStore";

const LayoutWrapper = () => (
  <div className="h-screen max-w-[1366px] mx-auto px-9">
    <Navbar />
    <div className="h-[calc(100vh-100px)]">
      <Outlet />
    </div>
  </div>
);

const Layout = () => <LayoutWrapper />;

const PrivateRoute = () => {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <LayoutWrapper />;
};

export { Layout, PrivateRoute };
