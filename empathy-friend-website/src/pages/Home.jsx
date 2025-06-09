// src/pages/Home.jsx
import React from 'react';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/home-bg.jpg')" }}>
      <main className="flex-grow flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Welcome to Your Emotional Safe Space</h2>
        <p className="text-lg text-white max-w-xl drop-shadow-md">
          Connect with our AI-powered chatbot to share your thoughts and receive uplifting support. 
          Explore mood tracking and get helpful tips to enhance your mental well-being.
        </p>
      </main>
    </div>
  );
}

export default Home;
