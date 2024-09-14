'use strict'
function a(b){
  // console.log(typeof(b));
  console.dir(b);
  b();
}

// a("Amaan Alvi")
// a({
//   userName: 'Amaan Alvi',
//   userAge: 50
// });
// a([1,2,3,4,5,6]);

// a(sayHi);
//callback function
sayHii(function (){
  console.log("HIIII");
})
a(sayHii);

