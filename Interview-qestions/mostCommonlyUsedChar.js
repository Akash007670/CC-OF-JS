// Most commonly used character in a string.
// Write a function that takes a string and returns the character that is most commonly used in the string


function countMostCommonCharacters (str) {

  //Here we are initializing an object which will store the character and its count value
  let charCount = {}
  
  //Here we are counting the number of occurences of the character
  for(let i=0;i<str.length;i++) {
    let char = str[i];
    charCount[char] = (charCount[char] || 0) + 1
  }

  let maxCount = 0;
  let mostCommonChar = '';

  //finding the character who has maximum count
  for(let char in charCount) {
    if (charCount[char] > maxCount) {
      mostCommonChar = char;
      maxCount = charCount[char];
    }
  }
  return mostCommonChar
}


let resp = countMostCommonCharacters("abracadabra");

console.log(resp) // a is the most commonly used character here.
