'use strict';

const foo = 1;

foo = 2; // throws: Uncaught TypeError: Assignment to constant variable.

console.log(foo);
