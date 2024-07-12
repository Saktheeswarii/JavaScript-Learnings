// function destructuring
const person = {
    name: "john doe",
    age: 20,
    country: "USA",
};

function printPersonInfo({ name, age, country }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Country: ${country}`);
}

printPersonInfo(person);

let options = {
    title: "My menu",
    items: ["item1", "item2"],
};
function showMenu({title = "Untitled", width : w =100 , height : h =200 ,items : [item1,item2]}) {
    console.log(`${title} ${w} ${h}`);
    console.log(item1);
    console.log(item2);
}
showMenu (options);

// nested destructuring
const songs = [
    { name: "Lucky You", singer: "Joyner", duration: 4.34 },
    { name: "Just like you", singer: "NF", duration: 3.23 },
    { name: "Humble singer", singer: "Kendrick Lamar", duration: 2.33 },
    { name: "Old Town Road", singer: "Lil Nas X", duration: 1.43 },
    { name: "Cold SHolder", singer: "Central Cee", duration: 5.23 },
];
const [,,, { singer: s }] = songs;
console.log(s);


const data = {
    user: {
      id: 123,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      address: {
        city: "New York",
        country: "USA",
      },
      hobbies: ["Reading", "Painting", "Cooking"],
      scores: {
        math: 95,
        science: 88,
        history: 75,
      },
    },
    products: [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 800 },
      { id: 3, name: "Tablet", price: 500 },
    ],
    settings: {
      darkMode: true,
      notifications: {
        email: true,
        sms: false,
        push: true,
      },
      language: "English",
    },
  };
  
  // Extracting data using object destructuring
  const {
    user: {
      name,
      age,
      address: { city, country },
      hobbies,
      scores: { math, science, history },
      email,
    },
    products: [product1, product2, product3],
    settings: {
      darkMode,
      notifications: {
        email: emailNotifications,
        sms: smsNotifications,
        push: pushNotifications,
      },
      language,
    },
  } = data;
  
  // Logging the extracted data using template literals
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Address: ${city}, ${country}`);
  console.log(`Hobbies: ${hobbies.join(", ")}`);
  console.log(`Math Score: ${math}`);
  console.log(`Science Score: ${science}`);
  console.log(`History Score: ${history}`);
  console.log(`Product 1: ${product1.name} - $${product1.price}`);
  console.log(`Product 2: ${product2.name} - $${product2.price}`);
  console.log(`Product 3: ${product3.name} - $${product3.price}`);
  console.log(`Dark Mode: ${darkMode}`);
  console.log(`Email Notifications: ${emailNotifications}`);
  console.log(`SMS Notifications: ${smsNotifications}`);
  console.log(`Push Notifications: ${pushNotifications}`);
  console.log(`Language: ${language}`);