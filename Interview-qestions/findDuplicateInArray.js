//
// 1. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true

// Example 2:

// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = function (nums) {
  let sortArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] === sortArr[i + 1]) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
