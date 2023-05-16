//Write a function which rotate array by d places.

//Example 

//let arr = [1,2,3,4,5,6,7] and d=3;
//Then left rotated array will be
//[4,5,6,7,1,2,3]

function leftRotateArr(arr, d) {
  let rotation = d % arr.length;
  let arrLength = arr.length;

  //Taking Temp and store first d occurences.

  let temp = [];

  for(let i=0; i<rotation;i++) {
    temp.push(arr[i])
  }

  console.log(temp) // [1,2,3]

  //Now shifting by d places.

  for(let i = rotation;i<arrLength;i++) {
    arr[i-rotation] = arr[i]
  }

  //Putting back temp

  for(let i= arrLength - rotation; i<arrLength;i++) {
    arr[i] = temp[i-(arrLength - rotation)]
  }

  console.log(arr) // [4, 5, 6, 7, 1, 2, 3]
}

leftRotateArr([1,2,3,4,5,6,7], 3)
