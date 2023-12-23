class LinkedList {
  constructor() {
    this.head = new Node(-1);
    this.tail = this.head;
  };

  // Adds new node containing a value to the end of the list
  append(value) {
    this.tail.nextNode = new Node(value);
    this.tail = this.tail.nextNode;
  };

  // Adds a new node containing a value to the start of the list
  prepend(value) {};

  // Returns the total number of nodes in the list
  size() {};

  // Returns the first node in the list
  head() {};

  // Returns the last node in the list
  tail() {};

  // Returns the node at the given index
  at(index) {};

  // Removes the last element from the list
  pop() {};

  // Returns true if the passed value is within the list, otherwise returns false
  contains(value) {};

  // Returns the index of the node containing value, or null if not found
  find(value) {};

  // Represents LinkedList objects as strings. Format: (value) -> (value) -> (value) -> null
  toString() {};

  // Extra Credit:
  
  //Inserts a new node with the provided value at the given index
  inserAt(value, index) {};

  // Removes the node at the given index
  removeAt(index) {};
};

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  };
};