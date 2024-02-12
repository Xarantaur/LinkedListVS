"use strict";

let headNode;
let tailNode;

const node1 = {
  prev: null,
  next: null,
  data: "A",
};

const node2 = {
  prev: null,
  next: null,
  data: "B",
};

const node3 = {
  prev: null,
  next: null,
  data: "E",
};
// node 1-2
node1.next = node2;
node2.prev = node1;
// node 2-3
node2.next = node3;
node3.prev = node2;

class LinkedList {
  constructor() {
    // test-code: change later
    this.head = node1;
    this.tail = node3;
  }

  dumpList() {
    let a_node = this.head;
    while (a_node != null) {
      console.log(`
      node: ${a_node.data}
      -----------
        prev: ${a_node.prev?.data}
        next: ${a_node.next?.data}
      `);
      // find den næste node
      a_node = a_node.next;
    }
  }

  // Functions:
  add(payload) {
    const newNode = {
      prev: null,
      next: null,
      data: payload,
    };
    // siger !- hvis ikke der er et head- på this- list så:
    if (!this.head) {
      // sæt head- på this- liste til at være newNode
      this.head = newNode;
      // og sæt tail- på this- liste til at være NewNode
      this.tail = newNode;
    } else {
      // siger den der kommer før den nye node skal være lige med den nuværende tail.
      newNode.prev = this.tail;
      // siger den næste node der kommer efter denne listes tail skal være lige med den nye node
      this.tail.next = newNode;
      // siger at denne listes tail skal være den nye node.
      this.tail = newNode;
    }
  }

  addFirst(payload) {
    const newNode = {
      prev: null,
      next: null,
      data: payload,
    };
    // siger !- hvis ikke der er et head- på this- list så :
    if (!this.head) {
      // sæt head- på this- liste til at være newNode
      this.head = newNode;
      // og sætter tail- på this. liste til at være newNode også. fordi hvis en Liste ikke har et Head - så er den per definition tom
      this.tail = newNode;
    } else {
      // siger at den node der kommer næstefter denne nye node skal være linkListens head. "newNode { prex: ..., next: Linkedlist.head}"
      newNode.next = this.head;
      // siger at den node der kommer før denne linkedLists.head skal være den nye node "node A { prev: newNode}"
      this.head.prev = newNode;
      // siger at den nuværende linkedlists.head skal være lige med den nye node. testList = new LinkedList{ head = newnode, tail: .....}
      this.head = newNode;
    }
  }

  removeLast() {
    // undersøger om der findes en tail / eller at listen er tom
    if (!this.tail) {
      console.log("der er ikke noget at fjerne.");
      return;
    }
    // undersøger om der kun er en node tilbage i listen.
    if (this.tail === this.head) {
      // hvis der kun er en node tilbage, ændres dens properties til null så der ikke er nogle referencer til den. og så er den "fjernet"
      this.head = null;
      this.tail = null;
      return;
    }
    // fjerner den sidste node ved at. give tail propertien af den sidst node til den næstsidste node
    this.tail = this.tail.prev;
    // og derefter fjerne referencen til den næste note.
    this.tail.next = null;
  }

  removeFirst() {
    //undersøger om der er et head.
    if (!this.head) {
      console.log("der er ikke nogen nodes i listen");
      return;
    }
    // hvis der kun er en node tilbage, fjernes ref. til denne og derved slettes denne.
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    // giver head propertie videre til den næste node i rækken.
    this.head = this.head.next;
    // tager den node der nu er head og fjerne dens prev. ref. og derved sletter den første i listen
    this.head.prev = null;
  }

  removeNode() {
    let currentNode = this.head;

    while (currentNode) {}
  }
}
// function addLast(payload) {}

function clear() {}
function get(index) {}
function indexOf(payload) {}
function insertAfter() {}
function insertBefore() {}
function first() {}
function remove(index) {}

//operators :
function insertAfterNode(payload, existingNode) {}
function insertBeforeNode(payload, existingNode) {}
function removeNode() {}
function nodeAt() {}
function swapNodes(nodeA, nodeB) {}

// dumb list til console:
function dumpList() {}

// start med definationerne , tegn Alting, udskriv hele tiden hele listen, lav en ting ad gangen.
const testList = new LinkedList();
console.log(testList);
