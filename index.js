gameState = 0

let buttonGroup;
let berryGroup;

let berryImage;

function preload() {
    berryImage = loadImage('./assets/berry.jpg')
}

function setup() {
    const CANVAS = new Canvas(windowWidth, windowHeight)
    world.gravity.y = 10;

    buttonGroup = new Group()
    berryGroup = new Group()

    buttonGroup.overlaps(allSprites)

    setupMainMenu()
}

function draw() {
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
        case 2:
            gameScreen()
            break;
    }
}

function changeGameState(setupFunction) {
    textAlign(LEFT)
    textSize(20)
    allSprites.remove()
    setupFunction()
}

function mainMenu() {
    background(220)
    // Do main menu shtuff
}

function instructionsScreen() {
    background(120)
    spawnBerry(random(windowWidth), -20)

    berryGroup.draw()
    text("Use WASD keys to move and F for ability, \nif you get hit by a bear you get hurt, so avoid bears\nCollect berries for score and find cool upgrades", windowWidth/2, windowHeight/2)
    // stuff + thingd
}

function gameScreen() {
    background(120)
}

function setupMainMenu() {
    gameState=0
    console.log("pre instructions")
    spawnButton("Instructions", windowWidth/2-250, windowHeight/2, (button) => {
        console.log("instuctions")
        changeGameState(setupInstructionsScreen)
    })
    console.log("pre play game")
    spawnButton("Play Game", windowWidth/2+250, windowHeight/2, (button) => {
        console.log("playgame")
        changeGameState(setupGameScreen)
    })
}

function setupInstructionsScreen() {
    gameState = 1
    textAlign(CENTER)

    spawnButton("Go Home", 100, 50, () => {
        console.log("hi")
        changeGameState(setupMainMenu)
    })
}

function setupGameScreen() {
    gameState = 2

    spawnButton("Go Home", 100, 50, () => {
        console.log("hi")
        changeGameState(setupMainMenu)
    })
}