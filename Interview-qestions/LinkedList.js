//create linked list

class Node {
  constructor(val) {
    this.val = val; // This is the value we will pass 
    this.next = null // This represent next target value and if its not present then by default it will be null.
  }
}

const a = new Node(1); // Here we created new node with value 1 in it and similar for all down.
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b //here we linked our first node a with node b
b.next = c // node b to c
c.next = d //node c to d 

//This will be represented as A --> B --> C --> D --> null

//Now traversing the linked list.

const printLinkedList = (head) => {
  let current = head;
  let temp = [] //For storing all the values in array.
  let sum = 0 //To find the total sum of linked list
  while(current !== null) {
    console.log(current.val)
    temp.push(current.val)
    sum += current.val
    current = current.next;
  }
  console.log(temp, sum) // --> ["A","B","C","D"], 10

  //Now writing the same code above using recursion

  //First setup a base case which is finding the null
  // if (head === null) return
  // console.log(head.val);
  //Now call the same function with next value in it.
  // printLinkedList(head.next)
}

printLinkedList(a)
