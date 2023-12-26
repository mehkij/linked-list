class LinkedList {
  constructor() {
    // Dummy head and tail for empty list
    this.head = new Node(-1);
    this.tail = this.head;
  };

  // Adds new node containing a value to the end of the list
  append(value) {
    if (this.head.value == -1 && this.size() == 2 && this.tail.value !== -1) {
      this.head = new Node(value);
      this.head.nextNode = this.tail;
    } else {
      this.tail.nextNode = new Node(value);
      this.tail = this.tail.nextNode;
    }
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
  head() {
    return this.head;
  };

  // Returns the last node in the list
  tail() {
    return this.tail;
  };

  // Returns the node at the given index
  at(index) {
    let currentNum = 0;
    let current = this.head;

    while(currentNum < index) {
      current = current.nextNode;
      currentNum++
    };
    
    return current;
  };

  // Removes the last element from the list
  pop(list) {
    let listSize = this.size(list);
    let previous = listSize - 1; // Gets the index of the node previous to the tail
    let currentNum = 1;
    let current = this.head;

    // Iterates over the object until we get to the node before the tail
    while (currentNum < previous) {
      current = current.nextNode;
      currentNum++
    };

    delete this.tail;
    current.nextNode = null;
    this.tail = current;
  };

  // Returns true if the passed value is within the list, otherwise returns false
  contains(value) {
    let current = this.head;

    if (this.head.value == value) {
      return true;
    } else {
      while (current.nextNode !== null) {
        current = current.nextNode;
        if (current.value == value) {
          return true;
        } else if (current.nextNode == null) {
          return false;
        }
      };
    };
  };

  // Returns the index of the node containing value, or null if not found
  find(value) {
    let current = this.head;
    let currentNum = 0;

    if (this.head.value == value) {
      return 0;
    } else {
      while (current.nextNode !== null) {
        current = current.nextNode;
        currentNum++;
        if (current.value == value) {
          return currentNum;
        } else if (current.nextNode == null) {
          return null;
        }
      };
    };
  };

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
people.append("Dude");
console.log(people);
console.log(people.size());
console.log(people.head);
console.log(people.tail);
console.log(people.at(2));
people.pop(people);
console.log(people);
console.log(people.contains('Mark'));
console.log(people.find("David"));
