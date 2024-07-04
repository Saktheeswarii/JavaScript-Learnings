const car={
    type : "Benz",
    model : "xz",
    color : "red",
};
console.log(typeof(car));
car.type="Toyota";
car.wheels="4wheels";
console.log(car);

// object methods

// function greet()
// {
//     return "Hello, my name is " + person.name + " I am " + person.age + " years old.";
// }

// const person={
//     name : "John",
//     age : 18,
//     greet,
// };

// console.log(person.greet());

const person={
    name : "John",
    age : 18,
    greet : function greet(){
         return "Hello, my name is " + person.name + " I am " + person.age + " years old.";
     }
};

console.log(person.greet());