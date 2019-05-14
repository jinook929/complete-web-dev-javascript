// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let nums = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

// 1. Sort the numbers in array

// 2. Group the same numbers into the same array

function newArray(arr) {
  // 1. Sort the numbers in array
  let sortedNums = nums.sort((num1, num2) => num1 - num2);

  // 2. Group the same numbers into the same array
  let finalArray = []; // prep for final result

  (function makeGroupArr() {
    let counter = 0; // counter for the initial index of each group[array]
    let init = 0; // counter for sortedNums array
    while (init < arr.length) { // loop for arr.length times
      let processedNums = sortedNums.filter(num => (num === nums[counter])).length; // the number of the same items
      if (processedNums > 1) { // in case the number of the same items is more than one
        let newArr = [];
        for (let i = 0; i < processedNums; i++) {
          init++;
          newArr.push(nums[counter]);
        }
        finalArray.push(newArr);
      } else { // in case the number of the same item is just one
        init++;
        finalArray.push(sortedNums[counter]);
      }
      counter += processedNums;
    }
  })();

  return finalArray;
}

newArray(nums);



// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

let nums1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let targetNum = 11;

function answer(arr, target) {
  let answerArr = [];
  (function findAnswers() {
    for (let n1 of arr) {
      for (let n2 of nums1) {
        if (n1 + n2 === target && n1 !== n2 && n1 < n2) {
          let answerNums = [];
          answerNums.push(n1);
          answerNums.push(n2);
          answerArr.push(answerNums);
        }
      }
    }
  })();
  if (!answerArr.length) {
    return "There's no combination for the target number."
  }
  return answerArr;
}

answer(nums1, targetNum);



// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function colorFormatChanger (...input) {
  if(input.length === 3) {
    function rgb2hex(rgb) {
      let tempHex = Number(rgb).toString(16);
      if (tempHex.length === 1) {
        tempHex = tempHex.padStart(2, '0')
      }
      return tempHex;
    }
    let hexRed = rgb2hex(input[0]);
    let hexGreen = rgb2hex(input[1]);
    let hexBlue = rgb2hex(input[2]);
    return `#${hexRed}${hexGreen}${hexBlue}`;
  } else {
    console.log(input[0])
    let hexPart = input[0].replace('#', '');
    let red = parseInt(hexPart.substring(0, 2), 16);
    let green = parseInt(hexPart.substring(2, 4), 16);
    let blue = parseInt(hexPart.substring(4, 6), 16);
    return `rgb(${red}, ${green}, ${blue})`;
  }
}

// function RGBtoHEX(r, g, b) {
//   function rgb2hex(rgb) {
//     let tempHex = Number(rgb).toString(16);
//     if (tempHex.length === 1) {
//       tempHex = tempHex.padStart(2, '0')
//     }
//     return tempHex;
//   }
//   let red = rgb2hex(r);
//   let green = rgb2hex(g);
//   let blue = rgb2hex(b);
//   return `#${red}${green}${blue}`;
// }

// function HEXtoRGB(hex) {
//   let hexPart = hex.replace('#', '');
//   let red = parseInt(hexPart.substring(0, 2), 16);
//   let green = parseInt(hexPart.substring(2, 4), 16);
//   let blue = parseInt(hexPart.substring(4, 6), 16);
//   return `rgb(${red}, ${green}, ${blue})`;
// }