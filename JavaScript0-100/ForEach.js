const fruits = ['banana', 'apple', 'peach', 'mango', 'grapes'];

fruits.forEach((x) => {
  console.log('x');
});

fruits.forEach(function(fruit) {
  console.log(fruit.toUpperCase());
});
console.log("*********");
fruits.map(function(fruit) {
  console.log(fruit.toUpperCase());
});
