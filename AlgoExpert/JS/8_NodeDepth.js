// Iterative O(N) Space | O(h) Time

function nodeDepthsIterative(root, depth = []) {
  let sumOfDepths = 0;
  let stack = [{ node: root, depth: 0 }];
  while (stack.length > 0) {
    const nodeInfo = stack.pop();
    let node = nodeInfo["node"],
      depth = nodeInfo["depth"];
    if (!node) continue;
    sumOfDepths += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return sumOfDepths;
}

// Iterative O(N) Space | O(h) time
function nodeDepthsRecursive(root, depth = 0) {
  !root
    ? 0
    : depth +
      nodeDepths(root.left, depth + 1) +
      nodeDepths(root.right, depth + 1);
}
