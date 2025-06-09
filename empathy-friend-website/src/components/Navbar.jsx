// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-purple-800 p-4 flex justify-center space-x-8 text-lg font-semibold shadow-md text-white">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/register" className="hover:underline">Register</Link>
      <Link to="/login" className="hover:underline">Login</Link>
      <Link to="/chatbot" className="hover:underline">Chatbot</Link>
      <Link to="/moodsetter" className="hover:underline">Mood Setter</Link>

    </nav>
  );
}

export default Navbar;
