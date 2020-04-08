function generateRandomColors(squaresNumber) {
  let colorArray = [];

  for (let i = 0; i < squaresNumber; i++) {
    colorArray.push(randomColor());
  }

  return colorArray;
}

function changeColors(color) {
  squares.forEach(function(square) {
    square.style.background = color;
  })
}

function pickColor(){
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let color = "rgb(" + red + ", " + green + ", " + blue + ")";

  return color;
}

let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");


colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click", function() {
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (let i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
  }
})

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  for (let i = 0; i < squares.length; i++){
    // add initial colors to squares
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
})

for (let i = 0; i < squares.length; i++){
  // add initial colors to squares
  squares[i].style.background = colors[i];
  // add clickListeners to squares
  squares[i].addEventListener("click", function() {
    // grab its color and compare
    let clickedColor = this.style.background;
    if (pickedColor === clickedColor) {
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play Again?";
      changeColors(pickedColor);
      h1.style.background = pickedColor;
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try again!";
    }
  })
}
