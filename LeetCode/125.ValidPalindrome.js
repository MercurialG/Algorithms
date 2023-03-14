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
