const debugMode = true

function setup() {
    new Canvas(windowWidth, windowHeight); // Correct for p5play
    createPlayer(500, 500, 'purple');
}

function draw() {
    background(220);
    debugCode()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}