// Longest String in an Array.
// Write a function that accepts an array of strings.
// Return the longest string.


//The intuition to solve this problem is to take an empty string variable and then check if the array of strings which you are looping has greater length.
//Then update the length with the empty string variable.

function longestString (arr) {
  let longest = ''; //Here i've taken the empty string variable named longest.

  for (let i=0;i<arr.length;i++) { //Looping the array till last item.
    if(arr[i].length > longest.length) { //checking the array item has greater length than longest length variable
      longest = arr[i] //If yes then update it will greater value which contains the string itself.
    }
  }
  return longest // Then return the longest string itself.
}


//Here how this will work 

// 1. when looped first hello string will be encountered which has 5 then longest will be updated to 0 --->  5.
// 2. kiwi has length 4 and it is less than previous updated value which was 5. so no update here.
// 3. apple has length 5 so no update because 5 is not greater than 5.
// 4. buttermilk has length 10 then update longest  to 5 ---> 10.
// 5. wash has length 4 which is lesser than 10. so no update.

let res = longestString(["hello", "kiwi", "apple", "buttermilk", "wash"])
console.log(res) //buttermilk
