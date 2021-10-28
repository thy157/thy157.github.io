function setup() {
    angleMode(DEGREES); // Change the mode to DEGREES
    createCanvas(windowWidth, windowHeight);
}

let x1 = 0
let y1 = 0
let x2 = 400
let y2 = 400

function mousePressed() {
  x1 = mouseX
  x2 = mouseY
}

function mouseReleased() {
 x2 = mouseX
 y2 = mouseY
}
line(x1, y1, x2, y2)

