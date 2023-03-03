class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
  //   O(V+E) Time | O(V) Space    V-Vertice , E - Edge
  depthFirstSearch(array) {
    array.push(this.name);
    this.children.forEach((child) => child.depthFirstSearch(array));
    return array;
  }
}
