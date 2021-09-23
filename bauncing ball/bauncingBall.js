function setup() {
    angleMode(DEGREES); // Change the mode to DEGREES
    createCanvas(400, 400);
  }
  
  let Ycirkel = 0
  let speed = 1

  function draw() {
    background(220);
    

    // bolden
    fill('red');
    circle(200,Ycirkel, 50);

    // bevægelsen
    Ycirkel = Ycirkel + speed

    if (Ycirkel == 380) {
      speed = -1
    }

    if (Ycirkel == 0) {
      speed = 1
    }
}

 