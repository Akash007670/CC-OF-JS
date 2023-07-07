//write a function which returns max element from every subarray in the array.

let arr = [
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]

//here from first subarray [4,5,1,3] --> 5 is the max element
//here from second subarray [13,27,18,26] --> 27 is the max element
//here from third subarray [32,35,37,39] --> 39 is the max element
//here from fourth subarray [1000,1001,857,1] --> 1001 is the max element

// so the final array will be [5,27,39,1001]

function largestOfFour(arr) {
  let results = []
  for(let i=0;i<arr.length;i++) {
    let max = arr[i][0]

    for(let j=1;j<arr[i].length;j++) {
      if(arr[i][j] > max) {
        max = arr[i][j]
      }
    }
    // results.push(max)  or
    results[i] = max
  }
  return results
}

let resp = largestOfFour(arr);
console.log(resp) // [5, 27, 39, 1001] will be returned.
