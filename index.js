const debugMode = true
let asteroidGroup;

function setup() {
    new Canvas(windowWidth, windowHeight); // Correct for p5play

    asteroidGroup = new Group()

    camera.zoom = 0.7

    createPlayer(500, 500, 'purple');
    createAsteroid(500, 500)
}

function draw() {
    background(220);
    debugCode()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}