import React, { useState } from 'react';
import axios from 'axios';
import { predictMood } from '../utils/moodPredictor';

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);
    setInput('');
    setLoading(true);

    const botReply = await generateBotReply(input);
    const botMessage = { sender: 'bot', text: botReply };
    setMessages(prev => [...prev, botMessage]);
    setLoading(false);

    const mood = predictMood(input);
    console.log("Predicted Mood:", mood);
  };

  const generateBotReply = async (text) => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: text }],
          max_tokens: 100,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer YOUR_OPENAI_API_KEY`,
          },
        }
      );

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('GPT API Error:', error);
      return "Oops! I couldn't respond now. Please try again.";
    }
  };

  return (
    <div className="w-full max-w-lg">
      <div className="h-96 overflow-y-auto p-4 border rounded bg-white mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-2 text-${msg.sender === 'user' ? 'right' : 'left'}`}>
            <span className={`inline-block p-2 rounded ${msg.sender === 'user' ? 'bg-blue-200' : 'bg-green-200'}`}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <div className="text-center text-gray-500">Typing...</div>}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-grow p-2 border rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600">Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
