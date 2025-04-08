function spawnBerry(x, y, xVel, doScoring) {
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
