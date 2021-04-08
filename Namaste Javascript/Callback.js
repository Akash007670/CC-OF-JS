//What is Callback Function in javascript

setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

//JavaScript is a synchronous and single-threaded language.

//Blocking the main thread
//Power of Callbacks?
