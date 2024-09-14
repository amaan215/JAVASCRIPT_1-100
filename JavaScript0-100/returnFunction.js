
// function add(){
//   console.log(a+b);
// }
function outer(){
    const a =4;
    function parent(){
    const b =6;
    return function(){
      console.log(a+b);
    }
  }
  return parent();
}

// console.dir(add);

const add1 = outer();

console.dir(add1);