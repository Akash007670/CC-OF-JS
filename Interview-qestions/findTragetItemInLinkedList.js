//create linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

const a = new Node(10);
const b = new Node(20);
const c = new Node(30);
const d = new Node(40);
const e = new Node(50);

a.next = b;
b.next = c;
c.next = d;
d.next = e

function findLinkList(head, target) {
  //To find the target value we need to traverse the linked list

  let current = head;
  while(current !== null) {
    if (current.val === target) return true
    current = current.next
  }
  return false
}

let res = findLinkList(a, 10)
console.log(res) // returns true because 10 is there in linked list.

function getValueFromSpecificIndex (head, index) {
  let current = head;
  let count = 0;
  while(current !== null) {
    if (count === index) return current.val
    count += 1
    current = current.next
  }
  return null;
}

let resp = getValueFromSpecificIndex(a, 2) //Here a is the head and 2 is the index i want to find the value.
console.log(resp) //returns 30 

