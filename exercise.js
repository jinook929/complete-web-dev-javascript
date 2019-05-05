// EXERCISE 1 ==============================================
console.log(5 + "34");
console.log(5 - "4");
console.log(10 % 5);
console.log(5 % 10);
console.log("Java" + "Script");
console.log(" " + " ");
console.log(" " + 0);
console.log(true + true);
console.log(true + false);
console.log(false + true);
console.log(false - true);
console.log(3 - 4);
console.log("Bob" - "bill");
console.log("==============");
console.log(5 >= 1);
console.log(0 === 1);
console.log(4 <= 1);
console.log(1 != 1);
console.log("A" > "B");
console.log("B" < "C");
console.log("a" > "A");
console.log("b" < "A");
console.log(true === false);
console.log(true != true);
console.log("Hi There! It's " + "\"sunny\" " + "out.");

// EXERCISE 2 ==============================================
let firstName = "Jinook";
let lastName = "Jung";
let fullName = firstName + " " + lastName;
console.log(fullName);
document.write(fullName);

let a = 34;
let b = 21;
a = 2;
console.log(a + b);
document.write(` ${a + b}`);

let c;
console.log(c);

// EXERCISE 3 ==============================================
// let firstNum = Number(prompt("Type the first number"));
// let secondNum = Number(prompt("Type the second number"));
// let sum = firstNum + secondNum;
// let mult = firstNum * secondNum;

// alert("The sum of the two numbers is " + sum);
// alert("The multiplication of the two numbers is " + mult);

// EXERCISE 4 ==============================================
// let age = Number(prompt("How old are you?"));

// if(age < 18) {
//   alert("Sorry, you are too young to drive this car. Powering off");
// } else if(age === 18) {
//   alert("Congratulations on your first year of driving. Enjoy the ride!");
// } else {
//   alert("Powering On. Enjoy the ride!");
// }

// EXERCISE 5. function ==============================================
function checkDriverAge() {
  let age = Number(prompt("What is your age?", 0));
  let print = document.getElementById("text");
  if (age < 18) {
    print.innerHTML = "Sorry, you are too young to drive this car. Powering off.";
    return "Sorry, you are too young to drive this car. Powering off.";
  } else if (age === 18) {
    print.innerHTML = "Congratulations on your first year of driving. Enjoy the ride!";
    return "Congratulations on your first year of driving. Enjoy the ride!";
  } else {
    print.innerHTML = "Powering On. Enjoy the ride!";
    return "Powering On. Enjoy the ride!";
  }
}

let checkDriverAge2 = function (age) {
  if (Number(age) < 18 || age === undefined) {
    document.write("Sorry, you are too young to drive this car. Powering off.<br>");
  } else if (Number(age) === 18) {
    document.write("Congratulations on your first year of driving. Enjoy the ride!<br>");
  } else {
    document.write("Powering On. Enjoy the ride!<br>");
  }
}

//  EXERCISE 6. ARRAY ===============================================
let array = ["Banana", "Apples", "Oranges", "Blueberries"];
array.shift();
array.sort();
array.push('kiwi');
console.log(array);
array.splice(0, 1);
array.reverse();
console.log(array);

let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array2[1][1][0]);

//  EXERCISE 7. OBJECT ===============================================
// let user1 = {
//   username: 'tommy',
//   password: 'abc'
// };
let database = [
  {
    username: 'tommy',
    password: 'abc'
  },
  {
    username: 'sally',
    password: 'asd'
  },
  {
    username: 'john',
    password: 'qwe'
  },
];

let newsfeed = [
  {
    username: 'tommy',
    timeline: 'What a great day!'
  },
  {
    username: 'tim',
    timeline: 'So thankful...'
  },
  {
    username: 'yoyo',
    timeline: 'Passion and Perseverance.'
  }
];

function isUserValid(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (database[i].username === username && database[i].password === password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert('Sorry... wrong username and password.');
  }
}

let usernamePrompt = prompt('What is your username?');
let passwordPrompt = prompt('What is your password?');
signIn(usernamePrompt, passwordPrompt);

