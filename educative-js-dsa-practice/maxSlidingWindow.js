// Find Maximum in Sliding Window
// Given an integer array and a window of size w, find the current maximum value in the window as it slides through the entire array.
// Note: If the window size is greater than the array size, we will consider the entire array as a single window.

let findMaxSlidingWindow = function (nums, windowSize) {
  let result = []; // This is result array where maximum values will be stored while moving through the window size array.

  //Return Empty list
  if (nums.length === 0) {
    return result;
  }

  // If window size is greater than nums array size

  if (windowSize > nums.length) {
    windowSize = nums.length; // making the window size equal to nums array size.
  }

  //creating an window array (doubly linked list) to store the indices of the array.
  let window = [];
  for (let i = 0; i < windowSize; i++) {
    //for every element remove the smallest number
    while (nums.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }
    window.push(i); // pushing the current element
  }
  result.push(nums[window[0]]);

  //Now for every window size we need to find the max element
  for (let i = windowSize; i < nums.length; i++) {
    //remove all numbers that are smaller than current number.
    while (nums.length > 0 && nums[i] >= nums[window[window.length - 1]]) {
      window.pop();
    }
    // Remove first index from the window deque if
    // it doesn't fall in the current window anymore
    if (window.length > 0 && window[0] <= i - windowSize) {
      window.shift(); // shift() removes first element from the array. [1,2,3].shift() will give [2,3]
    }
    // Add current element at the back of the queue
    window.push(i);
    result.push(nums[window[0]]);
  }
  return result;
};

console.log(findMaxSlidingWindow([5, 6, 3, 4, 5, 6, 7, 8, 9, 10], 3));

//window = 3
//[5,6,3] -> 6
//[6,3,4] -> 6
//[3,4,5] -> 5
//[4,5,6] -> 6
//[5,6,7] -> 7
//[6,7,8] -> 8
//[7,8,9] -> 9
//[8,9,10] -> 10

// result array will be [6,6,5,6,7,8,9,10]
