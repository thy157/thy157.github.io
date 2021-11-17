function setup() {
    angleMode(DEGREES); // Change the mode to DEGREES
    createCanvas(windowWidth, windowHeight);
}

let x1 = [];
let y1 = [];
let x2 = [];
let y2 = [];

setLastEnd(x,y){
    let lastIndex = x2.length -1
    x2[lastIndex] = x
    y2[lastIndex] = y  
}

function mousePressed(){
    let x = mouseX
    let y = mouseY
    x1.push(x);
    y1.push(y);
    x2.push(x);
    y2.push(y);
}

function mouseReleased(){
    setLastEnd(mouseX, mouseY)
}

function draw(){
    for (let i = 0; i< x1.length; i++) {
        line(x1[i], y1[i], x2[i], y2[i])
    }
    line(x1[i], y1[i], x2[i], y2[i])
}