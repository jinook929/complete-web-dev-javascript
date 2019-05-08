// CLOSURE ===================
function outter(){
  var title = 'coding everybody';  
  function inner(){        
      alert(title);
  }
  return inner();
}

outter();
// = = = = = = = = = = =
function outter() {
let title = "coding";
return function() {
  alert(title);
}
}

let inner = outter();

// CURRYING ==================
const multiply = (a, b) => a * b;
multiply(12, 4);

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(12)(4);

// COMPOSE ==================
const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;

compose(sum, sum)(5);

//===========================================================
//Solve these problems:

//#1 Create a one line function that adds two parameters
const addTwoNum = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // answer: 13

function addTo_(x) {
  return function(y) {
    return x + y;
  }
}

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) // answer: 31


//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) // answer: 17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10) // answer: 16

function add1(num) {
  return num + 1;
}

function add5(num) {
  return num + 5;
}

let g = add5(10); // output = 15
let f = add1(15); // output = 16

//What are the two elements of a pure function?
// 1. Deterministic --> always produces the same results given the same inputs
// 2. No Side Effects -->  It does not depend on any state, or data, change during a program’s execution. It must only depend on its input elements.
