// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
let person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    city      : "NYC"
};

// let firstName = person.firstName;
// let lastName = person.lastName;
// let age = person.age;
// let eyeColor = person.eyeColor;
let {firstName, lastName, age, eyeColor, city} = person;


// Object properties
let a = 'test';
let b = true;
let c = 789;

let okObj = {
  a: a,
  b: b,
  c: c
};


// Template strings
let message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

let message1 = `Hello ${firstName} have I met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}

function isValidAge(age = 10) {
    return age
}

// Symbol
// Create a symbol: "This is my first Symbol"
const sym1 = Symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

const whereAmI_ = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}