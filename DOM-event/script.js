let enter = document.getElementById("enter");
let userinput = document.getElementById("userinput");
let ul = document.querySelector("ul");
let items = document.querySelectorAll("li");
let deleteButton = document.querySelectorAll(".deleteButton");

deleteButton.forEach(function(delbtn){
  delbtn.addEventListener("click", function(){
    this.parentElement.remove();
  })
});

// for(let i = 0; i < deleteButton.length; i++) {
//   deleteButton[i].onclick = function() { 
//     this.parentNode.remove(); 
//   }
//   // deleteButton[i].addEventListener("click", function(){
//     // deleteButton[i].parentElement.remove();
//   // })
// }

items.forEach(function(item){
  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });
});

// for (let i = 0; i < items.length; i++) {
//   items[i].addEventListener("click", function () {
//     items[i].classList.toggle("done");
//   })
// }

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(userinput.value + " "));
  let btn = document.createElement("button");
  btn.setAttribute("class", "deleteButton");
  btn.appendChild(document.createTextNode("Delete"));
  li.appendChild(btn);
  ul.appendChild(li);
  userinput.value = "";
  btn.onclick = function(e){
    e.target.parentElement.remove();
  };
  li.onclick = function(e){
    e.target.classList.toggle("done");
  }
}

// function removeParent(evt){
// 	evt.target.parentNode.remove();
// } 

function addListAfterClick() {
  if (userinput.value) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (userinput.value && event.which === 13) {
    createListElement();
  }
}

enter.addEventListener("click", addListAfterClick);
// enter.onclick = addListAfterClick;

userinput.addEventListener("keypress", addListAfterKeypress);


// Scope ======================================

var fun = 5; // Root Scope
console.log("window", fun);

function funFunction() {
  // child scope
  var fun = "Hello";
  console.log(1, fun);
}
funFunction();
console.log("window", fun);

function funnerFunction() {
  // child scope
  var fun = "Bye";
  console.log(2, fun);
}
funnerFunction();
console.log("window", fun);

function funnestFunction() {
  // child scope
  fun = "AHHHHH";
  console.log(3, fun);
}
funnestFunction();
console.log("window", fun);
