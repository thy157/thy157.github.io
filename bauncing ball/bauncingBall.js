function setup() {
  angleMode(DEGREES); // Change the mode to DEGREES
  createCanvas(windowWidth, windowHeight);
}

let Ycirkel = 0
let speed = 3
function draw() {
  background(100, mouseX, mouseY);


  // bolden
  fill('red');
  circle(windowWidth/2, Ycirkel, 150);

  // bevægelsen
  Ycirkel = Ycirkel +(4*speed)

  if (Ycirkel == windowHeight) {
    speed = -speed
  }

  if (Ycirkel == 0) {
    speed = -speed
  }
}

