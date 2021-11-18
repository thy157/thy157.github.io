function setup() {
    angleMode(DEGREES); // Change the mode to DEGREES
    createCanvas(windowWidth, windowHeight);
}

let x1 = []
let y1 = []
let x2 = []
let y2 = []

function reset(){
    x1 = []
    y1 = []
    x2 = []
    y2 = []
}

function draw() {
    background(220)
    for (let i = 0; i < x1.length; i++) {
        line(x1[i], y1[i], x2[i], y2[i])
    }
    
    if (mouseIsPressed) {
        setLastEnd(mouseX, mouseY)
      }
}

function setLastEnd(x,y){
    let lastIndex = x2.length - 1
    x2[lastIndex] = x
    y2[lastIndex] = y 

}

function mousePressed() {
    let x = mouseX
    let y = mouseY
    x1.push(x);
    y1.push(y);
    x2.push(x);
    y2.push(y);
}

function mouseReleased() {
    setLastEnd(mouseX, mouseY)
}
function keyPressed(){
    console.log('keyPressed: ' + key)
    if (key = 'e') {
        reset();
    }
}
