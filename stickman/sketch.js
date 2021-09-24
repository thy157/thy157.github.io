function setup() {
  angleMode(DEGREES); // Change the mode to DEGREES
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  let leftHandX = mouseX; 
  let leftHandY = mouseY; 
  
  line(200, 165, leftHandX, leftHandY); // venstre arm 
  
  line(200, 150, 200, 300);
  line(200, 165, 150, 250);
  line(200, 300, 250, 370);
  line(200, 300, 150, 370);
 ellipse(200, 100, 100, 100); // hovede  
   
  
  ellipse(175, 90, 30, 30);
  ellipse(225, 90, 30, 30);

  
  fill(0, 0, 0);
  ellipse(175, 92, 15, 20);
  ellipse(225, 92, 15, 20);
  fill(255, 255, 255);
  
  noFill();
  let cx = 200; 
  let cy = 115;
  
  arc(cx, cy, 60, 50, 0, 180);
  
  
  }