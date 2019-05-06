let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.querySelector("body");
let h3 = document.querySelector("h3");
let random = document.querySelector("#random");

function setGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value;
  h3.textContent = body.style.background;
}

color1.addEventListener('change', function () {
  setGradient();
})

color2.addEventListener('change', function () {
  setGradient();
})

random.addEventListener("click", function () {
  let randomHex1 = '#' + Math.floor(Math.random() * 16777217).toString(16).padStart(6,0);
  let randomHex2 = '#' + Math.floor(Math.random() * 16777217).toString(16).padStart(6,0);
  let randomHexGrad = randomHex1 + ', ' + randomHex2;
  body.style.background = "linear-gradient(to right, " + randomHexGrad + ")";
  h3.textContent = body.style.background;
  color1.value = randomHex1;
  color2.value = randomHex2;
})