let snake;
let food;
let resolution = 30;
let w;
let h;

function setup() 
{
  let canvas = createCanvas(windowWidth - 16, windowHeight- 16);
  canvas.style('display', 'block');
  w = floor(width / resolution);
  h = floor(height / resolution);
  frameRate(5);
  snake = new Snake();
  createFood();
}

function createFood() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    snake.move(0,1);
  } else if (keyCode === UP_ARROW) {
    snake.move(0,-1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.move(1,0);
  } else if (keyCode === LEFT_ARROW) {
    snake.move(-1,0);
  }else if (keyCode === ENTER) {
    snake.move(0,0);
  }
}

function draw() 
{
  scale(resolution);
  background(0);
  
  if(snake.eat(food)) {
    snake.grow();
    createFood();
  }

  snake.update();
  snake.show();
  
  if(snake.gameOver()){
    print("Game Over");
    background(255,0,255);
    noLoop();
  }

  noStroke();
  fill(255,0,255);
  rect(food.x, food.y, 1, 1);
}