// Template strings, also known as template literals, are a feature in JavaScript that allows you to create strings with embedded expressions. They are denoted by backticks instead of single or double quotes. Template strings provide a more flexible and concise way to construct strings, especially when they involve variables or expressions.

function info()
{
    return `This is javascript file`;
}

console.log(`${info()}`);

console .log(`${['one','two','three']}`);

console.log(`${2+2}`);

// 1. Store this in template string 
// The quick
// brown fox
// jumps over
// the lazy dog
// 2. Create two variables (firstName, last Name)
// 3. Use that variables in template string.

const t1=`The quick
brown fox
jumps over
the lazy dog`;
console.log(t1);

const firstName="Javascript";
const lastname="File";
console.log(`${firstName} ${lastname}`);

