function fnc_open_game() {
	
	let temp = document.getElementById('project_8');
	if (window.innerWidth >= 750) {
	temp.setAttribute(	'href', '#popup_game');
	} else 	{		
	temp.setAttribute(	'href', '#popup1');
	fnc_popUp(event);
	}
}


const canvas = document.getElementById("game_snake");
const ctx = canvas.getContext("2d");
const groundImg = new Image();
groundImg.src = "image/ground.png";
const foodImg = new Image();
foodImg.src = "image/food.png";

let box = 32;
let score = 0;
let food = {
	x: Math.floor(Math.random() * 17 + 1) * box,
	y: Math.floor(Math.random() * 15 + 3) * box,
};
let snake = [];
snake [0]  = {
	x: 9*box,
	y: 10*box
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
	if (event.keyCode == 37 && dir != "right") //влево
		dir = "left";
	if (event.keyCode == 38 && dir != "down") //вверх
		dir = "up";
	if (event.keyCode == 39 && dir != "left") //вправо
		dir = "right";
	if (event.keyCode == 40 && dir != "up") //вниз
		dir = "down";
}

function eatTail (head, arr) {
 for ( let i = 0; i <arr.length; i++) {
	 if (head.x == arr[i].x && head.y == arr[i].y) clearInterval(game);
 }
}
function drawGame() {
	ctx.drawImage(groundImg, 0, 0);
	ctx.drawImage(foodImg, food.x, food.y);
	
	for (let i = 0; i < snake.length; i++) {
		ctx.fillStyle = i == 0 ? "blue" : "RoyalBlue";
		ctx.fillRect(snake[i].x,snake[i].y, box, box);
	}
	
	ctx.fillStyle = "White";
	ctx.font = "35px Arial";
	ctx.fillText(score, box*2.5, box*1.5);
	
	let snakeX = snake[0].x;
	let snakeY = snake[0].y;
	
	if (snakeX == food.x &&  snakeY == food.y)	{
		score++;
		food = {
			x: Math.floor(Math.random() * 17 + 1) * box,
			y: Math.floor(Math.random() * 15 + 3) * box,
		};
	}
	else {
		snake.pop();
	}
	
	if (snakeX < box || snakeX > box * 17 || snakeY < 3* box || snakeY > box *17) clearInterval(game);
	
	if (dir == "left") snakeX -= box;
	if (dir == "right") snakeX += box;
	if (dir == "up") snakeY -= box;
	if (dir == "down") snakeY += box;
	

	let newHead = {
		x: snakeX,
		y: snakeY
	};
	
	eatTail(newHead, snake);
	snake.unshift(newHead);
}


let game = setInterval(drawGame, 150);