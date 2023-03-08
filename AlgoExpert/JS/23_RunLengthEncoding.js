// O(N) ST

function runLengthEncoding(string) {
  let counter = 1;
  let output = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1] && counter < 9) {
      counter++;
    } else {
      output.push(`${counter}${string[i]}`);
      counter = 1;
    }
  }
  return output.join("");
}

//O(N^2) time | O(N) Space
function runLengthEncoding(string) {
  let count = 1;
  let output = "";
  let currChar = null;

  for (let i = 0; i < string.length; i++) {
    currChar = string[i];
    if (currChar === string[i + 1] && count < 9) {
      count++;
    } else {
      output = `${output}${count}${currChar}`;
      count = 1;
    }
  }
  return output;
}
