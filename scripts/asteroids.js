function createAsteroid(x, y) {
    asteroid = new Sprite(x,y, random(30, 70))
    asteroid.color = "red"

    asteroid.update = () => {
        if (asteroid.mouse.pressing()) {
            joint = new DistanceJoint(player, asteroid)
        }
    }

    asteroidGroup.add(asteroid)
}