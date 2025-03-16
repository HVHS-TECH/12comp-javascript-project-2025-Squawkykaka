gameState = 0
gameStateSetup = false

function setup() {

}

function draw() {
    background(220)
    gameManager()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function gameManager() {
    switch(gameState) {
        case 0:
            mainMenu()
            break;
    }
}

function mainMenu() {
    if(gameStateSetup === false) {
        spawnButton("Start Game", windowWidth/2, windowHeight/2)
        gameStateSetup = true
    }
}