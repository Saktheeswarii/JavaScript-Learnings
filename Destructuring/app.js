// Destructuring allows us to "unpack" values from data-structures (Arrays, objects) into separate distinct variables.

 // Destructuring with arrays
 const nums=['one','two','three'];
 const [a1,b1,c1]=nums;
 console.log(`a =`,a1);
 console.log(`b =`,b1);
 console.log(`c =`,c1);

 // providing default values
 let s1,r1;
 [s1 = 3 , r1 = 9]=["apple","banana"];
 console.log(s1);
 console.log(r1);

 // function that returns array
function f() {
    return [10, 20];
}
let q1, e1;
[q1, e1] = f();
console.log(q1);
console.log(e1);

// Ignoring some return values from a function
function fp() {
    return [11 , 22 , 33];
}
const [t1, ,u1] = fp();
console.log(t1);
console.log(u1);
// Assigning the rest of an array to a variable
const [l1, ...k1] = ["one", "two", "three", true, 12,["one"]];
    console.log(l1);
    console.log(k1);


// Your task is to use array destructuring to extract the first three colors from the colors array and assign them to separate variables named color1, color2, and color3.
// After extracting the colors, log each variable's value to the console.
const colors = ["red", "green", "blue", "yellow", "orange"];
[color1 , color2 , color3]=colors;
console.log(color1);
console.log(color2);
console.log(color3);

// In object destructuring order doesn't matter but the name does matter
const student = { name: "Krish", position: "First", rollNo: 21 };
const { name, position, rollNo} = student;
console.log(name);
console.log(position);
console.log(rollNo);

// Your task is to use object destructuring to extract the name,age, and country properties from the person object.
// After extracting the properties, log each variable's value to the console
const person = {
    fname: "John Doe",
    age: 60,
    gender: "male",
    country: "USA",
};
const {fname,age,country}=person;
console.log(fname);
console.log(age);
console.log(country);

// renaming the variable name while destructuring only in objects
const num ={ v : 600 , w : 800 };
const { v : num1 , w : num2}=num;
console.log(num1);
console.log(num2);

// Object destructuring and rest operator
let { a, b , ...rest } =  { a: 100, b: 200, c: 300, d: 400, e: 500 };
console.log(a);
console.log(b);
console.log(rest);

// Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign them to separate variables named personName, personAge, and personCountry.
// After extracting the properties, log each variable's value to the console.
const personinfo = {
    name: "John Doe",
    age: 40,
    gender: "male",
    country: "USA",
};
const { name: personName, age: personAge, country: personCountry } = personinfo;
console.log(personName);
console.log(personAge);
console.log(personCountry);
