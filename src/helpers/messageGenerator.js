const messages = [
  "Hello everyone!", "What's up?", "How's it going?", "Nice stream!",
  "Great content!", "LOL 😂", "Awesome!", "Keep it up!", "Good job!",
  "Who else is here?", "This is fun!", "Love this!", "Let's go!",
  "Any updates?", "Good vibes only!", "Cool stuff!", "Amazing!",
  "Big fan here!", "Shoutout please!", "Nice video!", "So true!",
  "Exactly!", "Agreed!", "Nice explanation!", "Fantastic work!",
  "Superb!", "This is great!", "Haha, nice!", "Interesting point!",
  "Very helpful!", "Brilliant!", "Can't stop watching!", "Thanks!",
  "Much appreciated!", "Learning a lot!", "This is awesome!", "🔥🔥🔥",
  "So funny!", "Informative!", "Nice tips!", "Well explained!",
  "Clear and concise!", "Totally relatable!", "That was cool!",
  "Just wow!", "Keep rocking!", "Epic!", "This made my day!",
  "Respect!", "Insane quality!", "Top notch!"
];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

// Example usage:
console.log(getRandomMessage());
export default getRandomMessage;