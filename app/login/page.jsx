"use client";

import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      localStorage.setItem("token", response.data.token);
      alert("Logged in successfully");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen text-black">
      <h2 className="text-white mb-5">Please Login!</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="py-2 pl-3 rounded-md"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="py-2 pl-3 rounded-md"
      />
      <button
        onClick={handleLogin}
        className="bg-gray-100 px-5 py-2 rounded-md"
      >
        Login
      </button>
    </div>
  );
}
