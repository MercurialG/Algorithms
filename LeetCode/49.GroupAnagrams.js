/* Time O(N * K) | Space O(N * K) */
var groupAnagrams = (words, map = new Map()) => {
  if (!words.length) return [];
  groupWords(words, map);
  return [...map.values()];
};

var groupWords = (words, map) => {
  for (const original of words) {
    const hash = getHash(original);
    const values = map.get(hash) || [];

    values.push(original);
    map.set(hash, values);
  }
};

const getHash = (word) => {
  const frequency = new Array(26).fill(0);

  for (const char of word) {
    const charCode = getCode(char);
    frequency[charCode]++;
  }
  return buildHash(frequency);
};

const getCode = (char) => char.charCodeAt(0) - "a".charCodeAt(0);

const buildHash = (frequency) => frequency.toString();
