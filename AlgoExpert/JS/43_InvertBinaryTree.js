// O(N) Time | O(D) - space - d is depth

function invertBinaryTree(tree) {
  [tree.left, tree.right] = [tree.right, tree.left];
  if (tree.left) invertBinaryTree(tree.left);
  if (tree.right) invertBinaryTree(tree.right);
}

// O(N) Time | O(N) Space
// But in js shift() is O(N) operation also

function invertBinaryTree(tree) {
  const queue = [tree];
  while (queue.length) {
    const current = queue.shift();
    if (!current) continue;
    [current.left, current.right] = [current.right, current.left];
    queue.push(current.left);
    queue.push(current.right);
  }
}

// O(N) Time | O(N) Space
// way to make queue O(1)
function invertBinaryTree(tree) {
  let queue = [tree];
  let pointer = 0;
  let current;
  while (pointer < queue.length) {
    current = queue[pointer];
    let temp = current.left;
    current.left = current.right;
    current.right = temp;
    current.left && queue.push(current.left);
    current.right && queue.push(current.right);
    pointer++;
  }
  return tree;
}
