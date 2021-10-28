function setup() {
    angleMode(DEGREES); // Change the mode to DEGREES
    createCanvas(windowWidth, windowHeight);
}


let x1 = 0
let y1 = 0
let x2 = 0
let y2 = 0

function mousePressed() {
    x1 = mouseX
    y1 = mouseY
}

function mouseReleased() {
    x2 = mouseX
    y2 = mouseY
}

function draw() {
    background(220)
    line(x1, y1, x2, y2)
}
