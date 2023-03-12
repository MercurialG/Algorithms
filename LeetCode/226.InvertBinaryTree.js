var invertTree = function (root) {
  if (!root) return null;
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};
