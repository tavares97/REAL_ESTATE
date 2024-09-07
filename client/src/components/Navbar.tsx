import { Link } from "react-router-dom";
import { List } from "@phosphor-icons/react";
import Logo from "./Logo";
import { useAuthStore } from "../store/authStore";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { user } = useAuthStore();

  return (
    <nav className="flex items-center justify-between h-[100px] z-50 ">
      {/* LEFT */}
      <div className="flex-3 flex items-center gap-[50px]">
        <a href="/" className="cursor-pointer ">
          <Logo />
        </a>
        <a href="/" className="hover-navbar">
          Home
        </a>
        <a href="/list" className="hover-navbar">
          Lists
        </a>
        <a href="/contacts" className="hover-navbar">
          Contacts
        </a>
      </div>
      {/* RIGHT */}
      <div className="flex-2 flex items-center justify-end bg-[#fcf5f3] h-full md:bg-transparent sm:bg-transparent ">
        {user ? (
          <div className="flex font-bold px-5">
            <Link to="/profile" className="flex items-center">
              <img
                src={user.avatar || "/avatar.png"}
                alt="user"
                className="w-10 h-10 rounded-full object-cover mr-2"
              />
              <span className="sm:hidden">{user.username}</span>
            </Link>

            <Link
              to="/profile"
              className="py-3 px-5 bg-amber-200 cursor-pointer rounded-md ml-5 relative sm:hidden"
            >
              <div className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                3
              </div>
              Profile
            </Link>
          </div>
        ) : (
          <>
            <a href="/login" className="hover-navbar">
              Sign In
            </a>
            <a
              href="/"
              className="bg-[#fece51] py-2 px-6 m-5 hover-navbar rounded-md"
            >
              Sign Up
            </a>
          </>
        )}

        <List
          size={32}
          color={open ? "white" : "black"}
          className="hidden sm:block cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        />

        <div
          className={`fixed bg-black text-white h-screen w-1/2 top-0 right-0 transform z-30 ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-14`}
        >
          <a href="/" className="hover-menu">
            Home
          </a>
          <a href="/list" className="hover-menu">
            Lists
          </a>
          <a href="/contacts" className="hover-menu">
            Contacts
          </a>

          <a href="/login" className="hover-menu">
            Sign In
          </a>
          <a href="/" className="hover-menu">
            Sign Out
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
