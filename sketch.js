let n = 0;
let d = 0;
let dSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  
  //dSlider = createSlider(1, 180, 1);
}

function draw() {
  background(0);
  translate(width / 2, height / 2);
  strokeWeight(1);
  stroke(255);
 // d = dSlider.value();
  noFill();
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i * d;
     let r = 200 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  noFill();
  strokeWeight(3);
  stroke(255, 0, 255, 200);
  beginShape();
  for (let i = 0; i < 361; i++) {
    let k = i;
     let r = 150 * sin(n * k);
    let x = r * cos(k);
    let y = r * sin(k);
    vertex(x, y);
  }
  endShape();
  
  if (n > 15) {
    n = 0;
  } else if (d > 15) {
    d = 0;
  } else {
    n += 0.01; 
    d += 0.01;
  
  }
  
}