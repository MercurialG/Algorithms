// O(N) Time | O(1) Space
function isPalindrome(string) {
  return string === string.split("").reverse().join("") ? true : false;
}
// O(N) Time | O(1) Space
function isPalindrome(string) {
  if (string.length === 1) return true;
  let left = 0;
  let right = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else return false;
    if (left === right || right - left == 1) return true;
  }
  return false;
}
// O(N) Time | O(1) Space
function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    if (string[left] != string[right]) return false;
    left++;
    right--;
  }
  return true;
}

// O(N) TS
function isPalindrome(string) {
  let reversedChars = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedChars.push(string[i]);
  }
  return string == reversedChars.join("");
}
// O(N) TS
function isPalindrome(string, i = 0) {
  j = string.length - 1 - i;
  return i >= j ? true : string[i] == string[j] && isPalindrome(string, i + 1);
}
