let buttonGroup;
let berryGroup;
let bearAttack = false;

let berryImage;

let score = 0;
let scoreGoal = 5;
let lives = 3;

let bear, floor;
let timeHoldingSpace = 0;

//  p5.js functions
function preload() {
	berryImage = loadImage('./assets/berry.jpg');
	bearImage = loadImage('./assets/bear.jpg');
	bunnyImage = loadImage('./assets/bunny.jpg');
}
function setup() {
	const CANVAS = new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;

	buttonGroup = new Group();
	berryGroup = new Group();

	buttonGroup.overlaps(allSprites);

	setupGameScreen();
}
function draw() {
	gameManager();
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

// utility functions
function gameManager() {
	switch (gameState) {
		case 0:
			mainMenuScreen();
			break;
		case 1:
			instructionsScreen();
			break;
		case 2:
			gameScreen();
			break;
		case 3:
			winScreen();
			break;
		case 4:
			loseScreen();
			break;
	}
}
function changeGameState(setupFunction) {
	world.gravity.y = 10;
	lives = 3

	textAlign(LEFT);
	textSize(20);
	allSprites.remove();
	setupFunction();
}
function playerMovement() {
	/* make the player charge up a jumptimer 
	value then when its released touching the 
	floor add it to the velocity */
	
	if (kb.pressing('space')) {
		if (timeHoldingSpace >= 150) {
			timeHoldingSpace = 150;
		}
		timeHoldingSpace += 1;
		text(timeHoldingSpace, 400, 400);
	}
	if (kb.released('space') && player.colliding(floor)) {
		player.vel.y = -timeHoldingSpace / 7;
		timeHoldingSpace = 0;
	}
}

// Scene manager scripts
function mainMenuScreen() {
	background(219);
	// Do main menu shtuff
}
function instructionsScreen() {
	background(120);
	spawnBerry(random(windowWidth), -20, 0, false);

	text(
		'Hold space to chanrge jump and tap F for ability, \nif you get hit by a bear you get hurt, so avoid bears\nCollect berries for score and find cool upgrades',
		windowWidth / 2,
		windowHeight / 2
	);
}
function gameScreen() {
	background(119);

	if (random(1, 500) <= 3) {
		spawnBear();
		bearAttack = true;
	}
	if (random(1, 500) <= 3) {
		spawnBerry(windowWidth, random(windowHeight), -10);
	}

	if (bearAttack) {
		bear.visible = true;
		bear.vel.x = -10;
		if (bear.x <= -200) {
			bear.remove();
		}
	}
	playerMovement();

	// berry scoring
	berryGroup.forEach(berry => {
		if (berry.collides(player)) {
			berry.remove();
			score += 1;
		}
	});

	if (player.x <= -10) {
		if (lives <= 1) {
			changeGameState(setupLoseScreen);
		} else {
			lives -= 1;
			player.remove()
			spawnPlayer(windowWidth/2, windowHeight/2);
		}
	}

	if(score >= scoreGoal) {
		changeGameState(setupWinScreen);
	}

	push()
	textSize(20);
	text(`Score: ${score}/${scoreGoal}\nLives: ${lives}`, 200, 45);
	pop();
}
function winScreen() {
	background(0, 255, 0);

	push();
	textSize(75);
	text(`YOU WON`, windowWidth / 2, windowHeight / 2 - 100)
	pop();

	push();
	textSize(25);
	text(`Score: ${score}`, windowWidth / 2, windowHeight / 2 - 50);
	pop();
}
function loseScreen() {
	background(255, 0, 0);

	push();
	textSize(75);
	text(`YOU DIED`, windowWidth / 2, windowHeight / 2 - 100)
	pop();

	push();
	textSize(25);
	text(`Score: ${score}`, windowWidth / 2, windowHeight / 2 - 50);
	pop();
}

// Scene setup scripts
function setupLoseScreen() {
	textAlign(CENTER);

	gameState = 4;
	spawnButton(
		'Restart Game',
		windowWidth / 2,
		windowHeight / 2 + 100,
		(button) => {
			score = 0
			changeGameState(setupGameScreen);
		}
	);
}
function setupMainMenu() {
	gameState = 0;
	console.log('pre instructions');
	spawnButton(
		'Instructions',
		windowWidth / 2 - 250,
		windowHeight / 2,
		(button) => {
			console.log('instuctions');
			changeGameState(setupInstructionsScreen);
		}
	);
	console.log('pre play game');
	spawnButton(
		'Play Game',
		windowWidth / 2 + 250,
		windowHeight / 2,
		(button) => {
			console.log('playgame');
			changeGameState(setupGameScreen);
		}
	);
}
function setupInstructionsScreen() {
	gameState = 1;
	textAlign(CENTER);

	spawnButton('Go Home', 100, 50, () => {
		console.log('hi');
		changeGameState(setupMainMenu);
	});

	spawnFloor();

	// Spawns bears along the screen.
	for (let i = 0; i < windowWidth/40; i++) {
		bear = new Sprite(40*i, 50, 20, 20)
		bear.image = bearImage;
		bear.image.scale = 0.4;
	}
}
function setupGameScreen() {
	gameState = 2;
	spawnPlayer(windowWidth/2, windowHeight/2);

	spawnButton('Go Home', 100, 50, () => {
		console.log('hi');
		changeGameState(setupMainMenu);
	});

	spawnFloor();
}
function setupWinScreen() {
	textAlign(CENTER);

	gameState = 3;
	console.log('pre play game');
	spawnButton(
		'Restart Game',
		windowWidth / 2,
		windowHeight / 2 + 100,
		(button) => {
			score = 0
			changeGameState(setupGameScreen);
		}
	);
}