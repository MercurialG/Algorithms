// O(NLog(N))

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
// O(S + T) Time | O(ch) Space
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  const hash = {};
  for (const ch of s) {
    if (!(ch in hash)) hash[ch] = 0;
    hash[ch]++;
  }
  for (const ch of t) {
    if (!(ch in hash) || hash[ch] === 0) return false;
    hash[ch]--;
  }
  return true;
};
