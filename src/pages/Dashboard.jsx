import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // your path
import {
  FiHome, FiGrid, FiSettings, FiLogOut,
  FiSearch, FiMenu, FiUser, FiMoon, FiSun,
} from "react-icons/fi";

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ moved inside component

  const [open, setOpen] = useState(true);
  const [profilePic, setProfilePic] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = async () => {  // ✅ moved inside component
    try {
      await signOut(auth);
      localStorage.removeItem("profilePic");
      localStorage.removeItem("darkMode");
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed — check console for details.");
    }
  };

  useEffect(() => {
    const pic = localStorage.getItem("profilePic");
    if (pic) setProfilePic(pic);

    const savedDark =
      localStorage.getItem("darkMode") === "true" ||
      localStorage.getItem("theme") === "dark";
    setDarkMode(savedDark);

    if (savedDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <div className="flex h-screen bg-[#F5F7FA] dark:bg-[#0b1220] transition-colors text-gray-900 dark:text-gray-100">

      {/* Sidebar */}
      <div className={`relative transition-all duration-300 bg-white dark:bg-[#0f1724] shadow-xl border-r dark:border-gray-800 ${open ? "w-64" : "w-20"} p-5`}>
        <button
          onClick={() => setOpen(!open)}
          className="absolute -right-3 top-8 bg-pastel-pink dark:bg-gray-700 rounded-full p-2 shadow-md hover:scale-110"
        >
          <FiMenu size={18} className="dark:text-white" />
        </button>

        <h1 className="text-2xl font-bold text-pastel-purple dark:text-pink-300 mb-10">
          {open ? "Campus Connect" : "CC"}
        </h1>

        <nav className="space-y-3">
          <NavItem to="/dashboard" icon={<FiHome />} label="Dashboard" open={open} />
          <NavItem to="/dashboard/projects" icon={<FiGrid />} label="Projects" open={open} />
          <NavItem to="/dashboard/profile" icon={<FiUser />} label="Profile" open={open} />
          <NavItem to="/dashboard/settings" icon={<FiSettings />} label="Settings" open={open} />

          <button
            className="flex gap-3 items-center text-red-500 mt-8"
            onClick={handleLogout}  // ✅ logout now works
          >
            <FiLogOut size={20} />
            {open && "Logout"}
          </button>
        </nav>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <div className="flex justify-between items-center px-6 py-3 bg-white dark:bg-[#071026] shadow-md rounded-bl-3xl rounded-br-3xl">

          {/* Search Box */}
          <div className="flex items-center bg-[#F2F3F5] dark:bg-[#0b1a2b] p-3 rounded-xl w-80">
            <FiSearch className="text-gray-500 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Search something..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                navigate("/dashboard/search", { state: e.target.value });
              }}
              className="bg-transparent px-3 w-full outline-none text-gray-800 dark:text-white"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
              {darkMode ? <FiSun className="text-yellow-400" size={18} /> : <FiMoon size={18} />}
            </button>

            <div onClick={() => navigate("/dashboard/profile")} className="h-10 w-10 rounded-full overflow-hidden cursor-pointer">
              <img src={profilePic || "https://via.placeholder.com/100"} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Pages Render Here */}
        <div className="p-6 overflow-y-auto">
          <Outlet context={{ searchQuery }} />
        </div>

      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label, open }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 p-3 rounded-xl ${
        isActive ? "bg-pastel-purple text-black font-semibold" : "hover:bg-gray-100 dark:hover:bg-gray-800"
      }`
    }
  >
    {icon}
    {open && label}
  </NavLink>
);

export default Dashboard;
