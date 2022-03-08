/* eslint-disable camelcase */
/* eslint-disable quotes */
/* eslint-disable semi */
/*
3 ways to create string variables
1.using single quots:
2.using double quotes:
3.using back licks:
*/

const my_name = 'NamefieldEmpty';// single quote
const middle = 'Gabbar';// double quote
const last = 'Singh';// back tick

console.log(my_name);
console.log(middle);
console.log(last);

const sentence1 = 'she\'s so cool';
console.log(sentence1);
const sentence2 = "she's so cool";
console.log(sentence2);
const sentence3 = `'she's so cool'`;
console.log(sentence3);
const sentence4 = "shes's so \"cool\"";
console.log(sentence4);

// multi line string using single quote doesn't work

const song1 = `I like 
ARR songs and 
Aniruth songs`;
console.log(song1);

const hello3 = 'hello my name is ' + my_name + ".Nice to meet you";
console.log(hello3);

const hello4 = `hello my name is ${my_name}.Nice to meet you. I am $(1+100)years old`;
console.log(hello4);

const html = `<div>
<h2>${my_name}</h2>
<p>${hello3}</p>
`;
console.log(html);
// document.body.innerHTML = html;
