function greet(){
    console.log("Welcome!");
}

greet();

function sayhello(name){
    console.log("Hello "+ name);
}

sayhello("kathy");

function add(a,b){
    return a+b;
}
console.log(add(5,3));

function myfunction(a,b)
{
    return a*b;
}
console.log(myfunction(3,4));

// function expression

const greetings = function (user)
{
    console.log("Hello "+ user);
}

greetings("kathy");

// callback function

function greett(name,cb)
{
    console.log("Hello "+name);
    cb();
}


greett("John",function cb(){
    console.log("I am a call back function");
});

function showcallfunc(fn){
    let value=10;
    fn(value);
}
function fn(value){
    console.log("Value="+value);
}

showcallfunc(fn);