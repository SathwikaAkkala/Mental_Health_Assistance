// src/components/MoodSetter.jsx
import React, { useState } from 'react';

function MoodSetter() {
  const [mood, setMood] = useState('');

  const detectMood = () => {
    // For now → simple mock logic → later integrate TensorFlow
    const moods = ['Happy', 'Sad', 'Anxious', 'Angry', 'Calm'];
    const randomMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(randomMood);
  };

  return (
    <div className="text-center">
      <button onClick={detectMood} className="bg-green-500 text-white px-6 py-2 rounded mb-4 hover:bg-green-600">Detect Mood</button>
      {mood && (
        <div className="text-xl font-bold">
          Current Mood: <span className="text-purple-700">{mood}</span>
          <div className="mt-4 text-md">
            {mood === 'Happy' && 'Keep smiling! Spread the joy!'}
            {mood === 'Sad' && 'It\'s okay to feel sad. Let\'s talk it out.'}
            {mood === 'Anxious' && 'Take deep breaths. You\'ve got this!'}
            {mood === 'Angry' && 'Let\'s calm down together.'}
            {mood === 'Calm' && 'Great! Enjoy this peace.'}
          </div>
        </div>
      )}
    </div>
  );
}

export default MoodSetter;
