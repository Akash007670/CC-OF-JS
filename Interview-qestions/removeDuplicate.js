//write a function to remove duplicates from an array.

let arr = [1,2,3,2,2,4,5,5,1,6];

function removeDuplicates (arr) {
  let newArr = new Set(arr); // Here dulicates would not be present.
  //   0: 1
  //  1: 2
  //  2: 3
  //  3: 4
  //  4: 5
  //  5: 6
  return arr.filter((item) => {
    if (newArr.has(item)) { // This will check if newArr has the duplicate or same item or not
      newArr.delete(item) // If it gets the same item then delete it.
      return true // This will keep the item in the array
    }
    return false; // Here dupicate value found and should not be keep in the array. 
  })
}

let res = removeDuplicates(arr);
console.log(res) // [1, 2, 3, 4, 5, 6]
