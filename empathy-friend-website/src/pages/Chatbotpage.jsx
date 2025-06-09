// src/pages/Chatbotpage.jsx
import React, { useState } from 'react';

function Chatbotpage() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim() === '') return;

    const newMessages = [...messages, { text: input, type: 'user' }];
    setMessages(newMessages);
    setInput('');

    // Show typing animation
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const botReply = {
        text: generateBotReply(input),
        type: 'bot',
      };

      setMessages((prevMessages) => [...prevMessages, botReply]);
      setIsTyping(false);
    }, 1500); // 1.5 seconds typing delay
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  // Simple emotional response system
  const generateBotReply = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    if (lowerInput.includes('sad') || lowerInput.includes('depressed')) {
      return "I'm really sorry to hear that. Remember, tough times don't last forever — you're stronger than you think. 🌟";
    } else if (lowerInput.includes('happy') || lowerInput.includes('good')) {
      return "That's wonderful! I'm happy to hear you're feeling good. Keep shining! ✨";
    } else if (lowerInput.includes('angry') || lowerInput.includes('frustrated')) {
      return "It's okay to feel angry sometimes. Try taking deep breaths and give yourself some space. I'm here for you. 💛";
    } else if (lowerInput.includes('anxious') || lowerInput.includes('worried')) {
      return "Anxiety can be tough. Try grounding techniques like focusing on your breath or surroundings. You've got this. 🌈";
    } else if (lowerInput.includes('lonely') || lowerInput.includes('alone')) {
      return "You are not alone. I'm here to listen. And remember, there are people who care about you deeply. 🤗";
    } else {
      return "Thank you for sharing. I'm always here to listen and support you. 💬 How else are you feeling today?";
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-8"
      style={{ backgroundImage: "url('/images/chatbot-bg.jpg')" }}
    >
      <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">AI-Powered Emotional Friend 🤗</h2>

      {/* Chatbox */}
      <div
        className="w-full max-w-4xl h-[600px] overflow-y-auto border border-white rounded-lg 
                   bg-white bg-opacity-30 backdrop-blur-md p-6 mb-6 shadow-xl"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-3 rounded-lg text-lg ${
              msg.type === 'user'
                ? 'bg-purple-200 text-right'
                : 'bg-green-200 text-left'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {/* Typing animation */}
        {isTyping && (
          <div className="p-3 my-3 rounded-lg bg-green-200 text-left animate-pulse text-lg">
            Typing...
          </div>
        )}
      </div>

      {/* Input */}
      <div className="flex w-full max-w-4xl space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Share how you're feeling..."
          className="flex-grow px-5 py-3 border border-gray-300 rounded-lg text-lg"
        />
        <button
          onClick={handleSend}
          className="bg-purple-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbotpage;
