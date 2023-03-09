class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  // O(V+E) Time | O(V) Space - V - verticies, E - edges
  breadthFirstSearch(array) {
    const queue = [this];
    let currentNode = null;
    while (queue.length > 0) {
      currentNode = queue.shift();
      array.push(currentNode.name);
      currentNode.children.forEach((child) => queue.push(child));
    }
    return array;
  }

  breadthFirstSearch(array = []) {
    const nodes = [this];
    while (nodes.length) {
      const currentNode = nodes.shift();
      array.push(currentNode.name);
      nodes.push(...currentNode.children);
    }
  }
}
