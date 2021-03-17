let name = {
  firstName: "Akash",
  lastName: "kumar",
};

let printName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " " + hometown + " " + state
  );
};

let printMyname = printName.bind(name, "Dehradhun", "Uttrakhand");
printMyname();

Function.prototype.mybind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

let printName2 = printName.mybind(name, "Punjab", "Phagwara");
printName2();
