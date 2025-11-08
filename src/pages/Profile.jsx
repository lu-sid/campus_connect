import React, { useState } from "react";
import { FiEdit2, FiGithub, FiLinkedin, FiLink } from "react-icons/fi";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    college: "",
    branch: "",
    year: "",
    skills: "",
    interests: "",
    github: "",
    linkedin: "",
    portfolio: "",
    achievements: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div className="fade-in max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>

      <div className="bg-white p-6 rounded-3xl shadow-lg space-y-6">

        {/* Profile photo */}
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-gray-300"></div>
          <button className="flex gap-2 items-center px-4 py-2 bg-pastel-purple rounded-xl hover:bg-pastel-pink transition">
            <FiEdit2 /> Change Photo
          </button>
        </div>

        {/* Form */}
        <div className="grid sm:grid-cols-2 gap-6">
          <InputField label="Full Name" name="name" value={profile.name} onChange={handleChange} />
          <InputField label="College Name" name="college" value={profile.college} onChange={handleChange} />
          <InputField label="Branch" name="branch" value={profile.branch} onChange={handleChange} />
          <InputField label="Year" name="year" value={profile.year} onChange={handleChange} />
        </div>

        <InputField label="Skills (comma separated)" name="skills" value={profile.skills} onChange={handleChange} />
        <InputField label="Interests (comma separated)" name="interests" value={profile.interests} onChange={handleChange} />

        {/* Social Links */}
        <div className="grid sm:grid-cols-3 gap-6 mt-4">
          <IconField icon={<FiGithub />} label="GitHub URL" name="github" value={profile.github} onChange={handleChange} />
          <IconField icon={<FiLinkedin />} label="LinkedIn URL" name="linkedin" value={profile.linkedin} onChange={handleChange} />
          <IconField icon={<FiLink />} label="Portfolio URL" name="portfolio" value={profile.portfolio} onChange={handleChange} />
        </div>

        {/* Achievements */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700">Achievements / Projects</label>
          <textarea
            name="achievements"
            value={profile.achievements}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-pastel-purple outline-none"
          ></textarea>
        </div>

        {/* Save button */}
        <button className="w-full py-3 rounded-xl bg-pastel-purple text-gray-800 font-semibold hover:bg-pastel-pink transition">
          Save Profile
        </button>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label className="block mb-1 font-semibold text-gray-700">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-xl border focus:ring-2 focus:ring-pastel-purple outline-none"
    />
  </div>
);

const IconField = ({ icon, label, name, value, onChange }) => (
  <div>
    <label className="block font-semibold mb-1 text-gray-700">{label}</label>
    <div className="flex items-center gap-2 border rounded-xl p-2 focus-within:ring-2 focus-within:ring-pastel-purple">
      {icon}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full outline-none bg-transparent"
      />
    </div>
  </div>
);

export default Profile;
