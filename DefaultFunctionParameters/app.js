/* Default function parameters, introduced in ECMAScript 6 (ES6), allow you to assign default values to function parameters. When a function is called, and an argument is not provided for a parameter, the default value will be used instead. This feature makes it easier to handle cases where arguments might be missing or undefined.*/

//count to 5
function countTo5(count = true) {
    if (count === true) {
        for (let i = 1; i <= 5; i++) {
            console.log(`Count: ${i}`);
        }
    }
}
countTo5(true); 

function ratings(rate)
{
    if(rate === 5)
        console.log(`High Ratings :)`);
    else if(rate === 0)
        console.log(`Low Ratings :(`);
}

ratings(5);

// 1. Create function name (multiply) with 2 parameters (a, b) which will multiply the parameters value 
// 2. Provide 1 as the default value to parameter "b"

function multiply(a,b=1){
    return a*b;
}
console.log(multiply(2,3));
console.log(multiply(5));