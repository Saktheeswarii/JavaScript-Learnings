// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
// variadic function - unlimited number of parameters

function user(name,...userdata)
{
    console.log(name);
    console.log(userdata);
}

user("John" , 19 , "Programmer" , "Reading Books");


function person (firstName, lastName, ... hobbies) {
    console.log("First Name: ", firstName); 
    console.log("Last Name:", lastName);
    console.log("Hobbies", hobbies);
}
person("John", "Dev", "programming", "football", "singing");

// Create a function which will take unlimited amount of parameters & log all of that params to the console.

function example(...colors)
{
    console.log(colors);
}
example("Colors" , 5 , ["red","yellow","green","blue","teal"]);