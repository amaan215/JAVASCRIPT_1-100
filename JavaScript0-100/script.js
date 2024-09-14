// switch case
// const dayNumber =4;



// debugger

// switch(dayNumber){
//   case 0:
//     console.log("It Is Sunday");
//     break;
//   case 1:
//     console.log("Its Monday");
//     break;  
//   case 2:
//     console.log("Its Tuesday");
//     break;
//   case 3:
//     console.log("Its Wednesday");
//     break;
//   case 4:
//     console.log("Its Thrusday");
//     break;
//   case 5:
//     console.log("Its Friday");
//     break;
//   case 6:
//     console.log("Its saturday");
//     break;

//   default:
//     console.log("Run Unvalid Number");
    
// }
// console.log("Program End !!");



// let fruit = "apple";

// switch (fruit) {
//     default: // Default case is first
//         console.log("This is the default case.");
//         // Normally, you would want to break here, but we are checking other cases
//     case "apple":
//         console.log("This is an apple.");
//         break;
//     case "banana":
//         console.log("This is a banana.");
//         break;
//     case "orange":
//         console.log("This is an orange.");
//         break;
// }


// const userName = "Amaan Alvi";
// const userAge = 23;

// switch(true){

//   case (userAge >=0 && userAge <= 4):
//     console.log(`${userName} is a kid`);
//     break;

//   case (userAge >=5 && userAge <= 17):
//     console.log(`${userName} is in field`);
//     break;

//   case (userAge >=18 && userAge <= 24):
//     console.log(`${userName} is in college`);
//     break;

//   case (userAge >=25 && userAge <= 45):
//     console.log(`${userName} is read NewsPaper`);
//     break;


//   case (userAge >45 && userAge <121):
//     console.log(`${userName} is a Mortal`);
//     break;

//   default:
//     console.log("INVALID INPUT");
// }
// console.log("Program End");


//ternary operator
//---a ? b : c;

// debugger

// const gender = 'F';
// const userMessage = `${gender === "F" ? 'Female' : 'Male'} is college student.`;
// console.log(userMessage);

// //ternary condition chain

// const name = "Amaan";
// const userAge = 23;
// const isGraduate = false;

//object

// const myName ='Anurag';

// const userName1 = '';
// const userName2 = '';
// const user = {
//   firstName: "Akash",
//   lastName: "Alvi",
//   age: 26,
//   education: 12,
//   city: "Allhabad"
// };

// // const user2 = {
// //   firstName: "Akash",
// //   lastName: "Alvi",
// //   age: 26,
// //   'education-year': 12,
// //   Anurag: "Allhabad"
// // };

// // console.log(user["firstName"]);
// // console.log(user["education-year"])
// // console.log(user2[myName]);
// // console.log(user2.Anurag);

// const user2 = {
//     firstName: "Akash",
//     lastName: "Alvi",
//     address: {
//       city: "Uhjani",
//       pincode : 243639,
//       state : "UttarPradesh",
//       moreDetails:{
//         population : 927236,
//         area : 352734,

//       }
//     }
//   };

//   //adding value
//   // user2.age =27;


//   console.log(user2);

//let username = "anurag";

//prevent change
// const user = {
//   name: "Amaan",
//   age: 25,
//   email: "amaanalvi41@gmail.com",
//   isActive: true,
//   hobbies: ["coding", "reading", "gaming"]
// };

// console.log(user);

// object.seal(user);
// //delete no remove

//array
// const username = "Amaan Alvi";
// const fruitsCollection =["apple","Banana","grapes",'Dates'];

// console.log(username[3]);
// console.log(fruitsCollection[1]);


// Basic array Operation in JAVAScript

// const evenNumber = [0,2,4,6,8];

// const animals = ['Dog','Cat','Rat'];

// console.log(evenNumber.concat(animals));

// console.log(evenNumber.indexOf(8));

// console.log(evenNumber.includes(8));

// console.log(evenNumber.reverse())

// console.log(evenNumber.sort());

// console.log(evenNumber);

// console.log(animals.slice(0,1));

// console.log(animals.splice(0,1));

// const nameNumberList = [['Amaan',82],['Adnan',78]];

// console.log(nameNumberList[1][1]);
// //update

// nameNumberList[1][5]="Armaan";

// const tiktok =[['*',null,null],
// [null,null,'0'],
// ['0',null,'*']];
// console.log(tiktok);
//

//shallow copy

// const fruits = ['Mango','Apple','Orange'];



//spread operator
// const myFruits =[...fruits];

//use concat
// const myFruits = [].concat(fruits);

//also using slicing

// Object.assign(myFruits,fruits);

// myFruits.push("Dates");
// myFruits.push("WaterMelon");


// console.log(myFruits);

// console.log(fruits);

// const object = {
//   firstName: "Amaan",
//   lastName: "Alvi",
//   pata: {
//     city: 'Ujhani',
//     pincode: 243638
//   }
// };

// const object2 = {...object};

// object2.pata.city = 'shaswan';

// // Correct usage of Object.assign
// Object.assign(object2, object);

// object2.lastName = 'Miyan';

// console.log(object2); // Output: { firstName: 'Amaan', lastName: 'Miyan' }
// console.log(object);  // Output: { firstName: 'Amaan', lastName: 'Alvi' }


// const userName ='Amaan';

// let userName1 = userName;
// userName1 = userName1 + "Alvi";

// console.log(userName1);
//

//spread operator
// const user ={
//   name: 'Amaan',
//   gender: 'Male'
// }

// const user2 = {...user};

// user2.name = 'Adnan';

//while loop

// console.log("Program Started");

// let num =0;

// while(num<=10){
//  console.log(num);
//  num++;
// }

// console.log("End");

//function
//function defination
// function introduceMe (){
//   console.log("Amaan Alvi");
//   console.log("Hii Amaan");
// }

// //fucntion call
// const returnValue = introduceMe();
// debugger
// sayHii();

// const userName = 'Amaan';
// const userAge = 21;

// function sayHii(){
//   const a = 122;
//   const b =122;
//   console.log(a,b);
// }

// console.log("Program End");


//Hosting

// console.log(a);

// var a ='Amaan';


// const sayHii = function(){
//   console.log("Hii");
// }

//global and local scope

// const username = 'Amaan Alvi';
// const userAge = 21;
// var a=80;

// // function add(){
// //   const x = 34;
// //   const y = 23;
// //   console.log(x+y);
// // }

// function subtract(){
//   const x=12;
//   const y=10;
//   const z =36;
//   console.log(x-y);
//   console.log(username);


//   function child(){
//   const childName = "Golu";
//   console.log(childName);
//   console.log(Z);
//   function grandChild(){
//     const grandChildName= "MMONO";
//     console.log(grandChildName);
//   }
//   grandChild();
// }
// child();
// }




// add();
// subtract();

// console.log("End");

//callback function higher order function

