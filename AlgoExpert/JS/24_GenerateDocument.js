// O(N + M) Time | O(c) Space - c - unique characters
function generateDocument(characters, document) {
  const hash = {};
  for (const ch of characters) {
    if (!(ch in hash)) hash[ch] = 0;
    hash[ch]++;
  }
  for (const ch of document) {
    if (!(ch in hash) || hash[ch] === 0) return false;
    hash[ch]--;
  }
  return true;
}
