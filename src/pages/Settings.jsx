import React, { useEffect, useState } from "react";

const Settings = () => {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme when toggled
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="max-w-xl space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Settings
      </h1>

      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-5 rounded-xl space-y-4">

        <Toggle label="Enable notifications" />

        {/* ✅ REAL WORKING DARK MODE TOGGLE */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600 dark:text-gray-300">Dark mode</span>
          <input
            type="checkbox"
            checked={dark}
            onChange={() => setDark(!dark)}
            className="accent-pink-400 w-4 h-4 cursor-pointer"
          />
        </div>

        <Toggle label="Receive email updates" />

        <button className="text-sm text-red-400 hover:text-red-500 transition mt-4">
          Delete Account
        </button>
      </div>
    </div>
  );
};

const Toggle = ({ label }) => (
  <div className="flex justify-between items-center">
    <span className="text-sm text-gray-600 dark:text-gray-300">{label}</span>
    <input type="checkbox" className="accent-pink-400 w-4 h-4 cursor-pointer" />
  </div>
);

export default Settings;
