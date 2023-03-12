function invertBinaryTree(tree) {
  [tree.left, tree.right] = [tree.right, tree.left];
  if (tree.left) invertBinaryTree(tree.left);
  if (tree.right) invertBinaryTree(tree.right);
}
