// const evenNumber = [0,2,4,6,8,11];

// const ans =evenNumber.some((num,i) =>{
//   if(num % 2 === 1){
//     console.log(i);
//   }
//   return num % 2 === 1;
// })

// console.log(ans);

// const ans2 =evenNumber.every((num,i) =>{
//   if(num % 2 === 1){
//     console.log(i);
//   }
//   return num % 2 === 1;
// })
// console.log(ans2);

// function mul (a,b=1){
//   return a*b;
// }

//spread Operator

// const num1 = [11,1,3,4];
// const num2 = [23,56,78,8];

// const joinedArray = [...num1,...num2]; 


// const user = {
//   name: "Amaan",
//   age: 21
// } 

// const updateUser = {...user,city : 'ujani'}


// function add(){
//   let sum =0;

//   for(let i=0;i<arguments.length; i++){
//     sum =sum +arguments[i];
//   }
//   return sum;
// }

//rest PARAMS

const nums1 = [1, 2, 3, 4]

function add(a, b, c, ...nums) {
    console.log(a, b, c);
    console.log('nums:', nums);
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    return sum
}

function add() {
  return [...arguments].reduce((acc, curr) => acc + curr)
}

function add() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr)
}

function add(...nums) {
  return nums.reduce((acc, curr) => acc + curr)
}

const result = add(...nums1)