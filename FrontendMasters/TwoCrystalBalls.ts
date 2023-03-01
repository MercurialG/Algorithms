const twoCrystalBalls = (breaks: boolean[]) => {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));

  let i = jumpAmount; // Set step to sqr root of N
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      break;
    }
  }

  i -= jumpAmount;
  for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
    if (breaks[i]) return i;
  }
  return -1;
};
