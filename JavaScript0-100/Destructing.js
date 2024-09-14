const color = ['red','green','yellow','pink','black'];

const user = {
  name: 'Anurag',
  age: 21,
  address: {
    city : 'Ujhani',
    state: 'UttarPradesh',
  },
}

const color2 = color;

console.log(color2);


const [r,g,y,p,b] = color;

const [,,color3] = color;

//object destructuring
const {name: username,age: userAge} = user;