exports.sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

exports.shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

exports.calculateDelay = (baseDelay, maxDelay, attempt) => {
  return Math.min(
    baseDelay * Math.pow(2, attempt),
    maxDelay
  );
};