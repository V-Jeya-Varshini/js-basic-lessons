/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable semi */
/*
## Number

Only **one** type of number in Javascript whether it has decimal point or not.
*/

const age = 100;
const money = 1000.50;
console.log(typeof age);// number
console.log(typeof money);// number

// `typeof` is used to find out the datatype.

console.log("10" - "3");

// The above works with multiplication, division and subtraction.
//  but not with addition(+)
// because the + sign is also used for "concatenation"
// -----------------------
// Math helper methods:

console.log(Math.round(2.5));
console.log(Math.floor(5.6));
console.log(Math.ceil(8.4));
console.log(Math.random());

const sweets = 20;
const kids = 3;
const eachKidGets = Math.floor(sweets / kids);
console.log(eachKidGets);
const leftsweets = sweets % kids;
console.log(leftsweets);

// ----------------------

let x = 2 ** 3;
console.log(x);
x = Math.pow(2, 3);
console.log(x);

// ----------------------

console.log(0.1 + 0.2);

// let costOfProduct=100.95;
let costOfProduct = 10095;// in paise
/* So, when working with money, don't store them as (Rupees.paise) or (dollars.cents).
Store all of the money in (paise/cets) as you won't have to deal with fractions only whole numbers.
When need to display to user,just convert them back.
*/

console.log(typeof Infinity);
console.log(typeof -Infinity);
let result = 10 / 'hello';
console.log(result);
console.log(typeof NAN);
