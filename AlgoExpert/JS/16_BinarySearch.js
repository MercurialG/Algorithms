function binarySearch(array, target) {
  let left = 0;
  let right = array.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) return mid;
    else if (array[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// O(Nlog(N)) Time | O(1) Space

function binarySearch(array, target, left = 0, right = array.length - 1) {
  if (left > right) return -1;

  const mid = Math.floor((left + right) / 2);
  if (target === array[mid]) return mid;
  else if (target < array[mid])
    return binarySearch(array, target, left, mid - 1);
  else return binarySearch(array, target, mid + 1, right);
}
