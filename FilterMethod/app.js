// The filter() method is a built-in array method in JavaScript that allows you to create a new array containing elements that pass a certain condition. It provides a clean and concise way to filter out elements from an array based on a specified criteria.

const songs = [
    { name: "Lucky You", duration: 4.34 },
    { name: "Just Like You", duration: 3.23 },
    { name: "The Search", duration: 2.33 },
    { name: "Old Town Road", duration: 1.43 },
    { name: "The Box", duration: 5.23 },
];
const res=songs.filter(song => song.duration > 3);
res.forEach((x)=> console.log(x));

const computers = [
    { ram: 4, hdd: 100 },
    { ram: 8, hdd: 200 },
    { ram: 16, hdd: 300 },
    { ram: 32, hdd: 400 },
];
const comres=computers.filter(computer => computer.ram >=16);
comres.forEach((x)=> console.log(x));

// 1. Iterate over "ages" array
// 2. Print only adults, those whos age is greater then 18

const ages = [32, 33, 16, 40];
const flag=ages.filter((x) => x>=18);
console.log(flag);

// 1. Iterate Over "words" array
// 2. Print only those words which length is greater then 6
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];

  const p=words.filter((word)=> word.length >6);
  console.log(p);
