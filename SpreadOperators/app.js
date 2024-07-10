// The spread operator is a new addition to the set of operators in JavaScript ES6.
// It takes in an iterable (e.g an array) and expands it into individual elements.
// The spread operator is commonly used to make shallow copies of JS objects.
// Using this operator makes the code concise and enhances its readability.

// along with functions
function giveme4(a,b,c,d){
    console.log(`a`, a);
    console.log(`b`, b);
    console.log(`c`, c);
    console.log(`d`, d);
}
const colors=["red","blue","green","pink"];
giveme4(...colors);

// along with array
const arr1=["red","blue","green","pink"];
const arr2=["teal","orange","yellow"];
const arr3=[...arr1,...arr2];
console.log(arr3);

//along with objects
const obj1={x: 1, y: 2 };
const obj2={z:3 , s: 4};
const obj3={...obj1, ...obj2};
console.log(obj3);

// 1. Make a clone of I "arr, arr2" by using spread operator
// 2. Make a clone of "user" object using spread operator
let a = [1, 2, 3];
let b = [4, 5];
const res=[...a , ...b];
console.log(res);

const user = {
name: "Jen",
age: 22,
};
const clone={...user , job : "Programmer" , Address : "Newyork"};
console.log(clone);