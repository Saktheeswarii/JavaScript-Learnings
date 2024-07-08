/* Arrow functions, also known as fat arrow functions,
are a concise and shorter way to define functions in 
JavaScript. They were introduced in ECMAScript 6 (ES6)
and provide a more compact syntax compared to traditional
function expressions.*/

greet = username =>`Hello ${username}!`;
console.log(greet("John"));

const sum = (n,m) => n+m;
console.log(sum(2,3));

const operations = (n, m) => {
    return {
        sum: n + m,
        difference: n - m,
        product: n * m,
        quotient: n / m
    };
};
console.log(operations(15,3));

// REFACTOR THIS CODE TO ES6 ARROW FUNCTIONS.
// setTimeout(function () {
//     console.log("Hello"); I
//     setTimeout(function () {
//     console.log("Hey");
//     setTimeout(function () {
//     console.log("Namaste");
//     setTimeout(function () {
//     console.log("Hi");
//     setTimeout(function () {
//     console.log("Bonjour");
//     }, 2000);
//     }, 2000);
//     }, 2000);
//     }, 2000);
//     }, 2000);

setTimeout(() => {
    console.log("Hello");
    setTimeout(() => {
      console.log("Hey");
      setTimeout(() => {
        console.log("Namaste");
        setTimeout(() => {
          console.log("Hi");
          setTimeout(() => {
            console.log("Bonjour");
          }, 2000);
        }, 2000);
      }, 2000);
    }, 2000);
  }, 2000);
  