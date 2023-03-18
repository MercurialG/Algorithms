// O(N) Time | O(1) Space
function isMonotonic(array) {
  let increasing = true;
  let decreasing = true;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) decreasing = false;
    if (array[i] < array[i - 1]) increasing = false;
  }
  return increasing || decreasing;
}

function isMonotonic(array) {
  if (array[0] < array[1] || array[1] < array[2] || array[2] < array[3]) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) return false;
    }
  } else if (
    array[0] > array[1] ||
    array[1] > array[2] ||
    array[2] > array[3]
  ) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[i + 1]) return false;
    }
  }
  return true;
}
