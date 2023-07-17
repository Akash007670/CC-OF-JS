//write a function to acheive this functionality

//counter.increment(10).decrement(3).get() ---> 7


function counter () {
  return {
    value: 0,// we will create initial counter value
    increment (num) {
      this.value += num  //incremnt the number by given input value
      return this // we will return this so that we can chain function according to the feature
    },
    decrement (num) {
      this.value -= num //decrement the num that has passed here
      return this // return this to chain the function 
    },
    get () {
      return this.value // we will return the value here.
    }
  }
}

let res = counter(); // call the counter function 
let result = res.increment(10).decrement(3).get() // Do all the chaining here 
console.log(result) // 7 is the output
