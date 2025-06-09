// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredEmail = localStorage.getItem('registeredEmail');
    if (email === registeredEmail) {
      alert('Login successful!');
      navigate('/chatbot');
    } else {
      alert('Email not registered!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-purple-500 text-white w-full py-2 rounded hover:bg-purple-600">Login</button>
    </form>
  );
}

export default LoginForm;
