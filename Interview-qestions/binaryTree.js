//create binary tree

//Create class node which takes value and pointer for left and right child nodes
class Node {
  constructor(val) {
    this.val = val; //value
    this.left = null; //left child
    this.right = null; //right child
  }
}

//creating node values 
const a = new Node('A')
const b = new Node('B')
const c = new Node('C')
const d = new Node('D')
const e = new Node('E')
const f = new Node('F')

//Attaching left/right node to parent node

a.left = b; //Here a is topmost parent node and it's left child is b
a.right = c; //Here a is topmost parent node and it's right child is c

//This will look like
//                      A  (parent node or root node)
//                     / \
//  (left child node) B   C (right child node)

//Adding more child nodes.
b.left = d;
b.right = e;
c.right = f;

// Final structure of binary tree will look like.

//            A
//           / \
//          B   C
//         / \   \
//        D   E   F

//Now Traversing Binary Tree using Depth first Traversal

function depthFirstTraversal (root) {
  if (root === null) return [] // If root is null then return an empty array
  const stack = [root]; //I've initialized an stack which takes root
  let temp = [] //to store the values of nodes once traversed
  while(stack.length > 0) {
    const current = stack.pop();
    temp.push(current.val)
    if (current.right) { //only push item if there is one
      stack.push(current.right)
    }
    if (current.left) {
      stack.push(current.left)
    }
  }
  return temp
}

let res = depthFirstTraversal(a);
console.log(res); // This will give us preorder traversal ["A", "B", "D", "E", "C", "F"]
