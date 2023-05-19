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

