function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let minNumIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minNumIdx] > array[j]) {
        minNumIdx = j;
      }
    }
    [array[i], array[minNumIdx]] = [array[minNumIdx], array[i]];
  }
  return array;
}
