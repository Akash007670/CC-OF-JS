// Longest String in an Array.
// Write a function that accepts an array of strings.
// Return the longest string.

function longestString (arr) {
  let longest = '';

  for (let i=0;i<arr.length;i++) {
    if(arr[i].length > longest.length) {
      longest = arr[i]
    }
  }
  return longest
}

let res = longestString(["hello", "kiwi", "apple", "buttermilk", "wash"])
console.log(res) //buttermilk
