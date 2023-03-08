// O(N) TS
function caesarCipherEncryptor(string, key) {
  let newLetters = [];
  let newKey = key % 26;

  const getNewLetter = (letter, key) => {
    let newLetterCode = letter.charCodeAt() + newKey;
    return newLetterCode <= 122
      ? String.fromCharCode(newLetterCode)
      : String.fromCharCode(96 + (newLetterCode % 122));
  };
  for (let i = 0; i < string.length; i++) {
    newLetters.push(getNewLetter(string[i], newKey));
  }
  return newLetters.join("");
}

function caesarCipherEncryptor(string, key) {
  let newLetters = [];
  let newKey = key % 26;
  const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

  const getNewLetter = (letter, key, alphabet) => {
    let newLetterCode = alphabet.indexOf(letter) + newKey;
    return newLetterCode <= 25
      ? alphabet[newLetterCode]
      : alphabet[newLetterCode % 26];
  };
  for (let i = 0; i < string.length; i++) {
    newLetters.push(getNewLetter(string[i], newKey, alphabet));
  }
  return newLetters.join("");
}
