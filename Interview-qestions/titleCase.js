//write a function that updates the first character to uppercase and the rest of the characters will be lowercase
function titleCase(str) {
 let newStr = str.split(" "); //here i have change the str to an array using split method
 let updatedTitle = []; //created a temp array to store the updated str.
 for(let val in newStr) {
  updatedTitle[val] = newStr[val][0].toUpperCase() + newStr[val].slice(1).toLowerCase()
 }
 return updatedTitle.join(" ")
}

let res = titleCase("I'm a little tea pot");
console.log(res) //->  I'm A Little Tea Pot 

