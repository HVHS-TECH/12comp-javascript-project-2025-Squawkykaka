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
