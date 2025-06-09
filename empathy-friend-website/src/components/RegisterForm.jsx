// src/components/RegisterForm.jsx
import React, { useState } from 'react';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    name: '',
    age: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered with email: ${formData.email}`);
    localStorage.setItem('registeredEmail', formData.email);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
      {['username', 'password', 'name', 'age', 'email'].map((field) => (
        <div key={field} className="mb-4">
          <input
            type={field === 'password' ? 'password' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600">Register</button>
    </form>
  );
}

export default RegisterForm;
