// src/pages/MoodSetterPage.jsx

import React, { useState } from 'react';

function MoodSetterPage() {
  const [mood, setMood] = useState('');
  const [tips, setTips] = useState([]);

  const moodTipsData = {
    happy: [
      'Keep a gratitude journal.',
      'Share your happiness with others.',
      'Engage in creative activities.',
      'Spend quality time with loved ones.',
      'Practice mindfulness to stay present.',
      'Capture happy moments in photos.',
      'Help someone in need.',
      'Maintain a balanced lifestyle.',
      'Set new positive goals.',
      'Celebrate small achievements.'
    ],
    sad: [
      'Talk to a trusted friend.',
      'Engage in light physical activity.',
      'Listen to calming music.',
      'Practice deep breathing exercises.',
      'Maintain a regular sleep schedule.',
      'Spend time in nature.',
      'Express emotions through writing.',
      'Limit social media exposure.',
      'Seek professional help if needed.',
      'Remind yourself that sadness will pass.'
    ],
    angry: [
      'Take deep breaths and count to 10.',
      'Go for a walk or run.',
      'Practice progressive muscle relaxation.',
      'Engage in physical exercise.',
      'Write your feelings in a journal.',
      'Practice forgiveness.',
      'Talk calmly with someone you trust.',
      'Use humor to diffuse tension.',
      'Visualize a peaceful place.',
      'Develop problem-solving strategies.'
    ],
    anxious: [
      'Practice mindfulness meditation.',
      'Engage in controlled breathing.',
      'Limit caffeine and sugar intake.',
      'Create a calming bedtime routine.',
      'Break tasks into small steps.',
      'Challenge negative thoughts.',
      'Maintain a healthy diet.',
      'Do light exercise daily.',
      'Seek support from friends or family.',
      'Use grounding techniques (5-4-3-2-1).'
    ],
    neutral: [
      'Reflect on things you are grateful for.',
      'Set small goals for the day.',
      'Engage in a hobby or interest.',
      'Practice self-care.',
      'Maintain social connections.',
      'Listen to uplifting music.',
      'Organize your space.',
      'Try learning something new.',
      'Spend time outdoors.',
      'Plan something to look forward to.'
    ]
  };

  const handleMoodChange = (e) => {
    const selectedMood = e.target.value;
    setMood(selectedMood);

    if (moodTipsData[selectedMood]) {
      setTips(moodTipsData[selectedMood]);
    } else {
      setTips([]);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-8 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/images/mood-bg.jpg')" }}
    >
      <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-8 shadow-lg max-w-2xl w-full text-center text-black">
        <h2 className="text-3xl font-bold mb-6 text-purple-800">How are you feeling today?</h2>

        <select
          value={mood}
          onChange={handleMoodChange}
          className="w-full p-3 rounded-lg border border-purple-400 mb-6"
        >
          <option value="">Select your mood</option>
          <option value="happy">😊 Happy</option>
          <option value="sad">😢 Sad</option>
          <option value="angry">😡 Angry</option>
          <option value="anxious">😟 Anxious</option>
          <option value="neutral">😐 Neutral</option>
        </select>

        {mood && tips.length > 0 && (
          <div className="mt-4 text-left">
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Tips for {mood} mood:</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MoodSetterPage;
