
let person=  {
    name : "John",
    age : 20,
    email : "john@gmail.com",
    isemployeed : true,
    skills : ["c","Java"]
};

const str=JSON.stringify(person); 
console.log(str);
const pstr =JSON.parse(str);
console.log(pstr);
