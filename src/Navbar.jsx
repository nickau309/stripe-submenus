import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
import logo from "./images/logo.svg";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <nav className="relative z-20 flex h-20 items-center justify-center">
      <div className="grid h-full w-11/12 max-w-6xl grid-cols-2 items-center md:grid-cols-[1fr_auto_1fr]">
        <img src={logo} alt="logo" className="select-none justify-self-start" />
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="justify-self-end rounded-full bg-white/20 py-2 px-4 text-white outline-0 ring-blue-400 ring-offset-2 ring-offset-white duration-200 ease-linear hover:bg-white/30 focus:ring-2 md:hidden"
        >
          <FaBars />
        </button>
        <Sidebar
          isOpen={isSidebarOpen}
          handleClose={() => setIsSidebarOpen(false)}
        />
        <Submenu />
        <button className="hidden justify-self-end rounded-full bg-white/20 py-1.5 px-4 text-white outline-0 ring-blue-400 ring-offset-2 ring-offset-white duration-200 ease-linear hover:bg-white/30 focus:ring-2 md:block">
          Sign in
        </button>
      </div>
    </nav>
  );
}
