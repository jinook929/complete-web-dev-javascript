// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// answer
turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');

console.log(startLine);
console.log(turtle);
console.log(rabbit);
//      ||<- Start line
// 🐢=======
//        🐇


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
// const intro = `${Object.entries(obj)[0][0]} ${Object.entries(obj)[0][1]} ${Object.entries(obj)[1][0]} ${Object.entries(obj)[1][1]} ${Object.entries(obj)[2][0]} ${Object.entries(obj)[2][1]}`;
// console.log(intro);

console.log(Object.entries(obj).map(function(value) { return value.join(" ") }));
console.log(Object.entries(obj).map(function(value) { return value.join(" ") }).join(' '));

console.log(Object.entries(obj).map(value => value.join(" ")).join(' '));

// to this:
'my name is Rudolf the raindeer'
