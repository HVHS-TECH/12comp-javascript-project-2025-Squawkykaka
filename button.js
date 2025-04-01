function spawnButton(text, x, y, func) {
	let button = new Sprite(x, y, textWidth(text) + 100, 50, "k");
	button.text = text;
	button.textSize = 20;

	button.onClickFunction = func; // Store function separately

	button.update = () => {
		if (button.mouse.pressing()) button.onClickFunction(button);
	};

	buttonGroup.add(button);
}
