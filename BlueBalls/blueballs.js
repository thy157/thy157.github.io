function setup() {
    createCanvas(windowWidth, windowHeight);
}
//let Ptrue = mouseX > windowWidth/2 || mouseY > windowHeight/2

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