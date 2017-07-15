//keep track of mode
var numOfSquares=6;
var colors = [];
var pickedColor;

var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");
var resetButton = document.querySelector("#Reset");

//run when page loads

init();

function init() {

	setUpModeButtons();
	setUpSquares();
	
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; i++)
{
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
			reset();
			//figure out how many squares

			//pick new color
			//pick a new pickedColor
			//update page to reflect changes.
		});
	}
}

function setUpSquares() {
	for(var i = 0; i < squares.length; i++){
			squares[i].addEventListener("click", function(){
				//grab color of clciked square, 
				var clickedColor = this.style.background;
				//compare color to pickedColor
				console.log(clickedColor, pickedColor);
				if(clickedColor === pickedColor){
					messageDisplay.textContent = "Correct";
					resetButton.textContent = "Play Again?";
					changeColors(clickedColor);
					h1.style.background = clickedColor;
				} else {
					this.style.background= "#232323";
					messageDisplay.textContent = "Try Again";
				}
			});
		}
}


function reset() {
	//generate all new colors
	colors = generateRandomColors(numOfSquares);
	//pick a new color
	pickedColor = pickColor();
	//change color display to match picked color.
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}
// easyBtn.addEventListener("click", function(){
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numOfSquares = 3;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	//need to make sure bottom three are not visible anymore their useless.
// 	for(var i = 0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}
// 		else {
// 			squares[i].style.background = "none";
// 		}
// 	}	
// 	messageDisplay.textContent = "";
// })

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numOfSquares = 6;
// 	colors = generateRandomColors(numOfSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	//need to make sure bottom three are not visible anymore their useless.
// 	for(var i = 0; i<squares.length; i++){
		
// 			squares[i].style.background = colors[i];
		
// 			squares[i].style.background = "block";
		
// 	}	
// 	messageDisplay.textContent = "";
// })

resetButton.addEventListener("click", function(){
	reset();
	})

function changeColors(color){
	//loop through all squares
	for(var i = 0; i < colors.length; i++){
	//change each color to match given color
	squares[i].style.background=color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//create an array
	var arr = [];
	//repeat num times
	for(var i=0; i<num; i++){
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a red from zero to 255
	var r = Math.floor(Math.random() * 256);

	//pick a green from 0-255
	var g = Math.floor(Math.random() * 256);

	//pick blue from 0-255	
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}