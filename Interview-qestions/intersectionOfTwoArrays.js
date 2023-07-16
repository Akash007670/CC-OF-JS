//write a function to find intersection between two arrays

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 4, 5, 10, 12];

function findIntersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

function findIntersection2(arr1, arr2) {
  const newArr = new Set(arr1);
  return arr2.filter((item) => newArr.has(item));
}

let res = findIntersection(arr1, arr2);
console.log("First Method -->", res); // [2,4,5]

let resp = findIntersection2(arr1, arr2);
console.log("Second Method -->", resp); // [2,4,5]

