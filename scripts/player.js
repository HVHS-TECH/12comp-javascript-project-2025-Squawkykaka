let boosterCooldown = 0;
let boosterCooldownMax = 50;

function createPlayer(x, y, color) {
    player = new Sprite(x, y, 30, 30);
    player.color = color;

    player.update = () => {
        boosterRocketMovement();
        lanceMovement()
    };
}

function boosterRocketMovement() {
    if (boosterCooldown === 0) {
        if (kb.pressing('a')) {
            player.vel.x -= 2;
            boosterCooldown = boosterCooldownMax;
        }
        if (kb.pressing('d')) {
            player.vel.x += 2;
            boosterCooldown = boosterCooldownMax;
        }
    }

    if (boosterCooldown > 0) {
        boosterCooldown--;
    }
}

function lanceMovement() {
    // console.log(dist(player.x, player.y, mouse.x, mouse.y))
    // if (mouse.presses) {
    //     lanceJoint = new DistanceJoint(player, )
    // }
}