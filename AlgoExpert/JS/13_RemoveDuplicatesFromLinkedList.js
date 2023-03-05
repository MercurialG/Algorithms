class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(N) Time | O(1) Space
function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;
  let nextDistinct = current.next;
  while (current != null) {
    nextDistinct = current.next;
    while (nextDistinct != null && nextDistinct.value == current.value) {
      nextDistinct = nextDistinct.next;
    }
    current.next = nextDistinct;
    current = nextDistinct;
  }
  return linkedList;
}

// O(N) Time | O(1) Space
function removeDuplicatesFromLinkedList(linkedList) {
  let current = linkedList;

  while (current.next) {
    if (current.value === current.next.value) {
      current.next = current.next.next;
    } else current = current.next;
  }
  return linkedList;
}
