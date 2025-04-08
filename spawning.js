/**
 * Spawns a button at specified coords with a specified function
 * @param {String} text The text the button displays
 * @param {int} x The x position of the button
 * @param {int} y The y position of the button
 * @param {Function} func The function ran when the button is pressed
 */
function spawnButton(text, x, y, func) {
	let button = new Sprite(x, y, textWidth(text) + 100, 50, 'k');
	button.text = text;
	button.textSize = 20;

	button.onClickFunction = func; // Store function separately

	button.update = () => {
		if (button.mouse.pressing()) button.onClickFunction(button);
	};

	buttonGroup.add(button);
}

// Spawning functions
function spawnBerry(x, y, xVel) {
	berry = new Sprite(x, y, 20, 20);
	berry.life = 60 * 5;
	berry.vel.x = xVel;
	berry.image = berryImage;
	berry.image.scale = 0.2;

	berry.update = () => {
		berry.vel.x = xVel;
	};

	berryGroup.add(berry);
}

function spawnBear() {
	bear = new Sprite(windowWidth - 200, windowHeight - 200, 120);
	bear.image = bearImage;
	bear.image.scale = 0.4;
	bear.visible = false;
}

function spawnPlayer(x, y) {
	player = new Sprite(x, y, 40, 40);
	player.bounciness = 0;
	player.img = bunnyImage;
	player.img.scale = 0.4;
	player.rotationLock = true;
	player.img.offset = { x: 0, y: -125 }
}

function spawnFloor() {
	floor = new Sprite(
		windowWidth / 2,
		windowHeight - 20,
		windowWidth * 2,
		1,
		'K'
	);
	floor.bounciness = 0;
}