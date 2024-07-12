// The ternary operator in JavaScript is a concise way of writing conditional expressions. It is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), an expression to execute if the condition is true, followed by a colon (:), and an expression to execute if the condition is false.
// condition ? exprIf True : exprIfFalse;

let num=2;
function check(num)
{
    return num%2===0 ? `Even Number` : `Odd number`;
}
const res=check(num);
console.log(res);


const age = 25;
const isAdult = age >= 18 ? "Adult" : "Not an Adult";
console.log(isAdult); 


// ternary operator to check the eligibility to vote
let age1 = 15;
let result =  age1 >= 18 ? "You are eligible to vote." : "You are not eligible to vote yet";
console.log(result);