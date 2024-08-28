import { List } from "@phosphor-icons/react";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-[100px] z-50 ">
      {/* LEFT */}
      <div className="flex-3 flex items-center gap-[50px]">
        <a className="cursor-pointer ">
          <Logo />
        </a>
        <a href="/" className="hover-navbar">
          Home
        </a>
        <a href="/" className="hover-navbar">
          About
        </a>
        <a href="/" className="hover-navbar">
          Contacts
        </a>
        <a href="/" className="hover-navbar">
          Agents
        </a>
      </div>
      {/* RIGHT */}
      <div className="flex-2 flex items-center justify-end bg-[#fcf5f3] h-full md:bg-transparent sm:bg-transparent ">
        <a href="/" className="hover-navbar">
          Sign In
        </a>
        <a
          href="/"
          className="bg-[#fece51] py-2 px-6 m-5 hover-navbar rounded-md"
        >
          Sign Up
        </a>

        <List
          size={32}
          color={open ? "white" : "black"}
          className="hidden sm:block cursor-pointer z-50"
          onClick={() => setOpen(!open)}
        />

        <div
          className={`fixed bg-black text-white h-screen w-1/2 top-0 right-0 transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out flex flex-col items-center justify-center gap-14`}
        >
          <a href="/" className="hover-menu">
            Home
          </a>
          <a href="/" className="hover-menu">
            About
          </a>
          <a href="/" className="hover-menu">
            Contacts
          </a>
          <a href="/" className="hover-menu">
            Agents
          </a>
          <a href="/" className="hover-menu">
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
