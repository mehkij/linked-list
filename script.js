class LinkedList {
  constructor() {
    // Dummy head and tail for empty list
    this.head = new Node(-1);
    this.tail = this.head;
  };

  // Adds new node containing a value to the end of the list
  append(value) {
    this.tail.nextNode = new Node(value);
    this.tail = this.tail.nextNode;
  };

  // Adds a new node containing a value to the start of the list
  prepend(value) {
    if (this.head.value == -1) {
      this.head.value = value;
    } else {
      let next = this.head;
      this.head = new Node(value);
      this.head.nextNode = next;
    }
  };

  // Returns the total number of nodes in the list
  size() {
    let current = this.head;
    let i = 1; // Initial value should always be 1, since we're starting the count from the head
    
    // If both values are dummy nodes, then there are only 2 nodes in the list (the head and the tail)
    if (this.head.value == -1 && this.head.next == null && this.tail.value == -1) {
      return 2;
    } else {
      while (current.nextNode !== null) {
        current = current.nextNode;
        i++
      };
      return i;
    }
  };

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
  // Set the initial value of the pointer equal to null
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  };
};

const people = new LinkedList();
people.prepend("Mark");
people.prepend("John");
people.prepend("Stacy");
people.append("Nick");
people.append("David");
console.log(people);
console.log(people.size());