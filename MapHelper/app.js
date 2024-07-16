// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let numbers = [1, 2, 3, 4, 5];
let double = numbers.map((num) => num * 2);
console.log(`Numbers after multiplied by 2`);
numbers.forEach((num)=> console.log(num));

let nums=[1,2,3,4,5,];
let res=nums.map((num) => num + num);
console.log(`Nums array after performing addition`);
nums.forEach((num)=>console.log(num));

// 1. Create array with random numbers.
// 2. Map over each item in that array, & multiply each item by 10

const arr = [65, 44, 12, 4, 3];
function myFunction(num) {
  return num * 10;
}
console.log(`Multipling each item by 10`);
const newArr = arr.map(myFunction);
newArr.forEach((num) => console.log(num));

console.log(`Multipling each item by 2`);
const arr2=arr.map((num) => num * 2);
arr2.forEach((num) => console.log(num));