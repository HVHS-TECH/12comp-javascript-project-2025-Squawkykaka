function spawnBerry(x, y) {
    berry = new Sprite(x, y, 20, 20)
    berry.life = 60*20
    berry.image = './assets/berry.jpg'
    berry.image.scale = 0.2
}