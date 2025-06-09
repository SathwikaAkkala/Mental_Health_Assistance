export const predictMood = (text) => {
  const happyWords = ['happy', 'joy', 'good', 'great', 'excited'];
  const sadWords = ['sad', 'depressed', 'bad', 'down'];
  const anxiousWords = ['anxious', 'nervous', 'worried'];
  const angryWords = ['angry', 'mad', 'furious'];
  const calmWords = ['calm', 'relaxed', 'peaceful'];

  const lowerText = text.toLowerCase();

  if (happyWords.some((word) => lowerText.includes(word))) return 'Happy';
  if (sadWords.some((word) => lowerText.includes(word))) return 'Sad';
  if (anxiousWords.some((word) => lowerText.includes(word))) return 'Anxious';
  if (angryWords.some((word) => lowerText.includes(word))) return 'Angry';
  if (calmWords.some((word) => lowerText.includes(word))) return 'Calm';

  return 'Neutral';
};
