
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// console.log(months.map((month) =>{
//   console.log(month);
//   return month.toUpperCase();
// })
// )

//index of array
// console.log(months.map((month,index) =>{
//   console.log(index,month);
//   return month.toUpperCase();
// })
// )

//filter
// const monthFilter =months.filter((month,index) =>{
//   console.log(index,month);
//   return month.length <= 5;
// })


// const monthChar = months.filter((month, index) => {
//   console.log(index, month);
//   return month.toLowerCase().includes('m'); // Filtering months that include 'm'
// });

// console.log(monthChar); // Output: ['March', 'September', 'November', 'December']

// const students = [
//   {
//     name: 'Akash',
//     age : 12
//   },
//   {
//     name : 'Amaan',
//     age: 21
//   },
//   {
//     name: 'Adnan',
//     age: 23
//   },
//   {
//     name: 'Raman',
//     age: 16
//   },
//   {
//     name: 'Amir',
//     age: 23
//   }

// ]

// const studentsDetailsMature = students.filter((student,age) =>{
//   console.log(student,age);
//   return student.age >= 18;
// })

// console.log(studentsDetailsMature.map((student) =>{
//   return student.name
// }));

//Reduce;


const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
