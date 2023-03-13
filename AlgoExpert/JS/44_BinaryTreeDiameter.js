class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function getDiameter(tree, diameter) {
  if (!tree) return 0;

  const leftCount = getDiameter(tree.left, diameter);
  const rightCount = getDiameter(tree.right, diameter);
  diameter.max = Math.max(leftCount + rightCount, diameter.max);

  return 1 + Math.max(leftCount, rightCount);
}

function binaryTreeDiameter(tree) {
  const diameter = { max: -Infinity };
  getDiameter(tree, diameter);
  return diameter.max;
}
