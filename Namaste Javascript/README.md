1. Everything in javascript happens inside an "Execution Context".

2. Javascript is a synchronous single-threaded language.

3. Everything which is not inside a function is in Global space.

4. Scope means where you can access a specific variable or a function in a code.

5. Scope determines the accessibility of variables, objects, and functions from different parts of the code.

6. A lexical scope in JavaScript means that a variable defined outside a function can be accessible inside another function defined after the variable declaration. But the opposite is not true; the variables defined inside a function will not be accessible outside that function.

7. -> let and const are hoisted. we cant use them before initialization is result of "temporal dead zone".
   -> js use diff memory than global execution context to store let and cost. which is reason behind "temporal dead zone"
   -> level of strictness ... var<<let<<const.
   -> var //no temporal dead zone, can redeclare and re-initialize, stored in GES
   let //use TDZ, can't re-declare, can re-initialize, stored in separate memory
   const //use TDZ, can't re-declare, can't re-initialize, stored in separate memory
   -> syntax error is similar to compile error. while type and reference error falls under run time error.
   -> syntax error ... violation of JS syntax
   type error ... while trying to re-initialize const variable
   reference error ... while trying to access variable which is not there in global memory.

8. Block is also known as compound statement.
   We group multiple statements in curly braces {} where javascript expects a single statement.
