import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FiHome,
  FiGrid,
  FiBell,
  FiSettings,
  FiLogOut,
  FiSearch,
  FiMenu,
} from "react-icons/fi";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex h-screen bg-[#F5F7FA]">

      {/* Sidebar */}
      <div
        className={`relative transition-all duration-300 bg-white shadow-xl border-r ${
          open ? "w-64" : "w-20"
        } p-5`}
      >
        {/* Toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-8 bg-pastel-pink rounded-full p-2 shadow-md hover:scale-110 transition"
        >
          <FiMenu size={18} />
        </button>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-pastel-purple mb-10 tracking-wide">
          {open ? "Campus Connect" : "CC"}
        </h1>

        {/* Navigation */}
        <nav className="space-y-3 text-gray-600">
          <NavItem to="/dashboard" icon={<FiHome />} label="Dashboard" open={open} />
          <NavItem to="/dashboard/projects" icon={<FiGrid />} label="Projects" open={open} />
          <NavItem to="/dashboard/settings" icon={<FiSettings />} label="Settings" open={open} />

          <button className="flex gap-3 items-center text-red-500 mt-8 hover:text-red-600 transition">
            <FiLogOut size={20} />
            {open && "Logout"}
          </button>
        </nav>
      </div>

      {/* Right content */}
      <div className="flex-1 flex flex-col">

        {/* Top navbar */}
        <div className="flex justify-between items-center px-6 py-3 bg-white shadow-md rounded-bl-3xl rounded-br-3xl">

          {/* Search box */}
          <div className="flex items-center bg-[#F2F3F5] p-3 rounded-xl w-80 shadow-sm">
            <FiSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search something..."
              className="bg-transparent px-3 w-full outline-none"
            />
          </div>

          {/* Notification + Profile */}
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <FiBell size={22} className="text-gray-700 hover:text-black transition" />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </div>
            <div
                onClick={() => (window.location.href = "/dashboard/profile")}
                className="h-10 w-10 rounded-full bg-gray-300 cursor-pointer hover:ring-2 hover:ring-pastel-purple transition"
                ></div>

          </div>
        </div>

        {/* Page content */}
        <div className="p-6 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label, open }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-pastel-purple hover:text-black transition ${
        isActive ? "bg-pastel-purple font-semibold" : ""
      }`
    }
  >
    {icon}
    {open && <span>{label}</span>}
  </NavLink>
);

export default Dashboard;
