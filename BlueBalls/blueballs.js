function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background('white')

    circle(mouseX, mouseY, 50)
    fill('blue')

    if (mouseX > windowWidth/2 && mouseY > windowHeight/2) {
        fill('red')
    } else if (mouseX < windowWidth/2 && mouseY < windowHeight/2) {
        fill('red')
    }


}