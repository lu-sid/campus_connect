import React, { useState } from "react";
import { db, auth } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function CreateProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addDoc(collection(db, "projects"), {
      title,
      description,
      skills: skills.split(","),
      createdBy: auth.currentUser.uid,
      createdAt: new Date(),
    });

    alert("✅ Project Posted!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Post a New Project</h1>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
        <input
          type="text"
          placeholder="Project Title"
          className="border p-2 w-full rounded"
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Project Description"
          className="border p-2 w-full rounded"
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Required Skills (comma separated)"
          className="border p-2 w-full rounded"
          onChange={(e) => setSkills(e.target.value)}
        />

        <button className="bg-blue-500 text-white p-2 rounded">
          Post Project
        </button>
      </form>
    </div>
  );
}
