const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach((num) => {
  double.push(num * 2);
});
console.log('forEach', double);

// map, filter, reduce

const mapArray = array.map(num => num * 2);
// const mapArray = array.map((num) => {
//   return num * 2;
// });
console.log('map', mapArray);

const filterArray = array.filter(num => num > 5);
// const filterArray = array.filter((num) => {
//   return num > 5;
// })
console.log('filter', filterArray);

const reduceArr = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5); // default accumulator = 0
console.log(reduceArr);



// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  }
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const nameEM = [];
array.forEach(el => {
  nameEM.push(el.username + "!");
});
console.log(nameEM);
/* Solution
let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray); 
*/

//Create an array using map that has all the usernames with a "? to each of the usernames
const nameQue = array.map(el => el.username + "?");
// const nameQ = array.map((el)=>{
//   return el.username + '?';
// })
console.log(nameQue);
/* Solution
const mapArray = array.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray);
*/

//Filter the array to only include users who are on team: red
const teamRed = array.filter(el => el.team === "red");
// const teamRed = array.filter((el)=>{
//   return el.team === "red";
// })
console.log(teamRed);

//Find out the total score of all users using reduce
// let totalScr = 0;
// array.forEach((el)=>{
//   totalScr = totalScr + Number(el.score);
// });
// console.log(totalScr);
const totalScore = array.reduce((acc, el) => {
  return (acc + el.score)
}, 0);
console.log("totalScore: ", totalScore);

// (1), what is the value of i? => item's index number
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });
const newArray = arrayNum.map((num, i) => {
  return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// const itemsEM = array.map(function(e) {
//   return e.items.map(e=>e+"!");
// });
const itemsEM = array.map(function(e) {
  e.items = e.items.map(e=>e+"!");
  return e;
});
console.log(itemsEM);