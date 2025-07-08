function generateBookTitle(topic) {
  const titles = [
    `The Secrets of ${topic}`,
    `Mastering ${topic}`,
    `Exploring the Depths of ${topic}`,
    `A Comprehensive Guide to ${topic}`,
    `Understanding ${topic} in Modern Times`
  ];
  return titles[Math.floor(Math.random() * titles.length)];
}

function generateChapters(topic) {
  const chapters = [
    `Introduction to ${topic}`,
    `The History of ${topic}`,
    `${topic} Today`,
    `Future Trends in ${topic}`,
    `Conclusion: Embracing ${topic}`
  ];
  // Randomly select some chapters
  const shuffledChapters = chapters.sort(() => 0.5 - Math.random());
  const selectedChapters = shuffledChapters.slice(0, Math.floor(Math.random() * chapters.length) + 1);
  return selectedChapters;
}

function generateBackCoverText(topic) {
  return `Dive into the fascinating world of ${topic}. This book provides an insightful exploration of its many dimensions, including its history, contemporary relevance, and future prospects. Perfect for enthusiasts and newcomers alike, this guide serves as your compass through the complexities of ${topic}.`;
}