// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    username: '',
  });

  const [passwordStrength, setPasswordStrength] = useState('');
  const [error, setError] = useState('');

  // Function to check password strength
  const checkPasswordStrength = (password) => {
    let strength = 'Weak';
    if (password.length > 8 && /[A-Z]/.test(password) && /\d/.test(password) && /[\W]/.test(password)) {
      strength = 'Strong';
    } else if (password.length > 6 && /[A-Z]/.test(password) && /\d/.test(password)) {
      strength = 'Medium';
    }
    setPasswordStrength(strength);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email already exists (using localStorage for simulation)
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const emailExists = registeredUsers.some((user) => user.email === formData.email);

    if (emailExists) {
      setError('This email is already registered!');
      return;
    }

    // Save user data
    registeredUsers.push(formData);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    // Show popup
    alert('User Registered Successfully!');

    // Redirect to Home page
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-indigo-600 p-4">
      <h2 className="text-4xl font-bold mb-6 text-white">Register</h2>
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-4"
      >
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded"
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Age" 
          value={formData.age} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded"
        />
        <input 
          type="text" 
          name="username" 
          placeholder="Username" 
          value={formData.username} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded"
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          value={formData.password} 
          onChange={handleChange} 
          required 
          className="w-full px-3 py-2 border rounded"
        />

        {/* Password strength display */}
        {formData.password && (
          <p className={`text-sm ${
            passwordStrength === 'Weak' ? 'text-red-500' :
            passwordStrength === 'Medium' ? 'text-yellow-500' :
            'text-green-500'
          }`}>
            Password Strength: {passwordStrength}
          </p>
        )}

        {/* Error display */}
        {error && (
          <p className="text-red-600 font-semibold">{error}</p>
        )}

        <button 
          type="submit" 
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
