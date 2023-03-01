// O(n) Time and Space

function branchSums(root, sum = 0, sums = []) {
  const currentSum = root.value + sum;
  if (!root.left && !root.right) {
    sums.push(currentSum);
  }
  if (root.left) {
    branchSums(root.left, currentSum, sums);
  }
  if (root.right) {
    branchSums(root.right, currentSum, sums);
  }
  return sums;
}
