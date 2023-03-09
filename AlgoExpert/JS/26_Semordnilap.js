function semordnilap(words) {
  const wordsSet = new Set();
  const output = [];
  for (const word of words) {
    const palindrome = word.split("").reverse().join("");
    if (wordsSet.has(palindrome)) output.push([word, palindrome]);
    else wordsSet.add(word);
  }

  return output;
}

function semordnilap(words) {
  let hash = {};
  let output = [];

  words.forEach((word) => {
    let reverse = word.split("").reverse().join("");
    if (hash[reverse]) {
      output.push([word, reverse]);
      hash[reverse] = null;
    } else {
      hash[word] = true;
    }
  });
  return output;
}
