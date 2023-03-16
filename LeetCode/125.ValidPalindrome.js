var isPalindrome = function (s) {
  let buff = s.split("");
  let newStr = [];
  for (char of buff) {
    if (/^[a-z0-9]+$/gi.test(char)) {
      newStr.push(char.toLowerCase());
    }
  }
  return newStr.reverse().join("") === newStr.join("");
};

var isPalindrome = function (s) {
  let splitted = s.toLowerCase().split("");
  let right = splitted.length - 1;
  for (let left = 0; left < splitted.lenght; left++) {
    if (/^[a-z0-9]/gi.test(splitted[left])) left++;
    if (/^[a-z0-9]/gi.test(splitted[right])) right--;
    if (splitted[left] === splitted[right]) {
      left++;
      right--;
    } else return false;
  }
  return true;
};
