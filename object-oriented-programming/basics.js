const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

//Factory functions

function createCircle(radius) {
  return {
    // radius : radius      //it can be done this way also
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const newCircle = createCircle(1);
newCircle.draw();

//Constructer Function

function Circle(radius) {
  console.log("this", this);
  this.radius = radius;
  this.draw = function () {
    console.log("Hello world");
  };
}

const anotherCircle = new Circle(); //new keyword is neccasary because it will go to global scope and may lead to bugs and thats a bad practice.
anotherCircle.draw(); // logs Hello world

//object literal syntax

let x = {};

//the javascript engine will transpile it to something like this

//let x = new Object();
