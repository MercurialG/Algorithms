// O(N) Time | O(D) Space (Depth)
function productSum(array, depth = 1) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += productSum(array[i], depth + 1);
    } else {
      sum += array[i];
    }
  }
  return sum * depth;
}

function productSum(array, depth = 1) {
  const sum = array.reduce((acc, el) => {
    if (Array.isArray(el)) return acc + productSum(el, depth + 1);
    return acc + el;
  }, 0);
  return sum * depth;
}
