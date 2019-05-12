// PASS BY VALUE PASS BY REFERENCE =========================================
let a = 5;
let b = a;
b++;
console.log(a);
console.log(b);

let obj = {a: 'a', b: 'b', c: {deep: "try and copy me"}};
let reference = obj;
console.log('origianl', obj);
console.log('reference', reference);
obj.c = 5;
console.log('origianl', obj);
console.log('reference', reference);

let obj = {a: 'a', b: 'b', c: {deep: "try and copy me"}};
let clone = Object.assign({}, obj);
console.log('original', obj);
console.log('clone', clone);
obj.c = 5;
clone.a = 1;
console.log('original', obj);
console.log('clone', clone);

let obj = {a: 'a', b: 'b', c: {deep: "try and copy me"}};
let clone2 ={...obj};
console.log('original', obj);
console.log('clone2', clone2);
obj.c.deep = 5;
console.log('original', obj);
console.log('clone2', clone2);
obj.c = 5;
clone2.a = 1;
console.log('original', obj);
console.log('clone2', clone2);


let obj = {a: 'a', b: 'b', c: {deep: "try and copy me"}};
let superClone = JSON.parse(JSON.stringify(obj));
console.log('original', obj);
console.log('superClone', superClone);
obj.c.deep = 5;
console.log('original', obj);
console.log('superClone', superClone);
obj.c = 5;
superClone.a = 1;
console.log('original', obj);
console.log('superClone', superClone);

//Evaluate these:
//#1
[2] === [2] // false
{} === {} // false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);
object1.a = 4;
console.log(object1);
console.log(object2);
console.log(object3);
console.log(object4);


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 
class Animal {
  constructor(name, type, color) {
    this.type = type;
    this.name = name;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(name, type, color){
    super(name, type, color)
  }
  sound(){
    console.log(`Moo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
  }
}

const cow1 = new Mamal('Happy', 'cow', 'brown');
const cow2 = new Mamal('Rocky', 'cow', 'white');