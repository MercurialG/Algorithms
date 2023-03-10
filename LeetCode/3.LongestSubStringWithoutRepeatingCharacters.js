var lengthOfLongestSubstring = function (s) {
  const charSet = new Set();
  let left = 0;
  let length = 0;
  for (let right = 0; r < s.length; r++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[r]);
    length = Math.max(length, right - left + 1);
  }
  return length;
};
