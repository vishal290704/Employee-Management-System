import React, { useState } from "react";

const Login = ({ handleLogin, disabled }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      {/* Outer login part */}
      <div
        className="bg-[#111827] border border-gray-700 
                rounded-xl p-12 w-105 
                shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      >
        <h2 className="text-3xl font-bold text-white text-center">Login</h2>

        <p className="text-gray-400 text-center mt-1 mb-6">
          Employee Management System
        </p>

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="Email"
            className="bg-[#020617] border border-gray-600 rounded-xl px-4 py-3
           text-white outline-none placeholder:text-gray-500
           focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40
           transition"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="Password"
            className="bg-[#020617] border border-gray-600 rounded-xl px-4 py-3
           text-white outline-none placeholder:text-gray-500
           focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40
           transition"
          />

          <button
            type="submit"
            disabled={disabled}
            className={`mt-4 py-3 rounded-xl font-medium transition
    ${
      disabled
        ? "bg-gray-600 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
    }
  `}
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">
          Secure Access • EMS Portal
        </p>
      </div>
    </div>
  );
};

export default Login;
