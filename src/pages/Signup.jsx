import React, { useState } from "react";
import { auth, db } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        uid: user.uid,
      });

      alert("Account Created ✅");
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-600">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Account ✨</h2>

        <div className="flex flex-col gap-4">
          <input
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="Email Address"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Create Password"
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="bg-pink-600 text-white p-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Sign Up
          </button>
        </div>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?
          <span
            className="text-pink-600 font-semibold cursor-pointer ml-1 hover:underline"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
