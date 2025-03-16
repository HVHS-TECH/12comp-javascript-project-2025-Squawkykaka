function spawnButton(text, x, y, func) {
    button = new Sprite(x, y, textWidth(text)+100, 50)
    button.text = text
    button.update = () => {
        if(button.mouse.pressing()) {func(); button.color = "blue"}
        else button.color = "red"
    }
}