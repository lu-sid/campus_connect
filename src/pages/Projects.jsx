import React from "react";
import { useNavigate } from "react-router-dom";

const projects = [
  { name: "Marketing", members: 32, icon: "📣" },
  { name: "UI/UX", members: 25, icon: "🎨" },
  { name: "Creative", members: 12, icon: "✨" },
  { name: "Success Story", members: 35, icon: "🏆" },
  { name: "Social Network", members: 120, icon: "👥" },
  { name: "Technical Expert", members: 42, icon: "💻" },
];

const Projects = () => {
  const nav = useNavigate();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Communities</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => nav(`/dashboard/projects/${i}`)}
            className="bg-white border border-gray-100 p-5 rounded-xl cursor-pointer hover:shadow-sm hover:border-pink-200 transition"
          >
            <div className="text-5xl mb-3">{p.icon}</div>
            <h2 className="font-medium text-gray-800">{p.name}</h2>
            <p className="text-sm text-gray-400 mt-1">{p.members} members</p>

            <button className="mt-4 w-full py-2 text-sm font-medium text-pink-500 border border-pink-200 rounded-lg hover:bg-pink-50 transition">
              Join Community
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
