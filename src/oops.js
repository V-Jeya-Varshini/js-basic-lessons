/* eslint-disable no-const-assign */
/* eslint-disable no-undef-init */
/* eslint-disable quote-props */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable semi */

// function getChild (parent) {
//   if (parent == null) throw TypeError();
//   return Object.create(parent);
// }

// let o4 = { x: "don't change this value" };
// let p = getChild(o4);
// // o4 = null;
// // p = getChild(o4);
// console.log(p);

// Object.prototype = 0;// zero
// console.log(Object);
// The prototype properties of built-in are read-only.
// Object.prototype unchanged

// let o5 = {};
// console.log(o5);
// o5.x = 100;
// console.log(o5);
// let p = getChild(o5);
// console.log(p);
// p.y = 200;
// let q = getChild(p);
// q.z = 300;
// console.log(q);
// console.log("q.x + q.y + q.z" + (q.x + q.y + q.z));
// console.log("q.x + q.y " + (q.x + q.y));
// console.log("o5.x + o5.y" + (o5.x + o5.y));
// console.log("o5.x " + (o5.x + o5.x));

// const book = {
//   'main title': 'Javascript',
//   subtitle: 'The Definitive Guide',
//   'for': 'all audiences',
//   author: {
//     firstname: 'Donald',
//     surname: 'Duck'
//   }
// };
// let len = undefined;
// if (book) {
//   if (book.subtitle) {
//     len = book.subtitle.length;
//     console.log(len);
//   } else { console.log("book.subtitle undefined:"); }
// } else { console.log("book is null"); }

// len = book && book.subtitle && book.subtitle.length;
// if (len) console.log(len);

// // --------------------------
// console.log(book.author);
// delete book.author;
// console.log(book.author);

// console.log(book["main title"]);
// delete book["main title"];
// console.log(book["main title"]);

let o6 = { x: 100 };
console.log(o6.x);
delete o6.x;
console.log(o6.x);
console.log(o6.toString);
delete o6.toString;

/* ------ Cannot be deleted -----
delete Object.prototype;
var a = 1;
delete this.a;
function f1 () {}
delete this.f1(); */
