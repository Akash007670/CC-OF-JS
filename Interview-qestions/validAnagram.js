//write a function to find if the strings are anagram or not ?


const isAnagram =  function (str1, str2) {
  let newStr1 = str1.split('').sort().join(''); //Convert the string to array and sort it then again convert it to string
  let newStr2 = str2.split('').sort().join('');
  return newStr1 === newStr2 ? "Anagram" : "Not Anagram" //check if both are same then its anagram and if not then they are not aganagram
}

let resp = isAnagram("hello", "olleh")
console.log(resp) // Anagram
