"use client"

import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/auth/register', { email, password });
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center min-h-screen text-black">
      <h2 className="text-white mb-5">Register</h2>
      <input className="py-2 pl-3 rounded-md" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input className="py-2 pl-3 rounded-md" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister} className="bg-gray-100 px-5 py-2 rounded-md">Register</button>
    </div>
  );
}
