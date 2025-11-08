import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { projectId } = useParams();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-pink-600">Project Details</h1>
      <p className="mt-3 text-gray-600">Viewing project with ID: <b>{projectId}</b></p>

      <div className="mt-4 p-4 bg-pastel-blue rounded-3xl shadow">
        Project content will go here 🔥
        <div className="h-28 bg-white/40 mt-4 rounded-xl flex items-center justify-center font-semibold">
          Illustration Here
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
