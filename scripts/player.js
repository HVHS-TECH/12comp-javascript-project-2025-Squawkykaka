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
            player.rotationSpeed -= 2;
            boosterCooldown = boosterCooldownMax;
        }
        if (kb.pressing('d')) {
            player.rotationSpeed += 2;
            boosterCooldown = boosterCooldownMax;
        }
    }

    if (kb.pressing('s')) {
        player.vel.y += 0.2;
    }
    if (kb.pressing('w')) {
        player.vel.y -= 0.2;
    }

    if (boosterCooldown > 0) {
        boosterCooldown--;
    }

    player.rotationSpeed = player.rotationSpeed / 1.01
}

function drawTargetingLine() {
    
}