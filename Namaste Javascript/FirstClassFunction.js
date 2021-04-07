a(); //Here hoisting is used and will not throw an error
//b(); //Here hoisting is used too but it will throw an error
//This is the diffrence b/w Function statement and Function Expression

//Function Statement  aka Function Declaration
function a() {
  console.log("a called");
}
//a();

//Function Expression

var b = function () {
  console.log("b called");
};
b();
