const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let biggestNum = 0;
  arr.forEach(num => {
    if (num > biggestNum) {
      biggestNum = num;
    }
  })
  return biggestNum;
}
biggestNumberInArray(array);
biggestNumberInArray(array2);
biggestNumberInArray(array3);

function biggestNumberInArray2(arr) {
  let biggestNum = 0;
  for (num of arr) {
    if (num > biggestNum) {
      biggestNum = num;
    }
  }
  return biggestNum;
}
biggestNumberInArray2(array);
biggestNumberInArray2(array2);
biggestNumberInArray2(array3);

function biggestNumberInArray3(arr) {
  let biggestNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggestNum) {
      biggestNum = arr[i];
    }
  }
  return biggestNum;
}
biggestNumberInArray3(array);
biggestNumberInArray3(array2);
biggestNumberInArray3(array3);

// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  let isInBasket = false;
  // 1. list items in the basket
  for (item in basket) {
    // 2. check if lookingfor-item is in the basket
    if(item === lookingFor){
      isInBasket = true;
    }
  }
  return isInBasket;
}
checkBasket(amazonBasket, 'books');

// function checkBasketS(basket, lookingFor) {
//   for (item in basket) {
//     if (item === lookingFor) {
//       return `${lookingFor} is in your basket`
//     }
//   }
//   return 'that does not exist in your basket'
// }
// checkBasketS(amazonBasket, 'books');