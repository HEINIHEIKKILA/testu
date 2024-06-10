let img;

function preload() {
  img = loadImage('Image 10.6.2024 at 12.44.jpg', 'Screenshot 2024-06-09 at 14.00.33.png'); // Varmista, että polku on oikein
}

function setup() {
  createCanvas(800, 800);
  image(img, 0, 0, 800, 800); // Piirretään kuva
  noLoop();
}

function draw() {
  stroke(255, 255, 0);
  strokeWeight(2);
  noFill();
  
  // Piirretään rihmastoa satunnaisesti kuvan päälle
  for (let i = 0; i < 100; i++) {
    let startX = random(width);
    let startY = random(height);
    let endX = startX + random(-200, 200);
    let endY = startY + random(-200, 200);
    line(startX, startY, endX, endY);
    
     blendMode(ADD); // Valitse sopiva blend mode
  tint(255, 128, 100, 25); // Puoliläpinäkyvyys videolle
  image(img, 0, 0, width, height);
  blendMode(BLEND); // Palauta normaali blend mode
  }
}
