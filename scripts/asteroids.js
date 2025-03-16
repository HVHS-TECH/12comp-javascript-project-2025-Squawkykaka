let lanceCreated = false
let joint;

function createAsteroid(x, y) {
    asteroid = new Sprite(x,y, random(100, 300))
    asteroid.color = "red"

    asteroid.update = () => {
        if (asteroid.mouse.pressing() && lanceCreated == false) {
            joint = new DistanceJoint(player, asteroid)
            lanceCreated = true
        }
    }
    asteroidGroup.add(asteroid)
}

function mouseReleased() {
    joint.remove()
    lanceCreated = false
}