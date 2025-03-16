gameState = 0
gameStateSetup = false

function setup() {
    const CANVAS = new Canvas(windowWidth, windowHeight)
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
        case 1:
            instructionsScreen()
            break;
    }
}

function changeGameState(newGameState) {
    allSprites.remove()
    gameStateSetup = false
    gameState = newGameState
}

function mainMenu() {
    if(gameStateSetup === false) {
        spawnButton("Instructions", windowWidth/2-250, windowHeight/2, ()=>{
            console.log("hi")
            changeGameState(1)
        })
        gameStateSetup = true
    }
}

function instructionsScreen() {
    if(gameStateSetup === false) {
        spawnButton("Go Home", 100, 50, ()=>{
            console.log("hi")
            changeGameState(0)
        })
        gameStateSetup = true
    }
}