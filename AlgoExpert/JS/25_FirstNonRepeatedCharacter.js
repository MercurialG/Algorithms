function firstNonRepeatingCharacter(string) {
  const hash = {};
  for (const ch of string) {
    if (!(ch in hash)) hash[ch] = 0;
    hash[ch]++;
  }
  for (let idx = 0; idx < string.length; idx++) {
    if (hash[string[idx]] === 1) return idx;
  }
  return -1;
}
