function setup() {
  createCanvas(900, 900);
  background(152, 5, 168);
}

function draw() {
 //background(152, 5, 168);
  
  fill(random(255), random(255), random(255));
  let x = random(width);
  let y = random( height)
  rect(x, y ,50,50);
  
}
