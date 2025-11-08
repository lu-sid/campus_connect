import React from "react";

const Settings = () => {
  return (
    <div className="max-w-xl space-y-6">

      <h1 className="text-2xl font-semibold text-gray-800">Settings</h1>

      <div className="bg-white border border-gray-100 p-5 rounded-xl space-y-4">

        <Toggle label="Enable notifications" />
        <Toggle label="Dark mode (soon)" disabled />
        <Toggle label="Receive email updates" />

        <button className="text-sm text-red-400 hover:text-red-500 transition mt-4">
          Delete Account
        </button>
      </div>

    </div>
  );
};

const Toggle = ({ label, disabled }) => (
  <div className="flex justify-between items-center">
    <span className={`text-sm ${disabled ? "text-gray-300" : "text-gray-600"}`}>{label}</span>
    <input type="checkbox" disabled={disabled} className="accent-pink-400 w-4 h-4" />
  </div>
);

export default Settings;
