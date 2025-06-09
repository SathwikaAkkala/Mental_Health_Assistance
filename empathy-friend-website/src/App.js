// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Chatbot from './pages/Chatbotpage';
import MoodSetter from './pages/MoodSetterPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/moodsetter" element={<MoodSetter />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
