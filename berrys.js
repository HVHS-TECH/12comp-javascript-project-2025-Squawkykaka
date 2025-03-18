function spawnBerry(x, y) {
    berry = new Sprite(x, y, 20, 20)
    berry.life = 60*5
    berry.image = berryImage
    berry.image.scale = 0.2
    
    berryGroup.add(berry)
}