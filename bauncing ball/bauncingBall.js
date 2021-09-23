function setup() {
    angleMode(DEGREES); // Change the mode to DEGREES
    createCanvas(400, 400);
  }
  
  let Ycirkel = 0

  function draw() {
    background(220);
    

    // bolden
    fill('red');
    circle(200,Ycirkel, 50);

    Ycirkel = Ycirkel+1

  
}
function move(){
 if (Ycirkel == 200) {
    Ycirkel= 0
  }
} 