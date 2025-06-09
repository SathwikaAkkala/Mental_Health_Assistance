import React from 'react';

const emojis = [
  { name: 'Happy', src: '/images/emojis/happy.png' },
  { name: 'Sad', src: '/images/emojis/sad.png' },
  { name: 'Anxious', src: '/images/emojis/anxious.png' },
  { name: 'Angry', src: '/images/emojis/angry.png' },
  { name: 'Calm', src: '/images/emojis/calm.png' },
];

function EmojiSection() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {emojis.map((emoji) => (
        <div key={emoji.name} className="text-center">
          <img src={emoji.src} alt={emoji.name} className="w-20 h-20 mx-auto" />
          <p className="mt-2 text-lg font-medium">{emoji.name}</p>
        </div>
      ))}
    </div>
  );
}

export default EmojiSection;
