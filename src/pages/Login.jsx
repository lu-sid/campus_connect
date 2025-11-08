import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      
      {/* Card */}
      <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-sm">
        
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none border border-white/40 focus:ring-2 focus:ring-white"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-white/30 text-white placeholder-white outline-none border border-white/40 focus:ring-2 focus:ring-white"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-white text-blue-600 font-semibold p-3 rounded-lg hover:bg-gray-100 transition">
            Login
          </button>
        </form>

        {/* Signup redirect */}
        <p className="mt-5 text-center text-white">
          Don't have an account?
          <span
            className="text-yellow-200 font-semibold cursor-pointer ml-1 hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
};

export default Login;
