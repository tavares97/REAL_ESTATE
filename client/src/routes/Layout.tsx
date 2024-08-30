import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="h-screen max-w-[1366px] mx-auto px-9">
      <div>
        <Navbar />
      </div>

      <div className="h-[calc(100vh-100px)] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
