import React, { useState } from "react";
import { FiEdit2, FiGithub, FiLinkedin, FiLink } from "react-icons/fi";
import { saveProfile, uploadProfileImage } from "../firebase/profileService";

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

  const [image, setImage] = useState(localStorage.getItem("profilePic") || "");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // ✅ Upload Image to Firebase
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = await uploadProfileImage(file);
    setImage(url);
    localStorage.setItem("profilePic", url);
  };

  // ✅ Save profile to Firestore
  const handleSave = async () => {
    await saveProfile({ ...profile, image });
    alert("Profile saved successfully 🎀");
  };

  return (
    <div className="fade-in max-w-4xl mx-auto space-y-6">

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">My Profile 🎀</h1>

      {/* Main Card */}
      <div className="bg-pastel-purple/20 dark:bg-gray-800 p-6 rounded-3xl shadow-lg space-y-6 backdrop-blur-sm border border-pastel-purple/30">

        {/* Profile Image */}
        <div className="flex items-center gap-6">
          <label className="relative cursor-pointer">
            <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            <img
              src={image || "https://via.placeholder.com/100"}
              alt="profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-pastel-pink hover:scale-105 transition"
            />
            <div className="absolute bottom-1 right-1 bg-pastel-pink p-1 rounded-full">
              <FiEdit2 size={14} />
            </div>
          </label>

          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Upload your photo</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">JPG, PNG or GIF</p>
          </div>
        </div>

        {/* Inputs */}
        <div className="grid sm:grid-cols-2 gap-5">
          <InputField label="Full Name" name="name" value={profile.name} onChange={handleChange} />
          <InputField label="College" name="college" value={profile.college} onChange={handleChange} />
          <InputField label="Branch" name="branch" value={profile.branch} onChange={handleChange} />
          <InputField label="Year" name="year" value={profile.year} onChange={handleChange} />
        </div>

        <InputField label="Skills (comma separated)" name="skills" value={profile.skills} onChange={handleChange} icon="💡"/>
        <InputField label="Interests (comma separated)" name="interests" value={profile.interests} onChange={handleChange} icon="✨"/>

        {/* Social Links */}
        <div className="grid sm:grid-cols-3 gap-5">
          <IconField icon={<FiGithub />} label="GitHub URL" name="github" value={profile.github} onChange={handleChange} />
          <IconField icon={<FiLinkedin />} label="LinkedIn URL" name="linkedin" value={profile.linkedin} onChange={handleChange} />
          <IconField icon={<FiLink />} label="Portfolio URL" name="portfolio" value={profile.portfolio} onChange={handleChange} />
        </div>

        {/* Achievements */}
        <div>
          <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">Achievements / Projects 🏆</label>
          <textarea
            name="achievements"
            value={profile.achievements}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 rounded-2xl border border-pastel-blue focus:ring-2 focus:ring-pink-300 outline-none bg-white/50 dark:bg-gray-700"
            placeholder="Your best moments..."
          ></textarea>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full py-3 rounded-xl bg-pastel-pink hover:bg-pastel-purple text-gray-800 font-bold transition transform hover:scale-[1.03]"
        >
          💾 Save Profile
        </button>

      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange, icon }) => (
  <div>
    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">
      {icon} {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-2xl border border-pastel-purple focus:ring-2 focus:ring-pastel-pink outline-none bg-white/60 dark:bg-gray-700"
    />
  </div>
);

const IconField = ({ icon, label, name, value, onChange }) => (
  <div>
    <label className="block mb-1 font-semibold text-gray-700 dark:text-gray-200">{label}</label>
    <div className="flex items-center gap-2 border border-pastel-purple rounded-2xl p-3 bg-white/60 dark:bg-gray-700 focus-within:ring-2 focus-within:ring-pastel-pink">
      {icon}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent outline-none"
      />
    </div>
  </div>
);

export default Profile;
