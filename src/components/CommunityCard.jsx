// src/components/CommunityCard.jsx
import React from "react";

const CommunityCard = ({ title, members, color }) => {
  return (
    <div
      className={`rounded-3xl shadow-md hover:shadow-xl hover:scale-[1.02] transition cursor-pointer border border-gray-200 p-6 bg-gradient-to-br ${color}`}
    >
      {/* Illustration placeholder */}
      <div className="w-full h-36 bg-white/60 rounded-2xl flex items-center justify-center">
        <span className="text-5xl opacity-70">🎨</span>
      </div>

      <h3 className="font-semibold text-lg mt-4">{title}</h3>
      <p className="text-sm text-gray-600">{members} members</p>

      <button className="mt-4 border border-pink-500 text-pink-500 px-4 py-2 rounded-xl hover:bg-pink-50 transition">
        Join Community
      </button>
    </div>
  );
};

export default CommunityCard;
