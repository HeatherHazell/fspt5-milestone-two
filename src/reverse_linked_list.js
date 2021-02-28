/*------------------
Finish the "reverseList" method.
This method should reverse the linkedList
so that the head and tail switch, and all
pointers move into the opposite direction.

Hint: The code has already been started
for you. DRAW THIS OUT and look at the test for
the example. You don't need to use the insertAfter
method in your solution.

IMPORTANT: If you want to try this exercise without
the help of the pseudo code that's already written, 
remove all the comments from the reverseList() method and
start from scratch! If you do so, make sure to let
your teacher know.
------------------*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  printValues() {
    let cursor = this.head;
    const values = [];
    while (cursor.next) {
      values.push(cursor.value);
      cursor = cursor.next;
    }
    values.push(cursor.value);
    console.log(values);
  }

  insertAfter(refNodeValue, val) {
    let currentNode = this.head;

    while (currentNode.value !== refNodeValue) {
      if (!currentNode.next) {
        return "No node found.";
      }
      currentNode = currentNode.next;
    }

    if (!currentNode.next) {
      this.tail.next = new Node(val);
      this.tail = this.tail.next;
    } else {
      let previousNext = currentNode.next;
      currentNode.next = new Node(val);
      currentNode.next.next = previousNext;
    }
  }

  reverseList() {
    // # start
    //     a -> b -> c -> d
    //     this.head = a
    //     this.tail = d
    //
    // # after reverseList():
    //     d -> c -> b -> a
    //     this.head = d
    //     this.tail = a

    //  using a "cursor" to say, all variables around me are relative to the cursory
    let cursor = this.head; // a
    let next = cursor.next; // b
    let previous = null; // null

    while (next) {
      // b
      cursor.next = previous; // a.next = null
      previous = cursor; // previous = a
      cursor = next; // cursor = b
      next = cursor.next; // next = c
    }

    cursor.next = previous;

    let newTail = this.head;
    let newHead = this.tail;
    this.head = newHead;
    this.tail = newTail;
  }
}

// const test = new LinkedList('a')
// test.insertAfter('a', 'b')
// test.insertAfter('b', 'c')
// test.insertAfter('c', 'd')
// test.printValues()

// test.reverseList()
// test.printValues()

module.exports = LinkedList;
