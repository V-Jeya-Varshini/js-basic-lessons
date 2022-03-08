/* eslint-disable semi */
/* eslint-disable prefer-const */
// check the datatype of a value

let x = 100;
let result = Number.isInteger(x);
console.log(`Is x a number: ${result}`);

// eslint-disable-next-line quotes
let y = "abcd";
result = Number.isInteger(y);
console.log(`Is y a number: ${result}`);

result = (typeof y === 'string');
console.log(`Is y a String: ${result}`);

let flag = true;
result = (typeof flag === 'boolean');
console.log(`Is flag a boolean: ${result}`);

let nos = [1, 2, 3, 4, 5]; // Array is an object
result = (typeof nos === 'object');
console.log(`Is x an object: ${result}`);
