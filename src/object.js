/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/*
Javascript's fundamental datatype is the object.
An object is an ordered collection of properties, each of which has a name and a value.
Property names are strings, hence objects map strings to values.
*/

const person = {
  first: 'venkat',
  last: 'krishnan',
  age: 100
};
console.log(person.first);
console.log(person.last);
console.log(person.age);
person.first = 'Tom';
person.last = 'Jerry';
console.log(person.first);
console.log(person.last);
person.last = null;
console.log(person.last);

const empty = {};
const point = { x: 10, y: 50 };
const point2 = { x: point.x, y: point.y + 1 };
const book = {
  'main title': 'Java script', // property names include spaces
  'sub-title': 'Guide to Java Script for beginners', // property ames include hyphen
  // eslint-disable-next-line quote-props
  'for': 'students', // reserved keywords if,for,switch,...
  author: {
    first: 'venkat',
    last: 'krishnan'
  }
};
console.log(book['main title']);
console.log(book['sub-title']);
console.log(book.for);
console.log(book.author.first);
console.log(book.author.last);
// console.log(book.sub-title);
// console.log(book['for']);
