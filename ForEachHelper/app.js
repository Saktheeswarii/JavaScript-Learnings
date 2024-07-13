// When we call the forEach helper we pass in anonymous callback function,
// This function gets called one time for every element in the array
// Whatever is inside the function that logic happens

const colors=["teal", "blue" , "green", "purple"];
console.log(`for each helper example 1`);
colors.forEach((color) => console.log(color));


const words = ["hello", "bird", "table", "football", "pipe", "code"];
console.log(`for each helper example 2`);
const capWords = words.forEach((word, index, arr) => {
  arr[index] = word[0].toUpperCase() + word.substring(1);
});
words.forEach((word) => console.log(word));

// 1. Create an array of numbers.
// 2. Create a variable to hold the sum.
// 3. Create the adder function which takes the parameter of number & add that with sum variable.
// 4. Loop over the array, incrementing the sum variable except this time a function gets referenced in the forEach
// 5. print the sum variable.

let nums=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
function adder(num){
    sum+=num;
}
nums.forEach(adder);
console.log(`Sum = ${sum}`);