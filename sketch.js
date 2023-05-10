let x, y, xspeed, yspeed, ballColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xspeed = 5;
  yspeed = 3;
  ballColor = color(random(255), random(255), random(255));
}

function draw() {
  background(220);

  fill(ballColor);
  ellipse(x, y, 50, 50);
  x += xspeed;
  y += yspeed;

  if (x > width || x < 0) {
    xspeed = -xspeed;
    ballColor = color(random(255), random(255), random(255));
  }
  if (y > height || y < 0) {
    yspeed = -yspeed;
    ballColor = color(random(255), random(255), random(255));
  }

  // add text at the top of the canvas
  fill(0);
  textSize(24);
  textAlign(CENTER);
  text(
    "Click to change the color - simple P5JS Webtoy for SWE",
    windowWidth / 2,
    50
  );
}

function mousePressed() {
  ballColor = color(random(255), random(255), random(255));
}
