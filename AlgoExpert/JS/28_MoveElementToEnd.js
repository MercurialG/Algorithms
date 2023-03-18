// O(N) Time | O(1) Space
function moveElementToEnd(array, toMove) {
  let pointer1 = 0;
  let pointer2 = array.length - 1;
  while (pointer1 < pointer2) {
    if (array[pointer2] === toMove) {
      pointer2--;
    }
    if (array[pointer1] != toMove) {
      pointer1++;
    } else
      [array[pointer1], array[pointer2]] = [array[pointer2], array[pointer1]];
  }
  return array;
}
