/* eslint-disable no-new-wrappers */
/* eslint-disable no-unused-vars */
/* eslint-disable no-new-object */
/* eslint-disable no-var */
/* eslint-disable semi */
var body = new Object();
body.living = true;
body.age = 33;
body.gender = 'male';
body.getGender = function () { return body.gender; };
console.log(body.getGender());

// ----------------
const myObject = new Object();
myObject['0'] = 'f';
myObject['1'] = 'o';
myObject['2'] = 'o';
console.log(myObject);

const myString = new String('foo');
console.log(myString);

// -----------------
const Person = function (living, age, gender) {
  this.living = living;
  this.age = age;
  this.gender = gender;
  this.getGender = function () { return this.gender; };
};
const smith = new Person(true, 33, 'male');
console.log(smith);
