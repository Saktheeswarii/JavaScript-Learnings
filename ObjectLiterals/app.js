/* Enhanced object literals, introduced in ECMAScript 6
(ES6), are a set of enhancements to the syntax for
defining objects in JavaScript. These enhancements make
it more convenient and concise to define object
properties and methods.*/

function user(name,age,work)
{
    return {
        name,
        age,
        work,
        intro : () => console.log(`My name is ${name} & I am ${age} years old.`),
    };
}

const p=user("John",20,"Programmer");
console.log(p.intro());

// REFACTOR
// ES5
// var a =1,
// b=2,
// c=3;
// obj={
// a : a,
// b: b,
// C : c,
// };


const a=1;
const b =2;
const c=3;
 obj = {a,b,c };
 console.log(obj);

// ES5 code I
// var lib = {
// sum: function (a, b) {
// return a + b;
// },
// mult: function (a, b) {
// return a * b;
// },
// };
// console.log(lib. sum (2, 3)); // 5
// console.log(lib.mult(2, 3)); // 6

const lib ={
    sum : (a,b) => a+b,
    mul : (a,b) => a*b,
};
console.log(lib.sum(2,3));
console.log(lib.mul(2,3));

// function getPersion ES6(name, age, height) {
// return {
// name: name,
// age: age,
// height: height,
// };
// }

// getPersion ES6("John", 19, 200);
// Expected output: { name: 'John', age: 19, height: 200 }

function getPersionES6(name, age, height) {
return { name,age,height};
}

const sp=getPersionES6("John", 19, 200);
console.log(sp);