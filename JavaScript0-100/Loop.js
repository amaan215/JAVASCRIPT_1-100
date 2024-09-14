// const fruits = ['banana', 'apple','Peach','mango','Grapes'];

// const { object } = require("zod");

// for(let i=0; i<fruits.length; i++){
//   console.log(fruits[i] = i);
// }

// for(var fruit of fruits){
//   console.log(fruit);
// }

// const userName = "AMAAN ALVI";

// for(const letter of userName){
//   console.log(letter);
// }


const person = {
  userName: 'Amaan Alvi',
  userAge: 2233,
  eyeColor: 'red',
  city: 'Banglore'
}

// for(const letter of person){
//   console.log(letter);
// }

// for(const letter in person){
//   console.log(letter,":",person[letter]);
// }

//another way
// const personKeys = object.keys(person);

// for(const personKey of personKeys){
//   console.log(personKey);
// }

const valueA = Object.values(person);

const valueB = Object.entries(person);

for(const value of valueB){
  console.log(value);
}