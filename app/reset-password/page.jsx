"use client";

import { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleRequestReset = async () => {
    try {
      const response = await axios.post("/api/auth/request-password-reset", {
        email,
      });
      alert(response?.data?.message);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  const handleResetPassword = async () => {
    try {
      const response = await axios.post("/api/auth/reset-password", {
        token: code,
        newPassword,
      });
      alert(response?.data?.message);
    } catch (error) {
      alert(error.response?.data?.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen text-black">
      <h2  className="text-white mb-5">Request Password Reset</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="py-2 pl-3 rounded-md"
      />
      <button onClick={handleRequestReset}>Request Reset</button>

      <h2>Reset Password</h2>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Reset Code"
        className="py-2 pl-3 rounded-md"
      />
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="New Password"
        className="py-2 pl-3 rounded-md"
      />
      <button onClick={handleResetPassword}  className="bg-gray-100 px-5 py-2 rounded-md">Reset Password</button>
    </div>
  );
};

export default ResetPassword;
