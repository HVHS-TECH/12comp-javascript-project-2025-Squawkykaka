function debugText(textToDraw, x, y) {
    if (debugMode == true) {
        fill("black");
        text(textToDraw, x, y)
    }
}

function debugCode() {
    debugText(boosterCooldown, 100, 100)
}