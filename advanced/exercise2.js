//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}

let experiencePoints = winBattle() ? 10 : 1;

// function winBattle() {
//     return false;
// }

// function experiencePoints1() {
//     let points = (winBattle()) ? 10 : 1;
//     return points;
// }

//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}
moveCommand("up");

//#2 return value when moveCommand("forward");
moveCommand("forward");

//#3 return value when moveCommand("back");
moveCommand("back");

//#4 return value when moveCommand("right");
moveCommand("right");

//#5 return value when moveCommand("left");
moveCommand("right");

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function haveFruit(fruit) {
    let inventoryCheck;
    switch (fruit) {
        case "apple":
            inventoryCheck = "We have apples";
            break;
        case "pear":
            inventoryCheck = "We have pears";
            break;
        case "banana":
            inventoryCheck = "We have bananas";
            break;
        case "orange":
            inventoryCheck = "We have oranges";
            break;
        default:
            inventoryCheck = "We do not have that fruit"
    }
    return inventoryCheck;
}

haveFruit("apple");
haveFruit("pear");
haveFruit("banana");
haveFruit("orange");
haveFruit("melon");